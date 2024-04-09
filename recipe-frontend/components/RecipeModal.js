import { Modal } from 'antd';

export default function RecipeModal({
  title,
  open,
  handleCloseModal,
  width = 1000,
  description,
  ingredients,
  instructions,
  getRecipeGPTData,
  recipeGPTData,
  isLoading,
}) {
  return (
    <div>
      <Modal
        title={title}
        centered
        open={open}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        width={width}
      >
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Ingredients</h3>
        <p>{ingredients}</p>
        {!isLoading ? (
          <button onClick={() => getRecipeGPTData(ingredients)}>
            Make plant based
          </button>
        ) : (
          <p>Loading...</p>
        )}

        <h3>Instructions</h3>
        <p>{instructions}</p>
        {recipeGPTData ? (
          <div>
            <h3>Plant based version</h3>
            <p>{recipeGPTData}</p>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
