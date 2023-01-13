const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello World!',
        title: 'Nunjucks hello world',
    });
});

module.exports = router;