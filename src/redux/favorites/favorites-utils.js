export const addItemsToFavorites = (favoriteItems, filmToAdd) => {
  const existItem = favoriteItems.find((item) => item.id === filmToAdd.id);

  if (!existItem) {
    return [...favoriteItems, filmToAdd];
  }

  return favoriteItems;
};
