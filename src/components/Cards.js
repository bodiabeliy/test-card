import React from 'react';
import clasess from '../styles.scss'
import CardItem from '../components/CardItem'
import {Box, Stack, Pagination} from '@material-ui/core';

const Cards = ({posts}) => {
    return (
        <div className={clasess.card} >
            <Box className={clasess.card__list}>
                { posts.map(post => <CardItem content ={post} key={post.id} />) }
            </Box>
            <Stack spacing={2}>
                <Pagination count={10} showFirstButton showLastButton />
            </Stack>
        </div>
    );
};

export default Cards;