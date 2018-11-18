const csvToJson = require("csvtojson");
const csvFilePath = "customer-data.csv";

csvToJson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);

        //should save to file using fs
        //error handling should be implemented
});


