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
var Person = (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Person.prototype.displayAsString = function () {
        console.log(this);
    };
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this._salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        _super.prototype.displayAsString.call(this);
    };
    return Employee;
}(Person));
var emp = new Employee("Ashlee", 23, 3000);
emp.display();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2xhc3Nlcy9wcm9kdWN0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUlJLGdCQUFzQixJQUFZLEVBQUUsR0FBVztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBR1MsZ0NBQWUsR0FBekI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFFRDtJQUF1Qiw0QkFBTTtJQUd6QixrQkFBbUIsSUFBWSxFQUFFLEdBQVcsRUFBRSxNQUFjO1FBQTVELFlBQ0ksa0JBQU0sSUFBSSxFQUFFLEdBQUcsQ0FBQyxTQUVuQjtRQURHLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztJQUMxQixDQUFDO0lBR00sMEJBQU8sR0FBZDtRQUNJLGlCQUFNLGVBQWUsV0FBRSxDQUFDO0lBQzVCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVpELENBQXVCLE1BQU0sR0FZNUI7QUFFRCxJQUFJLEdBQUcsR0FBYSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JELEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBlcnNvbiB7XG4gICAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIF9hZ2U6IG51bWJlcjtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9hZ2UgPSBhZ2U7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZGlzcGxheUFzU3RyaW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG59XG5cbmNsYXNzIEVtcGxveWVlIGV4dGVuZHMgUGVyc29uIHtcblxuICAgIHByaXZhdGUgX3NhbGFyeTogbnVtYmVyO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyLCBzYWxhcnk6IG51bWJlcikge1xuICAgICAgICBzdXBlcihuYW1lLCBhZ2UpO1xuICAgICAgICB0aGlzLl9zYWxhcnkgPSBzYWxhcnk7XG4gICAgfVxuXG4gICAgLy/mlrnms5Xpg73mmK/mlL7lnKjljp/lnovlr7nosaHkuK0gLi4uXG4gICAgcHVibGljIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3BsYXlBc1N0cmluZygpO1xuICAgIH1cbn1cblxubGV0IGVtcDogRW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUoXCJBc2hsZWVcIiwgMjMsIDMwMDApO1xuZW1wLmRpc3BsYXkoKTtcblxuIl19