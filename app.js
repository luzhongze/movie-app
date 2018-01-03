import express from 'express';
import graphqlHTTP from 'express-graphql';
import movieSchema from './components/movies-schema';
import axios from './config';
import httpProxy from 'express-http-proxy';
import https from 'https';
import http from 'http';

const app = express();

app.use('/static', httpProxy('image.tmdb.org', {
    https: true,
    filter: (req, res) => /\.jpg|.png/.test(req.url),
    proxyReqPathResolver: function (req) {
        return require('url').parse('/t/p/original' + req.url).path;
    }
}));
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true
}));

http.createServer(app).listen(80, () => {
    console.log('HTTP Server listen on 80......')
});
https.createServer({}, app).listen(443, () => {
    console.log('HTTPS Server listen on 443......')
});