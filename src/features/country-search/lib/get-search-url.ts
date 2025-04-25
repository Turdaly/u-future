export const getSearchTextFromURL = (query: string) => {
  const params = new URLSearchParams(query);
  return params.get("text") || "";
};