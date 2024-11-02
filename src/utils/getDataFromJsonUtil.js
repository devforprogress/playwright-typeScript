"use strict";
//This ffunction help to get the data from json by passing app name as argument
Object.defineProperty(exports, "__esModule", { value: true });
// Function to find an app entry by name
var path = require("path");
var fs = require("fs");
// Construct the path to the JSON file
function findEntryByAppName(searchString) {
    var jsonFilePath = path.join(__dirname, '..', '/data/data.json');
    console.log(jsonFilePath + "__________________");
    var jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    var data = JSON.parse(jsonData);
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var entry = data_1[_i];
        if (entry.app.includes(searchString)) {
            console.log("Found an entry with 'app': ".concat(entry.app));
            return entry;
        }
    }
    console.log("No entry found with 'app' containing \"".concat(searchString, "\"."));
    return undefined;
}
var result = findEntryByAppName("odo");
if (result) {
    console.log(result.firstname);
}
