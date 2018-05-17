import express from 'express';
import { server } from './serverConfig';
import './routes';
import { UserRoute } from './Users/UserRoute';
import { RecommendationRoute } from './Recommendations/RecommendationRoute';
import { FeedRoute } from './Feed/FeedRoute';

server.use('/users', UserRoute);
server.use('/recommendations', RecommendationRoute);
server.use('/feed', FeedRoute);


export { server };
