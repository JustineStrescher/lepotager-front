/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

export function findVegetable(vegetables, searchedSlug) {
  const vegetable = vegetables.find((testedVege) => {
    return testedVege.slug === searchedSlug;
  });
  return vegetable;
}

export function findCategory(vegetables, searchedSlug) {
  const vegetable = vegetables.find((testedVege) => {
    return testedVege.categorySlug === searchedSlug;
  });
  return vegetable.familly;
}

export function findVegetableByFamilly(vegetablesList, searchedSlug) {
  const vegetables = vegetablesList.filter((testedVege) => {
    return testedVege.categorySlug === searchedSlug;
  });
  return vegetables;
}

export function findVegetableInCart(vegetablesList, searchedId) {
  const vegetable = vegetablesList.find((testedVege) => {
    return testedVege.product.id === searchedId;
  });
  if (vegetable) {
    return false;
  }
  return true;
}
