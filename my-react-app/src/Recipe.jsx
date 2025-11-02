function Recipe(props) {
	return (
		<div className="recipe">
			<h2>{props.recipe.name}</h2>
			<h3>Ingredients</h3>
			<ul>
				{props.recipe.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>
			<h3>Instructions</h3>
			<ul>
				{props.recipe.instructions.map((step, index) => (
					<li key={index}>{step}</li>
				))}
			</ul>
		</div>
	);
}

export default Recipe;
