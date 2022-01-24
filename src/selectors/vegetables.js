/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * on trouve la recette voulue dans la liste des recettes
 * @param {Array} vegetables - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findVegetable(vegetables, searchedSlug) {
  const vegetable = vegetables.find((testedVege) => {
    return testedVege.slug === searchedSlug;
  });
  return vegetable;
}

/**
 * on trouve la recette voulue dans la liste des recettes
 * @param {Array} vegetables - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findVegetableByFamilly(vegetablesList, searchedSlug) {
  const vegetables = vegetablesList.filters((testedVege) => {
    return testedVege.slug === searchedSlug;
  });
  return vegetables;
}
