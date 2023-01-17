const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hallå Värld!',
        title: 'Nunjucks hello world',
        subtitle: 'Undertitel',
    });
});

router.get('/item', async function (req, res, next) {
    res.render('index.njk', {
        message: 'New Item!',
        title: 'Nunjucks hello world',
        subtitle: 'Get Item!',
    });
});

module.exports = router;