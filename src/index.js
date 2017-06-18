require('babel-register')({
	ignore: /node_modules\/(?!tamia)/,
	cache: false,
});

require('./main');
