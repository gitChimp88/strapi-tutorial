import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useGetRecipe } from '../hooks/useGetRecipe';
import { useRecipeGPTData } from '../hooks/useRecipeGPTData';
import dynamic from 'next/dynamic';
const RecipeCard = dynamic(() => import('../components/RecipeCard'), {
  ssr: false,
});
const RecipeModal = dynamic(() => import('../components/RecipeModal'), {
  ssr: false,
});

export default function Home() {
  const { recipes, loading, error } = useGetRecipe();
  const { data, fetchData, isLoading, setData } = useRecipeGPTData();
  const [recipe, setRecipe] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCardClick = (recipeToView) => {
    setRecipe(recipeToView);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setData('');
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Strapi Recipe!</a>
          </h1>
        </div>
        <div className={styles.recipeContainer}>
          {!loading && recipes ? (
            recipes.map((recipe, i) => {
              const { title, description } = recipe.attributes;
              return (
                <div
                  onClick={() => handleCardClick(recipe.attributes)}
                  key={i}
                  className={styles.item}
                >
                  <RecipeCard
                    title={title}
                    bordered={true}
                    content={description}
                  />
                </div>
              );
            })
          ) : (
            <p>...Loading</p>
          )}
        </div>
        <RecipeModal
          title={recipe?.title}
          open={open}
          handleCloseModal={handleCloseModal}
          description={recipe?.description}
          ingredients={recipe?.ingredients}
          instructions={recipe?.instructions}
          getRecipeGPTData={fetchData}
          recipeGPTData={data}
          isLoading={isLoading}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Strapi
        </a>
      </footer>
    </div>
  );
}
