// import { uniq } from 'lodash';
// import { message, square } from './config'
// import * as lib from './config';  //倒入所有函数
// import classRoom from './config';



// console.log(uniq([1, 2, 3, 1, 2]));
// console.log(square(100));
// console.log(lib.diag(1, 2));
// // func();

// const cls = new classRoom('章三');
// cls.gretting();


// //输出结果
// console.log(lib.music);
// import User, { createURL, gravatr } from './user'

// const itcast = new User('codecast','i@itcast');
// const profile = createURL(User.name);
// const image = gravatr(itcast.email);


// //输出结果
// console.log(profile)
// console.log(image);


import request from 'request';
import bluebird from 'bluebird';

const ronQuotesAPI = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const extractText = quote => JSON.parse(quote.body)[0];
const asyncRequest = bluebird.promisifyAll(request);

const getRonQuotes = bluebird.coroutine(function* () {
  const quotes = [];

  quotes.push(yield asyncRequest.getAsync(ronQuotesAPI));
  quotes.push(yield asyncRequest.getAsync(ronQuotesAPI));
  quotes.push(yield asyncRequest.getAsync(ronQuotesAPI));

  return quotes.map(extractText);
});

getRonQuotes()
  .then(console.log) // array with three quotes inside.
  .catch(console.error); // Stupid simple error handling! :)

