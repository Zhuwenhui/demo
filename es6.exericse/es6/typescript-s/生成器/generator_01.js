"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
function infiniteSequence() {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, i++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var iterator = infiniteSequence();
// while (true) {
// console.log(iterator.next());
// }
function generator() {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < 3)) return [3 /*break*/, 3];
                return [4 /*yield*/, index++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
//创建一个生成器
var generators = generator();
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
function delay(milliseconds, count) {
    //返回一个Promise
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            reslove(count);
        }, milliseconds);
    });
}
function dramaticWelcome() {
    return __awaiter(this, void 0, void 0, function () {
        var i, count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("👋");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 5)) return [3 /*break*/, 4];
                    return [4 /*yield*/, delay(1, i)];
                case 2:
                    count = _a.sent();
                    console.log(count);
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("👌");
                    return [2 /*return*/];
            }
        });
    });
}
// dramaticWelcome();
function otherGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("👋 执行启动 ...");
                return [4 /*yield*/, 0];
            case 1:
                _a.sent();
                console.log("👌 执行恢复 ...");
                return [4 /*yield*/, 1];
            case 2:
                _a.sent();
                console.log("👌 执行恢复 ...");
                return [2 /*return*/];
        }
    });
}
var otherIterators = otherGenerator();
console.log(otherIterators.next());
console.log(otherIterators.next());
console.log(otherIterators.next());
function next_generator() {
    var bar;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, "foo"];
            case 1:
                bar = _a.sent();
                console.log("🌈", bar);
                return [2 /*return*/];
        }
    });
}
var next_generators = next_generator();
//获取下一个参数
var foo = next_generators.next();
console.log(foo.value);
// Resume execution injecting bar
console.log(iterator.next('bar'));
var https = function (request) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                fetch(request).then(function (response) { return response.json(); }).then(function (body) { resolve(body); });
            })];
    });
}); };
function demo() {
    return __awaiter(this, void 0, void 0, function () {
        var datas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, https("https://jsonplaceholder.typicode.com/todos")];
                case 1:
                    datas = _a.sent();
                    console.log(datas);
                    return [2 /*return*/];
            }
        });
    });
}
demo();
