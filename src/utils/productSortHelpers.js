const getPrice = (item) => item.price;
const sortLowHigh = (a, b) => a.price - b.price;
const sortHighLow = (a, b) => b.price - a.price;
const sortAlphabetically = (a, b) => a.category.localeCompare(b.category);

export { getPrice, sortLowHigh, sortHighLow, sortAlphabetically };
