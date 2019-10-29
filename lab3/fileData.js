const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));



const getFileAsString = async function getFileAsString(path)
{
    if(!path)
    {
        throw "you have to provide a path";
    }
    const result= await fs.readFileSync(path, "utf-8");
    return result;
}


const getFileAsJSON = async function getFileAsJSON(path)
{
    if (!path)
    {
        throw "you have to provide a path";
    }
    try
    {
        const result = await this.getFileAsString(path);
        return JSON.parse(result);
    }
    catch(error)
    {
        console.log(error);
    }
}


const saveStringToFile = async function saveStringToFile(path, text)
{
    if (!path)
    {
        throw "you have to provide a path";
    }
    else if(typeof text !== 'string')
    {
        throw "The input must be string";
    }
       await fs.writeFile(path, text, "utf-8", (error)=>
    {
        if(error)
        {
            console.log(error);
        }
    })
    return true;
}


const saveJSONToFile = async function saveJSONToFile(path, obj)
{
    if (!path)
    {
        throw "you have to provide a path";
    }
    else if(typeof obj !== 'object')
    {
        throw "The input must be object";
    }
    await fs.writeFile(path, JSON.stringify(obj),(error) =>
    {
        if(error)
        {
            console.log(error);
        }
    })
    return true;
}


module.exports = {
    firstName: "Yining", 
    lastName: "Wen", 
    studentId: "10438406",
    getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
}