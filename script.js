$(document).ready(function(){
    const apiKey = "670e2a23fd62439e80cac8951da13682"; // Replace with your actual Spoonacular API key
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || []; // Retrieve saved recipes from localStorage
    console.log('Saved Recipes:', savedRecipes); // Debugging statement

    // Function to capture user information
    function captureUserInfo() {
        var userInfo = {
            age: parseInt($("#age").val()),
            gender: $("#gender").val(),
            height: parseInt($("#height").val()),
            weight: parseInt($("#weight").val()),
            activity: parseFloat($("#activity").val())
        };
        return userInfo;
    }

    // Function to calculate BMR based on user information
    function calculateBMR(userInfo) {
        var bmr;
        if (userInfo.gender === "male") {
            bmr = 10 * userInfo.weight + 6.25 * userInfo.height - 5 * userInfo.age + 5;
        } else {
            bmr = 10 * userInfo.weight + 6.25 * userInfo.height - 5 * userInfo.age - 161;
        }
        return bmr;
    }

    // Function to calculate daily calorie needs based on BMR and activity level
    function calculateCalorieNeeds(bmr, activity) {
        return bmr * activity;
    }

    // Function to display calculated calorie needs to the user
    function displayCalorieNeeds(calorieNeeds) {
        $("#result").html("<h3>Your Daily Calorie Needs:</h3><p>" + calorieNeeds.toFixed(2) + " calories</p>");
        $("#result").show(); // Show the calorie needs section
        $("#calculate").hide(); // Hide the calculate button
        $("#ingredientSection").show(); // Show the ingredient selection section
    }

    // Function to fetch recipe information from Spoonacular API
    async function getRecipeInformation(recipeId) {
        const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        }
    }

    // Function to search for recipes based on user preferences
    async function searchRecipes(selectedIngredient, calorieCount) {
        const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients";
        const queryParams = {
            apiKey: apiKey,
            ingredients: selectedIngredient,
            number: 2, // Adjust as needed
            calories: Math.round(calorieCount),
            limitLicense: true
        };
        const apiUrl = new URL(baseUrl);
        Object.keys(queryParams).forEach(key => apiUrl.searchParams.append(key, queryParams[key]));

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Recipes:", data); // Log the recipes received from the API
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        }
    }

    // Function to display recipes in HTML
    async function displayRecipes(recipes) {
        console.log("Recipes:", recipes); // Log the recipes received from the API

        const recipesContainer = $("#recipes");
        recipesContainer.empty(); // Clear previous recipes

        for (const recipe of recipes) {
            const recipeInfo = await getRecipeInformation(recipe.id);
            if (recipeInfo) {
                const recipeHtml = `
                    <div class="recipe">
                        <h3>${recipeInfo.title}</h3>
                        <img src="${recipeInfo.image}" alt="${recipeInfo.title}" style="width: 100%;">
                        <p><strong>Servings:</strong> ${recipeInfo.servings}</p>
                        <p><strong>Ready in Minutes:</strong> ${recipeInfo.readyInMinutes}</p>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            ${recipeInfo.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
                        </ul>
                        <button class="save-recipe" data-recipe-id="${recipeInfo.id}">Save Recipe</button>
                        <p><strong>Instructions:</strong> ${recipeInfo.instructions}</p>
                    </div>
                `;
                recipesContainer.append(recipeHtml);
            }
        }
        $(".save-recipe").show(); // Show the Save Recipe button

        // Show the recipe section
        $("#recipeSection").show();
    }

    // Function to display saved recipes
    async function displaySavedRecipes() {
        const savedRecipesContainer = $("#savedRecipes");
        savedRecipesContainer.empty(); // Clear previous saved recipes

        if (savedRecipes.length > 0) {
            for (const recipeId of savedRecipes) { // Loop through saved recipes
                const recipeInfo = await getRecipeInformation(recipeId);
                if (recipeInfo) {
                    const savedRecipeHtml = `
                        <div class="saved-recipe">
                            <h3>${recipeInfo.title}</h3>
                            <img src="${recipeInfo.image}" alt="${recipeInfo.title}" style="width: 100%;">
                            <p><strong>Servings:</strong> ${recipeInfo.servings}</p>
                            <p><strong>Ready in Minutes:</strong> ${recipeInfo.readyInMinutes}</p>
                            <p><strong>Ingredients:</strong></p>
                            <ul>
                                ${recipeInfo.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
                            </ul>
                            <p><strong>Instructions:</strong> ${recipeInfo.instructions}</p>
                            <button class="delete-recipe" data-recipe-id="${recipeInfo.id}">Delete Recipe</button>
                        </div>
                    `;
                    savedRecipesContainer.append(savedRecipeHtml);
                }
            }

            $("#clearSavedRecipesBtn").show(); // Show the button to clear saved recipes
        } else {
            $("#clearSavedRecipesBtn").hide(); // Hide the button to clear saved recipes if there are none
        }
    }

    // Click event handler for the "Calculate" button
    $("#calculate").click(function(){
        var userInfo = captureUserInfo();
        var bmr = calculateBMR(userInfo);
        var calorieNeeds = calculateCalorieNeeds(bmr, userInfo.activity);
        displayCalorieNeeds(calorieNeeds);
    });

    // Click event handler for the "Show me the meal options" button
    $("#showMealsBtn").click(async function() {
        var selectedIngredient = $("#ingredient").val();
        var calorieCount = parseFloat($("#result p").text().split(" ")[0]); // Extract calorie count from displayed text

        try {
            const recipes = await searchRecipes(selectedIngredient, calorieCount);
            if (recipes) {
                displayRecipes(recipes);
            } else {
                console.error('No recipes found.');
            }
        } catch (error) {
            console.error('There was a problem with retrieving recipes:', error);
        }
    });

    // Click event handler for saving a recipe
    $("#recipes").on("click", ".save-recipe", async function() {
        const recipeId = $(this).data("recipe-id");
        savedRecipes.push(recipeId);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes)); // Save updated recipes to localStorage
        console.log('Saved Recipes after saving:', savedRecipes); // Debugging statement
        displaySavedRecipes();
    });

    // Click event handler for clearing saved recipes
    $("#clearSavedRecipesBtn").click(function() {
        savedRecipes = []; // Clear saved recipes array
        localStorage.removeItem('savedRecipes'); // Clear saved recipes from local storage
        displaySavedRecipes(); // Update UI to reflect cleared saved recipes
        $("#savedRecipesSection").hide(); // Hide the saved recipes section
    });

    // Click event handler for deleting a saved recipe
    $("#savedRecipes").on("click", ".delete-recipe", function() {
        const recipeId = $(this).data("recipe-id");
        const recipeIndex = savedRecipes.indexOf(recipeId);
        if (recipeIndex !== -1) {
            savedRecipes.splice(recipeIndex, 1); // Remove recipe from savedRecipes array
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes)); // Update local storage
            $(this).parent().remove(); // Remove the recipe from HTML
        }
    });

    // Display saved recipes when the page loads
    displaySavedRecipes();
});
