const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;
//reference from lecture

router.get("/", async (req, res) => {
  try {
    const recipeList = await recipeData.getAllRecipes();
    res.json(recipeList);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});//


router.get("/:id", async (req, res) => {
  try {
    const recipe = await recipeData.getRecipeById(req.params.id);
    res.json(recipe);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: "recipe not found" });
  }
});//

// router.get("/tag/:tag", async (req, res) => {
//   const postList = await postData.getPostsByTag(req.params.tag);
//   res.json(postList);
// });


router.post("/", async (req, res) => {
  const newRecipeData = req.body;
  try {
    const { title, ingredients, steps } = newRecipeData;
    const newRecipe = await recipeData.addRecipe(title, ingredients, steps);

    res.json(newRecipe);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});//

router.put("/:id", async (req, res) => {
  const replaceData = req.body;
  try {
    await recipeData.getRecipeById(req.params.id);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: "Recipe not found" });
  }//

  try {
    const replaceRecipe = await recipeData.replaceRecipe(req.params.id, replaceData);
    res.json(replaceRecipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});//

router.patch("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: "Recipe not found" });
    }//
  
    try {
      const updateRecipe = await recipeData.updateRecipe(req.params.id, updatedData);
      res.json(updateRecipe);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: e });
    }
  });//

router.delete("/:id", async (req, res) => {
  try {
    await recipeData.getRecipeById(req.params.id);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: "Recipe not found" });
  }//
  try {
    await recipeData.removeRecipe(req.params.id);
    const recipeList = await recipeData.getAllRecipes();
    res.json(recipeList);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

module.exports = router;