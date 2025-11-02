function Recipe(props) {
	return (
		<div className="recipe">
			<h2>{props.recipe.name}</h2>
			<h3>Ingredients</h3>
			<p>{props.recipe.ingredients}</p>
			<h3>Instructions</h3>
			<p>{props.recipe.instructions}</p>
		</div>
	);
}

export default Recipe;
