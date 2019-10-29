const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

//reference from lecture code

// const exportedMethods = {

// const RecipesCollection = await Recipes();

async function getAllRecipes() {
    const recipeCollection = await recipes();
    let AllRecipes = await recipeCollection.find({}).toArray();
    let result = AllRecipes.map(recipes => { return {id : recipes._id, title : recipes.title};})
    return result;
}


async function getRecipeById(id) {

    if(!id){
        throw "No ID provided!";
    }

    const recipeCollection = await recipes();
    const recipe = await recipeCollection.findOne({ _id: id });

    if (!recipe){ 
        throw "Recipe not found!";
    }
    return recipe;
}


async function addRecipe(title,ingredients,steps) {

    if (!title || typeof title !== "string"){
        throw "You must provide title as string!";
    }

    if (!ingredients || !Array.isArray(ingredients)){
        throw "You must provide valid ingredient!";
    }

    if (!steps || !Array.isArray(steps)){
        throw "You must provide valid steps!";
    }

    try{
        for(let i = 0; i < ingredients.length; i++)
        {
            if(!ingredients[i].name){
                throw "You must provide the ingredients name";
            }

            if(!ingredients[i].amount){
                throw "You must provide the ingredients amount";
            }
        }
    }
    catch(error){
        console.log(error);
    }

    const recipeCollection = await recipes();

    const newRecipe = {
        _id : uuid.v4(),
        title: title,
        ingredients: ingredients,
        steps: steps
    };
   
    const newInsertInformation = await recipeCollection.insertOne(newRecipe);
    const newId = newInsertInformation.insertedId;
    return await this.getRecipeById(newId);
    // await recipeCollection.insertOne(newRecipe);
    // return await getRecipeById(newRecipe._id);
}


async function replaceRecipe(id, newRecipe){
    if(!id){
        throw "The ID is invalid";
    }

    if (!newRecipe.title || typeof newRecipe.title !== "string"){
        throw "You must provide title as string!";
    }

    if (!newRecipe.ingredients || !Array.isArray(newRecipe.ingredients)){
        throw "You must provide valid ingredient!";
    }

    if (!newRecipe.steps || !Array.isArray(newRecipe.steps)){
        throw "You must provide valid steps!";
    }

    try{
        for(let i = 0; i < newRecipe.ingredients.length; i++){
            if(!newRecipe.ingredients[i].name){
                throw "You must provide the ingredients name";
            }

            if(!newRecipe.ingredients[i].amount){
                throw "You must provide the ingredients amount";
            }
        }
    }
    catch(error){
        console.log(error);
    }

    try{
        for(let i = 0; i < newRecipe.steps.length; i++)
        {
            if(typeof newRecipe.steps[i] !== "string"){
                throw "You must provide each steps as string!";
            }
        }
    }
    catch(error){
        console.log(error);
    }
    const recipeCollection = await recipes();
    await recipeCollection.updateOne({_id: id}, {$set: newRecipe});
    return await getRecipeById(id);
}


async function removeRecipe(id) {
    if(!id){
        throw "The ID is invalid";
    }

    const recipeCollection = await recipes();
    await recipeCollection.removeOne({ _id: id });
    // const deletionInfo = await RecipesCollection.removeOne({ _id: id });

    // if (deletionInfo.deletedCount === 0) {
    // throw `Could not delete post with id of ${id}`;
    // }
    return false;
}


async function updateRecipe(id, updatedRecipe) {
    // const RecipesCollection = await Recipes();
    const recipeCollection = await recipes();
    const updatedRecipeData = {};

    if(!id){
        throw "invalid ID";
    }

    if(updatedRecipe.title){
        if (!updatedRecipe.title || typeof updatedRecipe.title !== "string"){
            throw "You must provide title as string!";
        }
        updatedRecipeData.title = updatedRecipe.title;
    }

    if(updatedRecipe.ingredients){
        if (!updatedRecipe.ingredients || !Array.isArray(updatedRecipe.ingredients)){
            throw "You must provide valid ingredient!";
        }
        updatedRecipeData.ingredients = updatedRecipe.ingredients;
    }

    if(updatedRecipe.steps){
        if (!updatedRecipe.steps || !Array.isArray(updatedRecipe.steps)){
            throw "You must provide valid steps!";
        }
        updatedRecipeData.steps = updatedRecipe.steps;
    }

   
    await recipeCollection.updateOne({_id:id},{$set:updatedRecipeData});
    return await getRecipeById(id);
}

//   }

module.exports = {
    firstName: "Yining", 
    lastName: "Wen", 
    studentId: "10438406",
    getAllRecipes,
    getRecipeById,
    addRecipe,
    replaceRecipe,
    removeRecipe,
    updateRecipe
}