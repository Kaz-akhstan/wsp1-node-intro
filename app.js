const express = require('express');
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/index');
const createError = require('http-errors');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('data'));
app.use('/', indexRouter);
app.use(function (req, res, next) {
    next(createError(404));
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error.njk');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
