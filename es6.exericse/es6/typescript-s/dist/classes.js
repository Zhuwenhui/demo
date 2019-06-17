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
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log(dog);
dog.move();
dog.bark();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUhHLHFCQUFJLEdBQUosVUFBSyxnQkFBMkI7UUFBM0IsaUNBQUEsRUFBQSxvQkFBMkI7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsZ0JBQWdCLE9BQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFFRDtJQUFrQix1QkFBTTtJQUF4Qjs7SUFJQSxDQUFDO0lBSEcsa0JBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBa0IsTUFBTSxHQUl2QjtBQUVELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBbmltYWx7XG5cbiAgICAvL+i+k+WHuuWGmeS4gOS4quaWueazleW5tuS4lOi1i+S6iOm7mOiupOWAvFxuICAgIG1vdmUoZGlzdGFuY2VJbk1ldGVyczpudW1iZXIgPSAwKXtcbiAgICAgICAgY29uc29sZS5sb2coYEFuaW1hbCBtb3ZlZCAke2Rpc3RhbmNlSW5NZXRlcnN9bS5gKTtcbiAgICB9XG59XG5cbmNsYXNzIERvZyBleHRlbmRzIEFuaW1hbHtcbiAgICBiYXJrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV29vZiBXb29mIVwiKTtcbiAgICB9XG59XG5cbmNvbnN0IGRvZyA9IG5ldyBEb2coKTtcbmNvbnNvbGUubG9nKGRvZyk7XG5kb2cubW92ZSgpO1xuZG9nLmJhcmsoKTtcblxuXG5cblxuIl19