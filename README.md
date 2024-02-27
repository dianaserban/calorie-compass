SUMMARY: 
<strong>Capture User Information</strong>: The captureUserInfo retrieves user information from the form fields.
Calculate BMR: The calculateBMR function calculates the Basal Metabolic Rate based on user information.
Calculate Daily Calorie Needs: The calculateCalorieNeeds function calculates daily calorie needs based on BMR and activity level.
Display Calorie Needs: The displayCalorieNeeds function displays the calculated daily calorie needs to the user. It’s set to show the result and hide the calculate button
Fetch Recipe Information: The getRecipeInformation function fetches recipe information from the Spoonacular API.
Search for Recipes: The searchRecipes function searches for recipes based on user preferences. It fetches recipes from the API based on selected ingredients and calorie count.
Display Recipes: The displayRecipes function displays the fetched recipes on the webpage.
Display Saved Recipes: The displaySavedRecipes function displays saved recipes retrieved from local storage. It iterates through saved recipe IDs and fetches recipe information to display.
Calculate Button Click Event: When the “Calculate” button is clicked, it calculates BMR, daily calorie needs, and displays them.
Show Meals Button Click Event: When the “Show me the meal options” button is clicked, it fetches recipes based on the selected ingredient and displayed calorie count. It then displays the fetched recipes.
Save Recipe Click Event: When a recipe’s “Save Recipe” button is clicked, it adds the recipe ID to the savedRecipes array, updates local storage, and displays saved recipes.
Clear Saved Recipes Click Event: When the “Clear Saved Recipes” button is clicked, it clears saved recipes from local storage, updates UI, and hides the saved recipes section.
Delete Saved Recipe Click Event: When a saved recipe’s “Delete Recipe” button is clicked, it removes the recipe ID from the savedRecipes array, updates local storage, and removes the recipe from the UI.
Display Saved Recipes on Page Load: Finally, it displays saved recipes when the page loads.
