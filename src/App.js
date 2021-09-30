import axios from 'axios';
import React, { useState,useMemo, useEffect } from 'react';
import Cards from './components/Cards'
import SearchField from './components/Search'
import Select from './components/SelectField'
import {AppBar, Button} from '@material-ui/core'
import CircularProgress from "@material-ui/core/CircularProgress";



function App() {

  const [posts, setPosts] = useState([])

  const [sortChose, setSortChose] =useState('')
  const [search, setSearch] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [pagination, setPagination] = useState(0)
  const [limitCard] = useState(10)
  const [pageTotal] = useState(1)

  useEffect(() => {
    gettingPost()
  }, [])
  //


  //
  const Sort =(selectOption) => {
    setSortChose(selectOption)
    setPosts([...posts].sort((a, b)=> a[selectOption].localeCompare(b[selectOption])))
  }

  const SearchFilter = useMemo(() => {
    return posts.filter((post) => post.title.includes(search))
  }, [search, Sort])
  const arr =[]
  // 
  async function gettingPost(limit =limitCard, page = pageTotal) {
    try {
      const responce = await axios.get(`http://localhost:3000/cars`, {
        params: {
          _limit: limit,
          _page: page
        }
      })
      setPosts(responce.data)
      const totalCards= responce.headers['x-total-count'];
      const t = Math.ceil(totalCards /limitCard)
      for(let i =0; i<pagination;i++) {
        arr.push(i+1)
      }
      setPagination(arr)
      console.log('array of pages:',arr);

      setLoading(false)
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="App">
      <AppBar>
      <div className="filter">
      <SearchField 
        userChose={search}
        placeholder='Serach'
        onChange={e=> setSearch(e.target.value)}
        />
      <Select
          userChose={sortChose}
          UserChange={Sort}
          options={[
            {type:'title', category: 'Name'},
            {type:'body', category: 'Description'},
            {type:'price', category: 'Price'}
          ]} 
          defaultValue="Sort by:" 
        />
        </div>
      </AppBar>
     {
       isLoading
       ? <CircularProgress />
       : <Cards posts={SearchFilter}/>
     }
    <div className="cards__field">
      {arr.map(page => 
      <Button>{page}</Button>  
      )}
    </div>
    </div>
  );
}

export default App;
