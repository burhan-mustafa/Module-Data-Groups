// Predict and explain first...

// The console log will display the title and how many people the recipe serves but it will not display the
// ingredients correctly because we have not accessed the `ingredients` property. Instead, `${recipe}` refers
// to the entire object.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:
${recipe.ingredients.join("\n")}`);
