import React from 'react';
import Page from './page';

const CardProduct = (props) => {

    const { card } = props;

    return (

        <Page card={card} />
        
    );
}

export default CardProduct;