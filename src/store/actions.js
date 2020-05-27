import { getCategories } from "../services/categories";
import { getImagesByRace, getImagesByCategory } from "../services/images";
import { getRaces } from "../services/races";

export const loadRaces = async ({ commit }) => {
  const response = await getRaces();
  const datas = await response.json();

  const races = datas.map(({ id, name }) => {
    return { id, name };
  });

  commit("setRaces", races);
};

export const setCurrentRace = async ({ commit, getters }, id) => {
  const item = getters.getRace(id);

  if (item) {
    commit("setCurrentRace", item);

    const response = await getImagesByRace(item);

    const images = await response.json();

    commit("setImages", images);
  }
};

export const loadCategories = async ({ commit }) => {
  const response = await getCategories();
  const datas = await response.json();

  const categories = datas.map(({ id, name }) => {
    return { id, name };
  });

  commit("setCategories", categories);
};

export const setCurrentCategory = async ({ commit, getters }, id) => {
  const item = getters.getCategory(id);

  if (item) {
    commit("setCurrentCategory", item);

    const response = await getImagesByCategory(item);

    const images = await response.json();

    commit("setImages", images);
  }
};
