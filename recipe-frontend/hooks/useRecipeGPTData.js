import { useState } from 'react';
import { fetchRecipeGPTData } from '../utils/api';

export function useRecipeGPTData() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async (ingredients) => {
    setIsLoading(true);
    try {
      const res = await fetchRecipeGPTData(ingredients);
      const dataToSave = res.data.message;

      setData(dataToSave);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, fetchData, isLoading, setData, error };
}
