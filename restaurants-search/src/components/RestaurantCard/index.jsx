import React from 'react';

import { Restaurant, RestaurantInfo, Title, Address } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <p>Avaliação</p>
            <Address>Rua Cambotás 545</Address>
        </RestaurantInfo>
    </Restaurant>
);

export default RestaurantCard;