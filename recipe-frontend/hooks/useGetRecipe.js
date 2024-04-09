import { useEffect, useState } from 'react';
import { fetchRecipes } from '../utils/api';

export function useGetRecipe() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchRecipes();
        console.log('data - ', data);
        setRecipes(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { recipes, loading, error };
}
