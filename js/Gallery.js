
document.addEventListener('DOMContentLoaded', function() {

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const galleryContainer = document.getElementById('galleryContainer');

    recipes.forEach(recipe => {

        if (recipe.image) {

            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = "Recipe Image";
            img.className = "gallery-image";  
            galleryContainer.appendChild(img);

        }
    });
});