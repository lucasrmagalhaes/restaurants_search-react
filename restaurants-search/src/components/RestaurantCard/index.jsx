import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#E7711C"/>
            <Address>Rua Cambotás 545</Address>
        </RestaurantInfo>
    </Restaurant>
);

export default RestaurantCard;