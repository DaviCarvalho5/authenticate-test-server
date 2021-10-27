const express = require('express');
const router = express.Router();

const MainController = require('./controllers/MainController.js');

router.get('/', (req, res, next) => { req.page = 'index'; return next(); }, MainController.renderPage);

router.get('/:page', MainController.renderPage);

router.get('/js/:file', MainController.getJsFile);
router.get('/css/:file', MainController.getCssFile);

module.exports = router;