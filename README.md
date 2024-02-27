<ol>
<li><strong>Capture User Information</strong>: The <code>captureUserInfo</code> retrieves user information from the form fields.</li>
<li><strong>Calculate BMR</strong>: The <code>calculateBMR</code> function calculates the Basal Metabolic Rate based on user information.</li>
<li><strong>Calculate Daily Calorie Needs</strong>: The <code>calculateCalorieNeeds</code> function calculates daily calorie needs based on BMR and activity level.</li>
<li><strong>Display Calorie Needs</strong>: The <code>displayCalorieNeeds function</code> displays the calculated daily calorie needs to the user. It's set to show the result and hide the calculate button</li>
<li><strong>Fetch Recipe Information</strong>: The <code>getRecipeInformation</code> function fetches recipe information from the Spoonacular API.</li>
<li><strong>Search for Recipes</strong>: The <code>searchRecipes</code> function searches for recipes based on user preferences. It fetches recipes from the API based on selected ingredients and calorie count.</li>
<li><strong>Display Recipes</strong>: The <code>displayRecipes</code> function displays the fetched recipes on the webpage.</li>
<li><strong>Display Saved Recipes</strong>: The <code>displaySavedRecipes</code> function displays saved recipes retrieved from local storage. It iterates through saved recipe IDs and fetches recipe information to display.</li>
<li><strong>Calculate Button Click Event</strong>: When the "Calculate" button is clicked, it calculates BMR, daily calorie needs, and displays them.</li>
<li><strong>Show Meals Button Click Event</strong>: When the "Show me the meal options" button is clicked, it fetches recipes based on the selected ingredient and displayed calorie count. It then displays the fetched recipes.</li>
<li><strong>Save Recipe Click Event</strong>: When a recipe's "Save Recipe" button is clicked, it adds the recipe ID to the savedRecipes array, updates local storage, and displays saved recipes.</li>
<li><strong>Clear Saved Recipes Click Event</strong>: When the "Clear Saved Recipes" button is clicked, it clears saved recipes from local storage, updates UI, and hides the saved recipes section.</li>
<li><strong>Delete Saved Recipe Click Event</strong>: When a saved recipe's "Delete Recipe" button is clicked, it removes the recipe ID from the savedRecipes array, updates local storage, and removes the recipe from the UI.</li>
<li><strong>Display Saved Recipes on Page Load</strong>: Finally, it displays saved recipes when the page loads.</li>
</ol>