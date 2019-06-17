const person = { name: 'Julley', age: 14 };
const student = { hobby: '👏' };

//对象属性集合
const final = { ...person, ...student };
console.log(final);

const batch = ['🐂', '🐭', '🐯'];
const concat = [...batch, '李四', '🚀'];

//根据位置来进行填充数据
console.log(['1','2',...batch,'🐷',])
console.log(concat);

//循环数组
concat.forEach(console.log);