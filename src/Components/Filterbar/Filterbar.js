import { useEffect, useState } from "react";
import { useData } from "../../Context/dataContext";
import { cuisineData } from "../../db";
import { filterData } from "../../Utils/Utils";
import { motion } from "framer-motion";
import "./Filterbar.css";

export const Filterbar = () => {
  const [currentCuisine, setCurrentCuisine] = useState(null);

  const {
    dataState: { restaurantsData },
    dispatchData,
  } = useData();

  useEffect(() => {
    filterData(restaurantsData, currentCuisine, dispatchData);
  }, [currentCuisine]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: currentCuisine ? 0 : 250 }}
      transition={{ transition: 0.6, delay: 0.3 }}
      className="filterbar"
    >
      <h1>Restaurant Review App</h1>
      <h3>Select Your Cuisine</h3>
      {cuisineData?.map((recipe) => (
        <button
          key={recipe.id}
          className={`filterbar-btn ${+currentCuisine === +recipe?.id&&"filterbar-btn-active"}`}
          value={recipe?.id}
          onClick={(e) => setCurrentCuisine(e.target.value)}
        >
          {recipe?.name}
        </button>
      ))}
    </motion.div>
  );
};
