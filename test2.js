function teste(num) {
  return new Promise((resolve, reject) => {
    if (!num) {
      throw new Error('invalid argument');
    }
    setTimeout(() => resolve(num ** 2), 3000);
  });
}

teste2(4).then(console.log).catch(console.error);

function teste2(num) {
  return new Promise((resolve, reject) => {
    if (!num) {
      throw new Error('invalid argument');
    }
    setTimeout(() => resolve(num ** 3), 3000);
  });
}
