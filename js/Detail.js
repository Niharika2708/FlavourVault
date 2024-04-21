document.addEventListener('DOMContentLoaded', function() {

    const params = new URLSearchParams(window.location.search);
    const index = params.get('index'); 

    const recipes = JSON.parse(localStorage.getItem('recipes'));
    if (!recipes || index === null || recipes[index] === undefined) {
        document.body.innerHTML = '<p>Recipe not found. Please check the URL or the recipe index.</p>';
        return;
    }

    const recipe = recipes[index];

    document.getElementById('recipeTitle').textContent = recipe.name || 'No title available';
    document.getElementById('recipeImage').src = recipe.image || './path/to/default-image.jpg'; 
    document.getElementById('recipeIngredients').textContent = recipe.ingredients || 'No ingredients listed.';
    document.getElementById('recipeInstructions').textContent = recipe.instructions || 'No instructions provided.';
});