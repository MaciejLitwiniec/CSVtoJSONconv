/* 
csvtojson module will convert coma separated files to JSON
fs module will be used to write files 
*/
const csvToJson = require("csvtojson");
const fs = require("fs");

//saving filepath to local .csv file into variable
const csvFilePath = "customer-data.csv";

//checking if file exist, try-catch didnt throw errors
fs.access(csvFilePath, fs.F_OK, (err) => {
    if (err) {
        console.error(err);
        return
    }
    //invoking csvToJson with sequence of methods
    csvToJson()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            console.log(jsonObj);
            /* JSON Object is parsed into String with 2 more arguments: 
            null (means no replacement) and 4 spaces as indentation
            It helped to style .json file from unformatted to typical JSON style */
            var json = JSON.stringify(jsonObj, null, 4);
            /* parsed json is written to message.json file. In case of error message will be displayed
            tested with existing and deleted */
            fs.writeFileSync("message.json", json, 'utf8', (error) => {
                if (error) return console.error(error)
                console.log("Writing to file is done!");
            });
    });

});




