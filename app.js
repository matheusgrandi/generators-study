const nums = [1, 2, 3, 4];

console.log(nums.reduce((prev, cur) => cur + prev, 0));

const users = [];

const user = {
  name: 'Matheus',
  age: '30',
  user: 'matheusgrandi',
  password: '12345',
};

users.push(user);

console.log(users.map(({ password, ...rest }) => rest));

console.log('generators:');

function* range(start, end) {
  while (start < end) {
    yield start;
    start++;
  }
}
const gen = range(0, 5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* teste(users) {
  for (let user of users) {
    yield user;
  }
}

const generator = teste(nums);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
