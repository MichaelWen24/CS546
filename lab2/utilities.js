function isArray(object)
{
    if(object.constructor == Array)
    {
        return true;
    }
    else
    {
        return false;
    }
}


module.exports = {
    description: "utilities part of lab2",

deepEquality:(a, b)=>
{
    if(a == null || b==null)
    {
        throw "you should provide object";
    }

    if(typeof a !== "object")
    {
        throw "the first one is not an object";
    }

    if(typeof b !== "object")
    {
        throw "the second one is not an object";
    }

    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length)
    {
        return false;
    }

    for (let i = 0; i < aProps.length; i++)
    {
        let objName = aProps[i];

        if (a[objName] !== b[objName])
        {
            return false;
        }
    }
    return true;
},


uniqueElements:(arr)=>{
    if(!Array.isArray(arr))
    {
        throw "this is not array";
    }
    if(arr === undefined)
    {
        throw "the array is undefined";
    }
    var arr1=[];
    for(i = 0; i <arr.length; i++)
    {
        for( j = 0; j <arr1.length ; j++)
        {
            if(arr1[j] == arr[i])
            {
                break;
            }
        }
        if(j == arr1.length)
        {
            arr1[arr1.length] =arr[i];
        }
    }
    return arr1.length;

},


countOfEachCharacterInString:(str) =>
{    if (str === undefined) 
    {
		throw "Str is not defined";
	}

     if(str.length == 0)
    {
        throw "the string is empty";
    }
   
    let charMap= {};
    for ( let i = 0; i<str.length; i++)
    {
    let key = str[i];
    if(charMap[key])
    {
        charMap[key]++;
    }
    else
    {
        charMap[key] = 1;
    }
    }
    return charMap;
},
}
