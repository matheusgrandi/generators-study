import { createServer } from 'http';

const PORT = 3335;

// curl -X POST "localhost:3335/cart" --data '{"id": "123"}

async function handler(request, response) {
  if (request.method === 'POST' && request.url.includes('cart')) {
    for await (let data of request) {
      const item = JSON.parse(data);
      console.log('received', item);
      return response.end(`process succeded for ${item.id}`);
    }
  }
}

createServer(handler).listen(PORT, () =>
  console.log(`Cart API is running on port ${PORT}`)
);
