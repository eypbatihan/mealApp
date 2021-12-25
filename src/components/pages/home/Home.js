import React, { useState } from "react";
import Header from "../../header/Header";
import { HomeImg, ImgDiv, MainContainer, RecipeCard } from "./HomeStyle";
import axios from "axios";
import RecipeCardComp from "./RecipeCardComp";
import homeSvg from "../../../assets/home.svg";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "7cfcf794";
const APP_KEY = "45d64153fb736748fcffda0b95b66b59";

const Home = () => {
  const [query, setQuery] = useState();
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (result.data.more) {
      }
      setRecipes(result.data.hits);
      setQuery("");
    } else {
    }
  };
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <MainContainer>
          <ImgDiv>
            <HomeImg src={homeSvg} />
          </ImgDiv>
        </MainContainer>
      )}
    </div>
  );
};

export default Home;
