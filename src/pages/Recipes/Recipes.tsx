import { FC } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useStore from "store/store";
import { fetchBeerRecipes } from "services/fetchApi";
import RecipesList from "components/RecipesList/RecipesList";

const Recipes: FC = () => {
  const beerRecipes = useStore((state) => state.beerRecipes);
  const currentPage = useStore((state) => state.currentPage);
  const setBeerRecipes = useStore((state) => state.setBeerRecipes);
  const setCurrentPage = useStore((state) => state.setCurrentPage);

  const location = useLocation();

  useEffect(() => {
    const getRecepies = async (page: number) => {
      try {
        const { data, currentPage } = await fetchBeerRecipes(page);

        if (data) {
          setBeerRecipes(data);
          setCurrentPage(currentPage);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRecepies(currentPage);
  }, [currentPage, setBeerRecipes, setCurrentPage]);

  return (
    <>
      <RecipesList recipes={beerRecipes} location={location} />
      <button
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        prevPage
      </button>
      <button
      disabled={currentPage === 22}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        nextPage
      </button>
    </>
  );
};

export default Recipes;
