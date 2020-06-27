const express = require('express');
const cors = require('cors');

const app = express();
// routes
const indexRoute = require('./routes/home');
const searchRoute = require('./routes/search');
const singleMovieRoute = require('./routes/movie');
const singleTvShowRoute = require('./routes/tv');
const moviesRoute = require('./routes/movies');
const tvShowsRoute = require('./routes/tv-shows');
const suggestionsRoute = require('./routes/suggestions');

let https_redirect = function(req, res, next) {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] != 'https') {
            return res.redirect('https://' + req.headers.host + req.url);
        } else {
            return next();
        }
    } else {
        return next();
    }
};

app.use(cors());
app.use(https_redirect);


app.use('/search', searchRoute);
app.use('/movie', singleMovieRoute);
app.use('/movies', moviesRoute);
app.use('/tv', singleTvShowRoute);
app.use('/tv-shows', tvShowsRoute);
app.use('/suggestions', suggestionsRoute);

app.use('/', indexRoute);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});