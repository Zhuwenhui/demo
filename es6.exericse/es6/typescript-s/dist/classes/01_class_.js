"use strict";
var Pizzas = (function () {
    function Pizzas(name, radius, modules, request) {
        this.name = name;
        this.radius = radius;
        this.modules = modules;
        this.toppings = [];
        this.name = name;
        this.radius = radius;
        this.modules = modules;
        this.request = request;
    }
    Pizzas.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    Object.defineProperty(Pizzas.prototype, "avaiableMoudule", {
        set: function (modules) {
            this.modules = modules;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizzas.prototype, "avaiableModule", {
        get: function () {
            return this.modules;
        },
        enumerable: true,
        configurable: true
    });
    return Pizzas;
}());
var pisz = new Pizzas("你好", 100, "cmmonjs", { x: '1', n: 100 });
pisz.toppings = ['jully'];
console.log(pisz.name);
console.log(pisz.radius);
pisz.avaiableMoudule = '100';
console.log(pisz.avaiableMoudule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDFfY2xhc3NfLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2xhc3Nlcy8wMV9jbGFzc18udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBTUksZ0JBQXFCLElBQVksRUFBVyxNQUFjLEVBQy9DLE9BQWUsRUFBRSxPQUFpQztRQUR4QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMvQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBTjFCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBT3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFHRCwyQkFBVSxHQUFWLFVBQVcsT0FBZTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQUksbUNBQWU7YUFBbkIsVUFBb0IsT0FBZTtZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGtDQUFjO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0wsYUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBR3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBRTdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGl6emFzIHtcbiAgICB0b3BwaW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIC8v5Yib5bu65Lik5Liq5Y+v6K+75bGe5oCnICDkuI3lhpnpu5jorqTlsLHmmK9wcml2YXRlICDkvYbmmK/mj5DliY3lvpflo7DmmI7nsbvlnotcbiAgICBwcml2YXRlIHJlcXVlc3Q6IHsgeDogc3RyaW5nLCBuOiBudW1iZXIgfTtcblxuICAgIC8v5p6E6YCg5Ye95pWwXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgbmFtZTogc3RyaW5nLCByZWFkb25seSByYWRpdXM6IG51bWJlciwgXG4gICAgICAgIHB1YmxpYyBtb2R1bGVzOiBzdHJpbmcsIHJlcXVlc3Q6IHsgeDogc3RyaW5nLCBuOiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICB9XG5cbiAgICAvL+a3u+WKoOS4gOS4quaWueazlVxuICAgIGFkZFRvcHBpbmcodG9wcGluZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9wcGluZ3MucHVzaCh0b3BwaW5nKTtcbiAgICB9XG5cbiAgICBzZXQgYXZhaWFibGVNb3VkdWxlKG1vZHVsZXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzO1xuICAgIH1cblxuICAgIC8v6L+U5Zue5bGe5oCnXG4gICAgZ2V0IGF2YWlhYmxlTW9kdWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVzO1xuICAgIH1cbn1cblxudmFyIHBpc3ogPSBuZXcgUGl6emFzKFwi5L2g5aW9XCIsIDEwMCwgXCJjbW1vbmpzXCIsIHsgeDogJzEnLCBuOiAxMDAgfSk7XG5waXN6LnRvcHBpbmdzID0gWydqdWxseSddO1xuXG5jb25zb2xlLmxvZyhwaXN6Lm5hbWUpO1xuY29uc29sZS5sb2cocGlzei5yYWRpdXMpO1xuXG4vL+inpuWPkXNldOaWueazlVxucGlzei5hdmFpYWJsZU1vdWR1bGUgPSAnMTAwJztcbi8v6Kem5Y+RZ2V05pa55rOVXG5jb25zb2xlLmxvZyhwaXN6LmF2YWlhYmxlTW91ZHVsZSk7XG5cblxuXG5cbiJdfQ==