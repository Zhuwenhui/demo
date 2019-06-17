const lowercaseKeys = obj =>
    Object.keys(obj).reduce((acc, key) => {
        console.log(acc)
        console.debug(key);
        acc[key.toLowerCase()] = obj[key];

        return acc;
    },{});


// console.log(Object.keys({ name: 'alex' }));

const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};

// console.log(myObjLower);


const src = Object.keys({ name: 'alex' ,age:14,hobby:'julley'}).reduce((acc, cur,idx) => {
    console.log(acc);
    console.log(cur);
    console.log(idx);
});
console.log(src);


const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
);


const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
console.log(orderBy(users, ['name', 'age']));

// console.log(orderBy(users,['name','age'],['asc','desc']));
const isEmpty = value => value === null || !(Object.keys(value) || value).length;
//判断传递进行来的参数是不是函数
const isFunction = value => typeof value === 'function';
//判断是否为空
const isNull = value => value === null;
//判断是否为对象
const isObjext = obj => obj === Object(obj);



/**
 * Asynchronously load an external JavaScript
 * file and resolve upon completion.
 *
 * @param {string} src - the URL for the external source code.
 * @return {promise} a promise that resolves when the script loads.
 */
function loadScript(src) {
	return new Promise(resolve => {
		const script = document.createElement('script');
		script.src = src;
		script.type = 'text/javascript';
		script.async = true;
		script.onload = resolve;
		document.body.appendChild(script);
	});
}


async function loadScripts (scripts) {
    function get (src) {
        return new Promise(function (resolve, reject) {
            var el = document.createElement("script");
            el.async = true;
            el.addEventListener("load", function () {
                resolve(src);
            }, false);
            el.addEventListener("error", function () {
                reject(src);
            }, false);
            el.src = src;
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(el);
        });
    }

    const myPromises = scripts.map(async function (script, index) {
        return await get(script);
    });

    return await Promise.all(myPromises);
}

// How to use it
loadScripts([
    "https://static.zinoui.com/1.5/compiled/zino.svg.min.js",
    "https://static.zinoui.com/libs/jquery/jquery.min.js"
]).then(function () {
    return loadScripts(["https://static.zinoui.com/1.5/compiled/zino.chart.min.js"]);
}).then(function () {
    $("#chart").zinoChart(settings);
});