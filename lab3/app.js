const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = require('fs');

async function main() {
    for(let i = 1; i < 4; i++)
    {
        const exist = fs.existsSync(`./chapter${i}.result.json`);
        if(exist)
        {
            try
            {
                console.log(`chapter${i}.result.json is already existed!`);
                console.log(`Reading chapter${i}.result.json`);
                let Json = await fileData.getFileAsJSON(`./chapter${i}.result.json`);
                console.log(Json);
            }catch(error)
            {
                console.log(error);
                console.log("Something wrong happened!")
            }
        }
        else
        {
            try{
                console.log(`Reading chapter${i}.txt`);
                let files = await fileData.getFileAsString(`./chapter${i}.txt`);
                let result = textMetrics.createMetrics(files);
                console.log(`Writing chapter${i}.result.json`);
                await fileData.saveJSONToFile(`./chapter${i}.result.json`, result);
                console.log("Done!!!")
            }catch(error){
                console.log(error);
            }
        }
    }
}
main()