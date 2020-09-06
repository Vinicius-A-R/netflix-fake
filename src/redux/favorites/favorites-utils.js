export const addToFavorites = (favoriteItems, filmToAdd) => {
  const existItem = favoriteItems.find((item) => item.id === filmToAdd.id);

  if (!existItem) {
    return [...favoriteItems, filmToAdd];
  }

  return favoriteItems;
};

export const removeToFavorites = (favoriteItems, filmToRemove) => {
  const films = favoriteItems.filter((item) => item.id !== filmToRemove.id);

  return films;
};
