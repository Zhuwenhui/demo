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
                if (!true) return [3, 3];
                return [4, i++];
            case 2:
                _a.sent();
                return [3, 1];
            case 3: return [2];
        }
    });
}
var iterator = infiniteSequence();
function generator() {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < 3)) return [3, 3];
                return [4, index++];
            case 2:
                _a.sent();
                return [3, 1];
            case 3: return [2];
        }
    });
}
var generators = generator();
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
function delay(milliseconds, count) {
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
                    if (!(i < 5)) return [3, 4];
                    return [4, delay(1, i)];
                case 2:
                    count = _a.sent();
                    console.log(count);
                    _a.label = 3;
                case 3:
                    i++;
                    return [3, 1];
                case 4:
                    console.log("👌");
                    return [2];
            }
        });
    });
}
function otherGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("👋 执行启动 ...");
                return [4, 0];
            case 1:
                _a.sent();
                console.log("👌 执行恢复 ...");
                return [4, 1];
            case 2:
                _a.sent();
                console.log("👌 执行恢复 ...");
                return [2];
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
            case 0: return [4, "foo"];
            case 1:
                bar = _a.sent();
                console.log("🌈", bar);
                return [2];
        }
    });
}
var next_generators = next_generator();
var foo = next_generators.next();
console.log(foo.value);
console.log(iterator.next('bar'));
var https = function (request) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, new Promise(function (resolve) {
                fetch(request).then(function (response) { return response.json(); }).then(function (body) { resolve(body); });
            })];
    });
}); };
function demo() {
    return __awaiter(this, void 0, void 0, function () {
        var datas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, https("https://jsonplaceholder.typicode.com/todos")];
                case 1:
                    datas = _a.sent();
                    console.log(datas);
                    return [2];
            }
        });
    });
}
demo();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yXzAxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4v55Sf5oiQ5ZmoL2dlbmVyYXRvcl8wMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQkFtR0E7QUFuR0EsU0FBVSxnQkFBZ0I7Ozs7O2dCQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7cUJBQ0gsSUFBSTtnQkFDUCxXQUFNLENBQUMsRUFBRSxFQUFBOztnQkFBVCxTQUFTLENBQUM7Ozs7O0NBRWpCO0FBRUQsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztBQUtsQyxTQUFVLFNBQVM7Ozs7O2dCQUNYLEtBQUssR0FBVyxDQUFDLENBQUM7OztxQkFDZixDQUFBLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQ1osV0FBTSxLQUFLLEVBQUUsRUFBQTs7Z0JBQWIsU0FBYSxDQUFDOzs7OztDQUVyQjtBQUdELElBQUksVUFBVSxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFNL0IsU0FBUyxLQUFLLENBQUMsWUFBb0IsRUFBRSxLQUFhO0lBRTlDLE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUN2QyxVQUFVLENBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUdELFNBQWUsZUFBZTs7Ozs7O29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNULENBQUMsR0FBRyxDQUFDOzs7eUJBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUVLLFdBQU0sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQTs7b0JBQWpDLEtBQUssR0FBVyxTQUFpQjtvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O29CQUhBLENBQUMsRUFBRSxDQUFBOzs7b0JBSzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7O0NBQ3BCO0FBS0QsU0FBVSxjQUFjOzs7O2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixXQUFNLENBQUMsRUFBQTs7Z0JBQVAsU0FBTyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLFdBQU0sQ0FBQyxFQUFBOztnQkFBUCxTQUFPLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7OztDQUM5QjtBQUdELElBQUksY0FBYyxHQUFHLGNBQWMsRUFBRSxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRW5DLFNBQVUsY0FBYzs7OztvQkFDUixXQUFNLEtBQUssRUFBQTs7Z0JBQWpCLEdBQUcsR0FBRyxTQUFXO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzs7OztDQUMxQjtBQUVELElBQU0sZUFBZSxHQUFHLGNBQWMsRUFBRSxDQUFDO0FBRXpDLElBQU0sR0FBRyxHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUtsQyxJQUFNLEtBQUssR0FBRyxVQUFPLE9BQW9COztRQUNyQyxXQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckYsQ0FBQyxDQUFDLEVBQUM7O0tBQ04sQ0FBQztBQUtGLFNBQWUsSUFBSTs7Ozs7d0JBRUQsV0FBTSxLQUFLLENBQUMsNENBQTRDLENBQUMsRUFBQTs7b0JBQWpFLEtBQUssR0FBRyxTQUF5RDtvQkFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Q0FDdEI7QUFFRCxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24qIGluZmluaXRlU2VxdWVuY2UoKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHlpZWxkIGkrKztcbiAgICB9XG59XG5cbnZhciBpdGVyYXRvciA9IGluZmluaXRlU2VxdWVuY2UoKTtcbi8vIHdoaWxlICh0cnVlKSB7XG4vLyBjb25zb2xlLmxvZyhpdGVyYXRvci5uZXh0KCkpO1xuLy8gfVxuXG5mdW5jdGlvbiogZ2VuZXJhdG9yKCkge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCAzKSB7XG4gICAgICAgIHlpZWxkIGluZGV4Kys7XG4gICAgfVxufVxuXG4vL+WIm+W7uuS4gOS4queUn+aIkOWZqFxubGV0IGdlbmVyYXRvcnMgPSBnZW5lcmF0b3IoKTtcbmNvbnNvbGUubG9nKGdlbmVyYXRvcnMubmV4dCgpKVxuY29uc29sZS5sb2coZ2VuZXJhdG9ycy5uZXh0KCkpO1xuY29uc29sZS5sb2coZ2VuZXJhdG9ycy5uZXh0KCkpO1xuY29uc29sZS5sb2coZ2VuZXJhdG9ycy5uZXh0KCkpO1xuXG5cblxuXG5cbmZ1bmN0aW9uIGRlbGF5KG1pbGxpc2Vjb25kczogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAvL+i/lOWbnuS4gOS4qlByb21pc2VcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzbG92ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzbG92ZShjb3VudCk7XG4gICAgICAgIH0sIG1pbGxpc2Vjb25kcyk7XG4gICAgfSk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZHJhbWF0aWNXZWxjb21lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnNvbGUubG9nKFwi8J+Ri1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAvLyBhd2FpdCBpcyBjb252ZXJ0aW5nIFByb21pc2U8bnVtYmVyPiBpbnRvIG51bWJlclxuICAgICAgICBjb25zdCBjb3VudDogbnVtYmVyID0gYXdhaXQgZGVsYXkoMSwgaSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCLwn5GMXCIpXG59XG5cbi8vIGRyYW1hdGljV2VsY29tZSgpO1xuXG5cbmZ1bmN0aW9uKiBvdGhlckdlbmVyYXRvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIvCfkYsg5omn6KGM5ZCv5YqoIC4uLlwiKTtcbiAgICB5aWVsZCAwO1xuICAgIGNvbnNvbGUubG9nKFwi8J+RjCDmiafooYzmgaLlpI0gLi4uXCIpO1xuICAgIHlpZWxkIDE7XG4gICAgY29uc29sZS5sb2coXCLwn5GMIOaJp+ihjOaBouWkjSAuLi5cIik7XG59XG5cblxudmFyIG90aGVySXRlcmF0b3JzID0gb3RoZXJHZW5lcmF0b3IoKTtcbmNvbnNvbGUubG9nKG90aGVySXRlcmF0b3JzLm5leHQoKSk7XG5jb25zb2xlLmxvZyhvdGhlckl0ZXJhdG9ycy5uZXh0KCkpO1xuY29uc29sZS5sb2cob3RoZXJJdGVyYXRvcnMubmV4dCgpKTtcblxuZnVuY3Rpb24qIG5leHRfZ2VuZXJhdG9yKCkge1xuICAgIGNvbnN0IGJhciA9IHlpZWxkIFwiZm9vXCI7XG4gICAgY29uc29sZS5sb2coXCLwn4yIXCIsIGJhcik7XG59XG5cbmNvbnN0IG5leHRfZ2VuZXJhdG9ycyA9IG5leHRfZ2VuZXJhdG9yKCk7XG4vL+iOt+WPluS4i+S4gOS4quWPguaVsFxuY29uc3QgZm9vID0gbmV4dF9nZW5lcmF0b3JzLm5leHQoKTtcbmNvbnNvbGUubG9nKGZvby52YWx1ZSk7XG4vLyBSZXN1bWUgZXhlY3V0aW9uIGluamVjdGluZyBiYXJcbmNvbnNvbGUubG9nKGl0ZXJhdG9yLm5leHQoJ2JhcicpKTtcblxuXG5cblxuY29uc3QgaHR0cHMgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdEluZm8pOiBQcm9taXNlPGFueT4gPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgZmV0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oYm9keSA9PiB7IHJlc29sdmUoYm9keSkgfSk7XG4gICAgfSk7XG59O1xuXG5cblxuXG5hc3luYyBmdW5jdGlvbiBkZW1vKCkge1xuICAgIC8vIGV4YW1wbGUgY29uc3VtaW5nIGNvZGUgXG4gICAgY29uc3QgZGF0YXMgPSBhd2FpdCBodHRwcyhcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhcyk7XG59XG5cbmRlbW8oKTtcblxuIl19