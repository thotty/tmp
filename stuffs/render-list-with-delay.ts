interface Item {
  msg: string;
  delay?: number;
}

const delayDefault = 350;
let delayAccumulator = 0;
function render(item: Item): void {
  const loadingDelay = delayAccumulator;
  delayAccumulator += delayDefault + (item.delay ?? 0);
  const showMessageDelay = delayAccumulator;

  setTimeout(() => {
    console.log('%s: loading...', new Date().toLocaleTimeString());
  }, loadingDelay);
  setTimeout(() => {
    console.log('%s: msg: %s', new Date().toLocaleTimeString(), item.msg);
  }, showMessageDelay);
}

const list: Item[] = [
  {msg: 'oi, sou o primeiro item' },
  {msg: 'e eu sou o segundo' },
  {msg: 'aqui é o terceiro e preciso de uma pausa de 3s', delay: 3000},
  {msg: '4º item e vou rodar depois do 3º' },
  {msg: 'quinto item e com uma pausa maior: 5s', delay: 5000},
  {msg: 'ultimo item!' },
];


list.forEach((item) => {
  render(item);
});
