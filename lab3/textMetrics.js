const createMetrics = function createMetrics(text) 
{
    if(!text)
    {
        throw "you must provide a string";
    }
    else if(typeof text !== "string")
    {
        throw "you must provide a string";
    }

    let numofletters = 0;
    let numofnonletter = 0;
    let numofwords = 0;
    let numofvowels = 0;
    let numofconsonant = 0;
    let numofuniquewords = 0;
    let numoflongwords = 0;
    let avgwordlength = 0;
    let charMap = {};
    let eachstr = "";
    let wordList = [];

    for(let i = 0; i < text.length; i++)
    {
        let letter = text[i];
        let AscCode = letter.charCodeAt();
        if((AscCode>= 65 && AscCode<= 90) || (AscCode>= 97 && AscCode<= 122))
        {
            numofletters += 1;
            eachstr = eachstr + letter;

            if ("aeiouAEIOU".indexOf(letter) != -1)
            {
                numofvowels += 1;
            }
            else
            {
                numofconsonant += 1;
            }
        }
        else
        {
            numofnonletter += 1;

            if (eachstr != "")
            {
                wordList.push(eachstr.toLowerCase());
                eachstr = "";
            }
        }
    };
    if (eachstr != "") wordList.push(eachstr);

    for(let i = 0; i < wordList.length; i++)
        {
            if(!charMap.hasOwnProperty(wordList[i]))
            {
                charMap[wordList[i]] = 1;
            }
            else
            {
                charMap[wordList[i]] += 1;
            }
        }

    let totalLength = 0;
    for(let object in charMap) 
    {
        numofuniquewords += 1;

        if(object.length >= 6)
        {
            numoflongwords += charMap[object];
        }
        totalLength = totalLength +  object.length * charMap[object];
        numofwords += charMap[object];
    }
    avgwordlength = totalLength / numofwords;

    let final = { };

        final["totalLetters"] = numofletters;
        final["totalNonLetters"] = numofnonletter;
        final["totalWords"] = numofwords;
        final["totalVowels"] = numofvowels;
        final["totalConsonants"] = numofconsonant;
        final["uniqueWords"] = numofuniquewords;
	    final["longWords"] = numoflongwords;
	    final["averageWordLength"] = avgwordlength;
        final["wordOccurrences"] = charMap;
        
        return final;

}
//console.log(createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"))

module.exports = {
    firstName: "Yining", 
    lastName: "Wen", 
    studentId: "10438406",
    createMetrics,
}