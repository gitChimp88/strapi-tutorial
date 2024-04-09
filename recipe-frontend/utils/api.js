const baseUrl = 'http://localhost:1337';

export async function fetchRecipes() {
  try {
    const res = await fetch(`${baseUrl}/api/recipes`);
    return await res.json();
  } catch (e) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchRecipeGPTData(ingredients) {
  try {
    const response = await fetch(`${baseUrl}/api/recipe-gpt/exampleAction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          input: `Here are the ingredients for a recipe ${ingredients}, provide me with a plant based version`,
        },
      }),
    });

    return await response.json();
  } catch (e) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
