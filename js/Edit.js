function searchRecipes() {

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const container = document.getElementById('recipeContainer');

    container.innerHTML = ''; 

    if (searchTerm.trim()== ''){
        return;
    }

    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

    filteredRecipes.forEach(recipe => {

        const card = document.createElement('div');
        card.innerHTML = `<h3>${recipe.name}</h3><img src="${recipe.image}" alt="${recipe.name}" style="width:200px;">`;
        card.className = 'recipe-card';
        card.onclick = function() { viewRecipe(recipe); };
        container.appendChild(card);
    });
}
function viewRecipe(recipe) {
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    const index = recipes.findIndex(r => r.name === recipe.name && r.instructions === recipe.instructions); 
    window.location.href = `add.html?index=${index}`; 
}
