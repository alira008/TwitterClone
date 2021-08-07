import React from 'react';
import Layout from '../layout/Layout';
import { Route } from 'react-router-dom';
import Home from '../../pages/HomePage/Home';
import ComposeTweetPage from '../../pages/ComposeTweetPage/ComposeTweetPage';

const AuthRouting: React.FC = () => {
    return (
        <Layout>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/compose/tweet"><ComposeTweetPage /></Route>
        </Layout>
    )
}

export default AuthRouting
