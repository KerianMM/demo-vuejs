export const setImages = (state, images) => {
  state.images = [...images];
};

export const setRaces = (state, races) => {
  state.races = [...races];
};

export const setCurrentRace = (state, currentRace) => {
  state.currentRace = currentRace;
  state.currentCategory = null;
};

export const setCategories = (state, categories) => {
  state.categories = [...categories];
};

export const setCurrentCategory = (state, currentCategory) => {
  state.currentCategory = currentCategory;
  state.currentRace = null;
};
