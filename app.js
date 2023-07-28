import deneme  from './deneme.js';

const { getData } = deneme();

const data = await getData(1);
console.log(data);