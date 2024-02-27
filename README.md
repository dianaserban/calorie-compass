<h3>This is a basic calculator that uses age, gender, height, weight and activity level to calculate the BMR using a well known formula. BMR calculator calculates your basal metabolic rate which is the number of calories required to keep your body functioning at rest, also known as your metabolism. Using this value, a dish will be generated after the user input (for example: tomato, chicken, pork). The favorite dishes will be saved using localStorage and be retrieved even after refreshing the page.</h3>
<h3>Technologies used: jQuery, HTML, CSS</h3>                                                                                                                                                                                                                             
<strong>1. Calorie Calculator (JavaScript):</strong><br>
Step 1: Create functions to capture user information (age, gender, height, weight, activity level).<br>
Step 2: Implement the BMR (Basal Metabolic Rate) formula based on user information.<br>
Step 3: Calculate daily calorie needs based on BMR and activity level (e.g., multiply BMR by an activity factor).<br>
Step 4: Display calculated calorie needs to the user in a clear and user-friendly format.<br>
<br>
<strong>2. Recipe Suggestion (JavaScript + API):</strong><br>

Step 1: Choose a suitable recipe API and learn its documentation. (e.g., Spoonacular)<br>
Step 2: Create a function to call the API with user preferences (e.g., dietary restrictions, ingredients, keywords).<br>
Step 3: Parse the API response and filter recipes based on user preferences and calorie content.<br>
Step 4: Display a selection of suggested recipes with relevant information (e.g., name, image, calories).<br>
<br>
<strong>3. Meal Plan Generation (JavaScript + logic):</strong><br>

Step 1: Define basic meal categories (e.g., breakfast, lunch, dinner, snacks).<br>
Step 2: Create a function to distribute daily calories across meal categories based on user preferences and goals.<br>
Step 3: Choose recipes from suggested list (step 2.4) for each meal category based on calorie distribution.<br>
Step 4: Create a visually appealing presentation of the meal plan with recipe details and timing suggestions.<br><br>

<hr>
<br>
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
