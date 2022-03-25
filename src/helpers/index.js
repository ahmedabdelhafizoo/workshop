export function formatDate(date) {
  let result = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return result !== "Invalid Date" ? result : date;
}
