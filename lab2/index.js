const geometry = require ("./geometry.js");
const utilities = require ("./utilities.js");

console.log("geometry.volumeOfRectangularPrism:");
 try //1
 {
     console.log(geometry.volumeOfRectangularPrism(3, 2, 1));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //2
 {
     console.log(geometry.volumeOfRectangularPrism(1, 2, 1));
 }
 catch(err)
 {
     console.log(err);
 }

 try //3
 {
     console.log(geometry.volumeOfRectangularPrism(1, 2, "a"));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //4
 {
     console.log(geometry.volumeOfRectangularPrism(3, " ", 2));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //5
 {
     console.log(geometry.volumeOfRectangularPrism());
 }
 catch(err)
 {
     console.log(err);
 }
 
 


 console.log("\ngeometry.surfaceAreaOfRectangularPrism:");
 try //1
 {
     console.log(geometry.surfaceAreaOfRectangularPrism(3, 2, 1));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //2
 {
     console.log(geometry.surfaceAreaOfRectangularPrism(1, 2, 1));
 }
 catch(err)
 {
     console.log(err);
 }

 try //3
 {
     console.log(geometry.surfaceAreaOfRectangularPrism(1, 2, "a"));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //4
 {
     console.log(geometry.surfaceAreaOfRectangularPrism(3, " ", 2));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //5
 {
     console.log(geometry.surfaceAreaOfRectangularPrism());
 }
 catch(err)
 {
     console.log(err);
 }
 

 console.log("\ngeometry.volumeOfSphere:");
 try //1
 {
     console.log(geometry.volumeOfSphere(3));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //2
 {
     console.log(geometry.volumeOfSphere(1));
 }
 catch(err)
 {
     console.log(err);
 }

 try //3
 {
     console.log(geometry.volumeOfSphere("a"));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //4
 {
     console.log(geometry.volumeOfSphere(-2));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //5
 {
     console.log(geometry.volumeOfSphere());
 }
 catch(err)
 {
     console.log(err);
 }


 console.log("\ngeometry.surfaceAreaOfSphere:");
 try //1
 {
     console.log(geometry.surfaceAreaOfSphere(3));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //2
 {
     console.log(geometry.surfaceAreaOfSphere(1));
 }
 catch(err)
 {
     console.log(err);
 }

 try //3
 {
     console.log(geometry.surfaceAreaOfSphere("a"));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //4
 {
     console.log(geometry.surfaceAreaOfSphere(-2));
 }
 catch(err)
 {
     console.log(err);
 }
 
 try //5
 {
     console.log(geometry.surfaceAreaOfSphere());
 }
 catch(err)
 {
     console.log(err);
 }



 console.log("\nutilities.deepEquality:")
const first = {b: 3, a: 2};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};

try //1
{
    console.log(utilities.deepEquality(first, second));
}
catch(err)
{
    console.log(err);
}

try //2
{
    console.log(utilities.deepEquality(first, third));
}
catch(err)
{
    console.log(err);
}

try //3
{
    console.log(utilities.deepEquality(third, second));
}
catch(err)
{
    console.log(err);
}

try //4
{
    console.log(utilities.deepEquality(first,"a"));
}
catch(err)
{
    console.log(err);
}

try //5
{
    console.log(utilities.deepEquality({"a":{"c":2,"b":1},"z":"test"},{"z":"test","a":{"b":1,"c":2}}));
}
catch(err)
{
    console.log(err);
}


console.log("\nutilities.uniqueElements:")
const testArr1 = ["a", "a", "b", "a", "b", "c"];
const testArr2 = ["1", "a", "2", "2", "3", "c"];

try //1
{
    console.log(utilities.uniqueElements(testArr1)); 
}
catch(err)
{
    console.log(err);
}

try //2
{
    console.log(utilities.uniqueElements(testArr2));
}
catch(err)
{
    console.log(err);
}

try //3
{
    console.log(utilities.uniqueElements("1"));
}
catch(err)
{
    console.log(err);
}

try //4
{
    console.log(utilities.deepEquality("a"));
}
catch(err)
{
    console.log(err);
}

try //5
{
    console.log(utilities.deepEquality());
}
catch(err)
{
    console.log(err);
}


console.log("\nutilities.countOfEachCharacterInString:")
const test = "Hello, the pie is in the oven";
const test1 = "1111312324143245234";

try //1
{
    console.log(utilities.countOfEachCharacterInString(test)); 
}
catch(err)
{
    console.log(err);
}

try //2
{
    console.log(utilities.countOfEachCharacterInString(test1)); 
}
catch(err)
{
    console.log(err);
}

try //3
{
    console.log(utilities.countOfEachCharacterInString("1"));
}
catch(err)
{
    console.log(err);
}

try //4
{
    console.log(utilities.countOfEachCharacterInString("a"));
}
catch(err)
{
    console.log(err);
}

try //5
{
    console.log(utilities.countOfEachCharacterInString(12341234));
}
catch(err)
{
    console.log(err);
}