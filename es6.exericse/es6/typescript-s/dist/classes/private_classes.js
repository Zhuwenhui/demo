"use strict";
var Student = (function () {
    function Student(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var student = new Student("Jack", 30);
console.log(student.name);
var AppContext = (function () {
    function AppContext() {
    }
    AppContext.prototype.AppContext = function () { };
    ;
    AppContext.getInstance = function () {
        return AppContext._instance;
    };
    AppContext.prototype.getData = function () {
        return "test data";
    };
    AppContext._instance = new AppContext();
    return AppContext;
}());
var data = AppContext.getInstance().getData();
console.log(data);
function reverse(something) {
    if (typeof something === 'string') {
        return something.split('').reverse().join('');
    }
    return something.slice().reverse();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZV9jbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2xhc3Nlcy9wcml2YXRlX2NsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBS0ksaUJBQW1CLElBQVksRUFBRSxHQUFXO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxzQkFBVyx5QkFBSTthQU1mO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFSRCxVQUFnQixDQUFTO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBUUwsY0FBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUFFRCxJQUFJLE9BQU8sR0FBWSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHMUI7SUFBQTtJQWNBLENBQUM7SUFWVywrQkFBVSxHQUFsQixjQUF1QixDQUFDO0lBQUEsQ0FBQztJQUdYLHNCQUFXLEdBQXpCO1FBQ0ksT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQVhjLG9CQUFTLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQVk1RCxpQkFBQztDQUFBLEFBZEQsSUFjQztBQUVELElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBSWxCLFNBQVMsT0FBTyxDQUFJLFNBQXVCO0lBQ3ZDLElBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFDO1FBQzdCLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDakQ7SUFDRCxPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3R1ZGVudCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2FnZTogbnVtYmVyO1xuXG4gICAgLy/mnoTpgKDlh73mlbBcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fYWdlID0gYWdlO1xuICAgIH1cblxuXG4gICAgLy/orr7nva7lkI3np7BcbiAgICBwdWJsaWMgc2V0IG5hbWUodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2O1xuICAgIH1cblxuXG4gICAgLy/ov5Tlm57lkI3np7BcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG59XG5cbmxldCBzdHVkZW50OiBTdHVkZW50ID0gbmV3IFN0dWRlbnQoXCJKYWNrXCIsIDMwKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQubmFtZSk7Ly/pgJrov4fmnoTpgKDlmajmnaXorr/pl65cblxuXG5jbGFzcyBBcHBDb250ZXh0IHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQXBwQ29udGV4dCA9IG5ldyBBcHBDb250ZXh0KCk7XG4gICAgLy/np4HmnInljJZcbiAgICBwcml2YXRlIEFwcENvbnRleHQoKSB7IH07XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwQ29udGV4dCB7XG4gICAgICAgIHJldHVybiBBcHBDb250ZXh0Ll9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBnZXREYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiBcInRlc3QgZGF0YVwiO1xuICAgIH1cbn1cblxubGV0IGRhdGEgPSBBcHBDb250ZXh0LmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpO1xuY29uc29sZS5sb2coZGF0YSk7XG5cblxuXG5mdW5jdGlvbiByZXZlcnNlPFQ+KHNvbWV0aGluZzogc3RyaW5nIHwgVFtdKTogc3RyaW5nIHwgVFtdIHtcbiAgICBpZih0eXBlb2Ygc29tZXRoaW5nID09PSAnc3RyaW5nJyl7XG4gICAgICAgIHJldHVybiBzb21ldGhpbmcuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvbWV0aGluZy5zbGljZSgpLnJldmVyc2UoKTtcbn1cbiJdfQ==