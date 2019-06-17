const R = require("ramda");
const fetch = require("node-fetch");



const greet = R.replace('{name}', R.__, 'Hello, {name}!');
console.log(greet('Alice')); //=> 'Hello, Alice!'


//根据什么字段进行排序
const ByAge = R.ascend(R.prop('age'));
const people = [
    { name: 'Emma', age: 100 },
    { name: 'Aeter', age: 78 },
    { name: 'Mikhail', age: 22 },
];

const sorted = R.sort(ByAge, people);
console.log(sorted);



// const fetchUser = fetch('https://api.github.com/users').then(response => response.json()).then(response => {
//     for (const iterator of response) {
//        stores.push(iterator.id);
//     }
// })


function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}

function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
  }

  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }


Object.defineProperty(Array.prototype, 'chunk', {
    value: function (chunkSize) {
        var array = this;
        return [].concat.apply([],
            array.map(function (elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
        );
    }
});



