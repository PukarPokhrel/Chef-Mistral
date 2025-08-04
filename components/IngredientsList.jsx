export default function IngredientsList(props) {
  const ingredientsListItem = props.ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section>
      <h2>Ingredients in hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        { ingredientsListItem }
      </ul>

      {props.ingredients.length > 3 ? (
        <div
          ref={props.ref}
          className="get-recipe-container"
        >
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  )
}
