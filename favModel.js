const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const FavoriteSchema = mongoose.Schema({
	color: {
		type: String,
		required: true
	},
	animal: {
		type: String,
		required: true
	},
	food: {
		type: String,
		required: true
	},
	facialFeat: {
		type: String,
		required: true
	},
	song: {
		type: String,
		required: true
	},
	movie: {
		type: String,
		required: true
	}
})

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = {Favorite};