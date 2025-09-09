import { Filterbar } from "../../Components/Filterbar/Filterbar";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCard";
import { useData } from "../../Context/dataContext";
import "./Home.css";
import { motion } from "framer-motion";
export const Home = () => {
  const {
    dataState: { filteredData },
  } = useData();

  return (
    <div className="home">
      <Filterbar />
      {filteredData?.map((restraunt) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{transition:0.5,delay:0.3}}
          >
            <h2>
              Dishes By <span>{restraunt?.name}</span>
            </h2>
            <motion.div className="home-recipe-container">
              {restraunt?.menu?.map((recipe) => (
                <RecipeCard
                  recipe={{
                    ...recipe,
                    rstName: restraunt?.name,
                    rstId: restraunt?.id,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
