const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let arrnum=0;
    for(let i=0;i<arr.length;i++)
    {
        arrnum+=arr[i]*arr[i];
    }
    return arrnum;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num<1)
    {
        return 0;
    }
    else if(num<=2)
        {
        return 1;
        }
        else
        {
            let a=1,b=1;
            for(let i=2;i<num-1;i++)
            {
                b=a+b;
                a=b-a;
            }
            return a+b;
        }
    
}

const questionThree = function questionThree(text) 
{
    // Implement question 3 here
    let letter=0;
    for (let i=0;i<text.length;i++)
    {
        
        if(text.charAt(i)=='A'||text.charAt(i)=='a'||text.charAt(i)=='e'||text.charAt(i)=='E'||text.charAt(i)=='I'||text.charAt(i)=='i'||text.charAt(i)=='O'||text.charAt(i)=='o'||text.charAt(i)=='U'||text.charAt(i)=='u')
        {
            letter++;
        }
    }
    return letter;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num<0)
    {
        return NaN;
    }
    else if(num==0||num==1)
    {
        return 1;
    }
    else 
    {
        for(let i=num-1;i>1;i--)
        {
            num*=i;
        }
        return num;
    }
}

module.exports = {
    firstName: "Yining", 
    lastName: "Wen", 
    studentId: "10438406",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
}