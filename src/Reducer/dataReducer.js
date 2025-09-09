import { cuisineData, restaurantsData } from "../db";

export const initDataState = {
  cuisineData: [...cuisineData],
  restaurantsData: [...restaurantsData],
  filteredData: [],
  user: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_FILTERED_DATA":
      return {
        ...state,
        filteredData: [...action.payload],
      };
    case "INIT_ADD_REVIEW":
      const addReview = state?.restaurantsData?.map((rst) =>
        +rst?.id === +action.payload?.id
          ? {
              ...rst,
              ratings: [action.payload?.review, ...rst?.ratings],
              averageRating: ((rst?.averageRating+ action?.payload?.review?.rating)/rst?.ratings?.length+1).toFixed(2)
            }
          : rst
      );
      return {
        ...state,
        restaurantsData: addReview,
      };
  }
};
