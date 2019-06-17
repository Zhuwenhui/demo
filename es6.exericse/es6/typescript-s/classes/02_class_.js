"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Pencil = /** @class */ (function () {
    function Pencil(width, color, n) {
        this.width = width;
        this.color = color;
        this.n = n;
        this.width = width;
        this.color = color;
        this.productedDate = new Date();
        this.protectedProperty = n;
    }
    Object.defineProperty(Pencil.prototype, "aviableColor", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: true,
        configurable: true
    });
    return Pencil;
}());
exports.Pencil = Pencil;
var Pen = /** @class */ (function (_super) {
    __extends(Pen, _super);
    function Pen(paint) {
        var _this = _super.call(this, 100, "red", "a") || this;
        _this.paint = paint;
        _this.paint = paint;
        return _this;
    }
    return Pen;
}(Pencil));
var pen = new Pen("👋");
pen.aviableColor = "绿色";
//获取颜色
console.log(pen.aviableColor);
// console.log(pen.protectedProperty);
console.log(pen);
