function checkNumber(val, variableName)
{
    if (typeof val !== "number" || val <= 0)
    {
        throw `${variableName} is invalid`;
    }
}

module.exports = {
    description: "geometry part of lab2",

volumeOfRectangularPrism:(length, width, height)=>
{
    checkNumber(length, "length");
    checkNumber(width, "width");
    checkNumber(height, "height");

    return length * width * height;
},


surfaceAreaOfRectangularPrism:(length, width, height)=>
{
    checkNumber(length, "length");
    checkNumber(width, "width");
    checkNumber(height, "height");

    let firstarea = length * width * 2;
    let secondarea = length * height * 2;
    let thirdarea = height * width * 2;

    return firstarea + secondarea + thirdarea;
},


volumeOfSphere:(radius)=>
{
    checkNumber(radius, "radius");

    return 4 * radius * radius * radius * Math.PI / 3;
},


surfaceAreaOfSphere:(radius)=>
{
    checkNumber(radius, "radius");

    return 4 * radius * radius * Math.PI;
},
}