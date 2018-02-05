var scrape = require('website-scraper');
var options = {
  urls: ['http://farleyinc.net/'],
  directory: '/site/',
};

// or with callback
scrape(options, (error, result) => {
	console.log(error)
});
