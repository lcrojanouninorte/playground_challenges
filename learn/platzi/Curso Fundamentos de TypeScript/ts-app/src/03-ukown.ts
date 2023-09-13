let parse = (json: string): unknown => {
  return JSON.parse(json);
};

const wrong: boolean = true;
const right: string = "{text:'ok'}";
if (typeof wrong === 'string') {
  console.log(parse(wrong));
}

if (typeof right === 'string') {
  console.log(parse(right));
}
