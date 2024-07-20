import React, { useState } from 'react';
import axios from 'axios';

const SPOONACULAR_API_KEY = 'c0c07f11e13a463396f755fe35b68d1e';

function SmartRecipeGenerator() {
  const [availableIngredients, setAvailableIngredients] = useState('');
  const [matchingRecipes, setMatchingRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setAvailableIngredients(e.target.value);
  };

  const findRecipes = async () => {
    try {
      const ingredients = availableIngredients.split(',').map((ingredient) => ingredient.trim()).join(',');
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients,
          number: 10, // Number of recipes to fetch
          apiKey: SPOONACULAR_API_KEY,
        },
      });
      setMatchingRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
        params: {
          apiKey: SPOONACULAR_API_KEY,
        },
      });
      setSelectedRecipe(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className='flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7'>
      <div>
        <h1 className='text-4xl font-bold'>Smart Recipe Generator</h1>
        <p className='m-2 text-lg text-gray-500'>Provides recipes with ingredients available to you.</p>
      </div>

      <div className='flex flex-col justify-center w-full p-5'>
        <div className="container p-4 mx-auto">
          <div className="mb-4 lg:w-1/3">
            <label className="block mb-1">Available Ingredients (comma-separated):</label>
            <input
              type="text"
              value={availableIngredients}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="e.g., pasta, eggs, cheese"
            />
          </div>

          <button onClick={findRecipes} className="px-4 py-2 mb-4 text-white bg-gray-500 rounded">
            Find Recipes
          </button>

          {matchingRecipes.length > 0 && (
            <div>
              <h2 className='mb-4 text-2xl font-bold'>Matching Recipes:</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {matchingRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
                    onClick={() => fetchRecipeDetails(recipe.id)}
                  >
                    <img src={recipe.image} alt={recipe.title} className="object-cover w-full h-48" />
                    <div className="p-4">
                      <h3 className='text-xl font-semibold'>{recipe.title}</h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                      <p className="font-semibold text-white">Click for Details</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isModalOpen && selectedRecipe && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="relative w-full max-h-screen p-6 overflow-hidden bg-white rounded-lg shadow-lg md:w-3/4 lg:w-2/3 xl:w-1/2">
                <button onClick={closeModal} className="absolute text-2xl font-bold text-black top-2 right-2">&times;</button>
                <div className="overflow-y-auto max-h-[calc(100vh-4rem)]">
                  <h2 className='mb-4 text-2xl font-bold text-center'>{selectedRecipe.title}</h2>
                  <img src={selectedRecipe.image} alt={selectedRecipe.title} className='object-cover w-full h-64 mb-4 rounded' />
                  <h3 className='mb-2 text-xl font-semibold'>Ingredients:</h3>
                  <ul className="mb-4 ml-5 list-disc">
                    {selectedRecipe.extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id} className="mb-1 ml-1 mr-1">{ingredient.original}</li>
                    ))}
                  </ul>
                  <h3 className='mb-2 text-xl font-semibold'>Instructions:</h3>
                  <ol className="mb-4 ml-5 list-decimal">
                    {selectedRecipe.analyzedInstructions.length > 0 
                      ? selectedRecipe.analyzedInstructions[0].steps.map((step) => (
                          <li key={step.number} className="mb-2 ml-1 mr-1">{step.step}</li>
                        ))
                      : <p>No instructions available</p>
                    }
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Scrollbar CSS */}
      <style jsx global>{`
        /* Custom scrollbar styles for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

export default SmartRecipeGenerator;
