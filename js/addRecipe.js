document.addEventListener('DOMContentLoaded', function() {

    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');

    if (index !== null) {

        const recipes = JSON.parse(localStorage.getItem('recipes'));
        const recipe = recipes[index];

        document.getElementById('recipe-name').value = recipe.name;
        document.getElementById('ingredients').value = recipe.ingredients;
        document.getElementById('instructions').value = recipe.instructions;

        const imgContainer = document.getElementById('imagePreviewContainer');
        imgContainer.innerHTML = ''; 

        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = 'Uploaded Image';
        img.className = 'centered-image';
        imgContainer.appendChild(img);
    }
});

function saveRecipe() {

    const index = new URLSearchParams(window.location.search).get('index');
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    const recipeData = {

        name: document.getElementById('recipe-name').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
        image: document.getElementById('photo').files[0] ? document.getElementById('photo').files[0] : recipes[index]?.image
    };

    if (document.getElementById('photo').files[0]) {

        let reader = new FileReader();
        reader.onload = function(e) {

        recipeData.image = e.target.result;

            if (index !== null) {
                recipes[index] = recipeData;
            } else {
                recipes.push(recipeData);
            }
            localStorage.setItem('recipes', JSON.stringify(recipes));
            alert('Recipe updated successfully!');
        };

        reader.readAsDataURL(document.getElementById('photo').files[0]);

    } else if (index !== null) {

        recipes[index] = recipeData;
        localStorage.setItem('recipes', JSON.stringify(recipes));
        alert('Recipe updated successfully!');

    } else {
        
        alert('Please upload an image.');
    }
}

