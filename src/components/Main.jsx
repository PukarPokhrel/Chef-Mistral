import React, { useState, useEffect, useRef } from "react";
import IngredientsList from "./IngredientsList";
import MistralRecipe from "./MistralRecipe";
import { getRecipeFromMistral } from "../data/ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  // // Workaround for browsers with iFrame
  // useEffect(() => {
  //   if (recipe && recipeSection.current) {
  //     const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY;
  //     window.scroll({
  //       top: yCoord,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [recipe]);

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. Oregano (Add atleast 4 ingredients)"
          aria-label="Add Ingredient"
          required
        />
        <button>Add Ingredient</button>
      </form>

      {ingredients.length > 0 ? (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      ) : null}

      {recipe ? <MistralRecipe recipe={recipe} /> : null}
    </main>
  );
}
