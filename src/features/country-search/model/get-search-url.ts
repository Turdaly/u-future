export const getSearchTextFromURL = (query: string) => {
  const params = new URLSearchParams(query);
  console.log(params);
  return params.get("text") || "";
};