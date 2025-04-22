function capitalize(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}
