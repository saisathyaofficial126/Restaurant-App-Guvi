import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="recipecard" onClick={()=>navigate("/restraunt/"+ recipe?.rstId)}>
      <div className="recipecard-header">
        <div className="recipecard-img-container">
          {recipe?.imgSrc && (
            <img
              src={recipe?.imgSrc}
              style={{
                visibility: recipe?.imgSrc && imageLoading ? "hidden" : "",
              }}
              onLoad={() => setImageLoading(false)}
            />
          )}
          <div className="recipecard-icon-container">
            {/* <EditModal recipe={recipe}>
              <Pencil1Icon />
            </EditModal>
            <CrossCircledIcon onClick={deleteRecipeHandler} /> */}
          </div>
        </div>
      </div>
      <div className="recipecard-info">
        <h4>{recipe?.name}</h4>
        <div>
          <span>Rs.{recipe?.price} for {recipe?.qty}</span>
        </div>
        <div>
          <span>{recipe?.rstName}</span>
        </div>
      </div>
    </div>
  );
};
