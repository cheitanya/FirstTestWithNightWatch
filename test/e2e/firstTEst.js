var config = require('../../nightwatch.conf.js');

module.exports ={
	'firstTest':function(browser) {
		browser
		.url('https://google.com/')
                .maximizeWindow()
		.waitForElementVisible('body', 10000 )
                .pause(10000)
                .setValue('input[type=text]', 'facebook ads')
		.pause(10000)
                .click('#tsf > div:nth-child(2) > div > div.UUbT9 > div.aajZCb > div > center > input[type="submit"]:nth-child(1)') 
                .pause(10000)
                .end();

	}
};
