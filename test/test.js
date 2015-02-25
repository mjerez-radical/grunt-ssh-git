/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Git = require("../tasks/git.js");
var git = new Git();

git.exec("log" , function(err,output){
	if(err){
		console.error(output);
	}
	console.log(output);
});
