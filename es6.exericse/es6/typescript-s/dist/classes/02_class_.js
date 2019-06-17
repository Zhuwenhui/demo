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
var Pencil = (function () {
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
var Pen = (function (_super) {
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
console.log(pen.aviableColor);
console.log(pen);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDJfY2xhc3NfLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2xhc3Nlcy8wMl9jbGFzc18udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFLSSxnQkFBb0IsS0FBYSxFQUFVLEtBQWEsRUFBVyxDQUFRO1FBQXZELFVBQUssR0FBTCxLQUFLLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVcsTUFBQyxHQUFELENBQUMsQ0FBTztRQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0JBQUksZ0NBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQWlCLEtBQVk7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFLTCxhQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CcUIsd0JBQU07QUFxQjVCO0lBQWtCLHVCQUFNO0lBQ3BCLGFBQW1CLEtBQVk7UUFBL0IsWUFDSSxrQkFBTSxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxTQUV2QjtRQUhrQixXQUFLLEdBQUwsS0FBSyxDQUFPO1FBRTNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztJQUN2QixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQUFMRCxDQUFrQixNQUFNLEdBS3ZCO0FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFLOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZW5jaWwge1xuXG4gICAgcHJpdmF0ZSBwcm9kdWN0ZWREYXRlOkRhdGU7XG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFByb3BlcnR5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpZHRoOiBudW1iZXIsIHByaXZhdGUgY29sb3I6IHN0cmluZyxwcm90ZWN0ZWQgbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMucHJvZHVjdGVkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMucHJvdGVjdGVkUHJvcGVydHkgPSBuO1xuICAgIH1cblxuICAgIGdldCBhdmlhYmxlQ29sb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XG4gICAgfVxuXG4gICAgc2V0IGF2aWFibGVDb2xvcihjb2xvcjpzdHJpbmcpe1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5jbGFzcyBQZW4gZXh0ZW5kcyBQZW5jaWx7XG4gICAgY29uc3RydWN0b3IocHVibGljIHBhaW50OnN0cmluZykge1xuICAgICAgICBzdXBlcigxMDAsXCJyZWRcIixcImFcIik7XG4gICAgICAgIHRoaXMucGFpbnQgPSBwYWludDtcbiAgICB9XG59XG5cbmNvbnN0IHBlbiA9IG5ldyBQZW4oXCLwn5GLXCIpO1xucGVuLmF2aWFibGVDb2xvciA9IFwi57u/6ImyXCI7XG4vL+iOt+WPluminOiJslxuY29uc29sZS5sb2cocGVuLmF2aWFibGVDb2xvcik7XG5cbi8vIGNvbnNvbGUubG9nKHBlbi5wcm90ZWN0ZWRQcm9wZXJ0eSk7XG5cblxuY29uc29sZS5sb2cocGVuKTtcblxuIl19