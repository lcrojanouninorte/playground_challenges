const noEnd = () => {
  while (true) {
    console.log('always');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }

  return fail('not match');
};

console.log(example('test'));
console.log(example([1, 2]));
console.log(example(2222));
console.log(example(noEnd));
