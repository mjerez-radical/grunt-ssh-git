/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Git = require("git-wrapper");
var git = new Git();
var fs = require('fs');

git.exec("log", function (err, output) {
	if (err) {
		console.error(output);
	}
	{
		fs.writeFile("./log_git-wrapper", output, function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("log file saved");
			}
		});
	}
	
});


