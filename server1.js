import { createServer } from 'http';
import { parse } from 'url';
import { randomUUID } from 'crypto';

const PORT = 3334;

async function handler(request, response) {
  if (request.method === 'GET' && request.url.includes('products')) {
    const {
      query: { productName },
    } = parse(request.url, true);

    const result = {
      id: randomUUID(),
      product: productName,
    };

    return response.end(JSON.stringify(result));
  }
}
createServer(handler).listen(PORT, () =>
  console.log(`product API is running on ${PORT}`)
);

// createServer((request, response) => {
//   if (request.method === 'GET' && request.url.includes('products')) {
//   }
//   request.end('bye');
// }).listen(PORT, () => console.log('teste'));
