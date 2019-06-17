module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node":true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    
    "rules": {
        //开启console.log 在严格模式下默认是静止的
        'no-console': 'off',
        //不允许alert语句存在
        "no-alert": "error",
        "no-alert": "off",
        "no-array-constructor": "off",
        "no-bitwise": "off",
        "no-caller": "off",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-class-assign": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
    }
};