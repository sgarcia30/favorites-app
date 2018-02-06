const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
// What is this?
const jsonParser = bodyParser.json();
router.use(jsonParser);

const {Favorite} = require('./favModel');

router.post('/', (req, res) => {
	Favorite.create({
		color: req.body.color,
		animal: req.body.animal,
		food: req.body.food,
		facialFeat: req.body.facialFeat,
		song: req.body.song,
		movie: req.body.movie
	})
	.then(result => {
		res.json(result);
	})
})

module.exports = {router};