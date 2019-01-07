const seleniumServer = require("selenium-server");
const chromedriver  = require("chromedriver");
const SCREENSHOT_PATH="./screenshots/";

 module.exports= {
 	"src_folders":["test/e2e"],
 	"output_folder":"./reports",
 	"selenium":{
 		"start_process":true,
 		"server_path":seleniumServer.path,
 		"host":"127.0.0.1",
 		"port":4444,
 		"cli_args":{
 			"webdriver.chrome.driver": chromedriver.path
 		}

 	},


 	"test_settings": {
 		"default":{
 			"screenshots":{
 				"enabled":true,
 				"path":SCREENSHOT_PATH
 			},

 		"globals":{
 			"waiteForConditionTimeout":15000
 		},
 		"desiredCapabilities":{
 			"browserName":"chrome"
 		}	
 		},
 		"chrome":{
 			"desiredCapabilities":{
 				"browserName":"chrome",
 				"javascriptEnabled":true
 			}
 		}
 	}

 	 }
 	 function padLeft (count) { 
  return count < 10 ? '0' + count : count.toString();
 }

 var FILECOUNT = 0;
 function imgpath (browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name);
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
