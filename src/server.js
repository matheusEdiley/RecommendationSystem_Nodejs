import express from 'express';
import { server } from './serverConfig';
import './routes';
//import {routerTest} from './routes/testRoutes';
import { UserRoute } from './Users/UserRoute';
import { RecommendationRoute } from './Recommendations/RecommendationRoute';

server.use('/users', UserRoute);
server.use('/recommendations', RecommendationRoute);

export { server };
