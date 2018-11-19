const csvToJson = require("csvtojson");
const csvFilePath = "customer-data.csv";
const fs = require("fs");

csvToJson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        var json = JSON.stringify(jsonObj, null, 4);
        fs.writeFileSync("message.json", json, 'utf8', (error) => {
            if (error) return console.error(error)
            console.log("Writing to file is done!");
        });
});


