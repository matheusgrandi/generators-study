import axios from 'axios';

const myDB = async () =>
  Array.from({ length: 1000 }, (v, index) => `${index}-cellphone`);

const PRODUCTS_URL = 'http://localhost:3334/products';
const CART_URL = 'http://localhost:3335/cart';

async function processDbData() {
  const products = await myDB();
  const responses = [];
  for (let product of products) {
    const { data: productInfo } = await axios.get(
      `${PRODUCTS_URL}?productName=${product}`
    );
    const { data: cartData } = await axios.post(CART_URL, productInfo);
    responses.push(cartData);
  }
  return responses;
}

// console.table(await processDbData());

async function* processDbDataGenerator() {
  const products = await myDB();
  for (let product of products) {
    const { data: productInfo } = await axios.get(
      `${PRODUCTS_URL}?productName=${product}`
    );
    const { data: cartData } = await axios.post(CART_URL, productInfo);
    yield cartData;
  }
}

for await (let data of processDbDataGenerator()) {
  console.table(data);
}
