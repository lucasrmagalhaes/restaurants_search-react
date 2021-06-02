import React from 'react';

import logo from '../../assets/logo.svg';
import { Container, Search } from './styles';

const Home = () => (
    <Container>
        <Search>
            <img src={logo} alt="Logo do restaurante" />
        </Search>
    </Container>
);

export default Home;