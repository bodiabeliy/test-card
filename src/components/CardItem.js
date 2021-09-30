import React from 'react';
import {Card, Chip} from '@material-ui/core';


const CardItem = (content) => {

    return (
        <Card className="card__item">
=           <img src={content.content.image}  />
=           <div>
                <div className="card__title">
                    <h1>{content.content.title}</h1>
                    <Chip label={content.content.price + '$'} variant="outlined" />
                </div>
                <p>{content.content.body}</p>
           </div>
        </Card>
    );
};

export default CardItem;