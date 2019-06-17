"use strict";
var Pizzas = (function () {
    function Pizzas(name) {
        this.toppings = [];
        this.name = name;
    }
    Pizzas.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return Pizzas;
}());
var pisz = new Pizzas("你好");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jbGFzc2VzLzAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUdJLGdCQUFZLElBQVk7UUFEeEIsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUdELDJCQUFVLEdBQVYsVUFBVyxPQUFjO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBpenphcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRvcHBpbmdzOkFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICAvL+a3u+WKoOS4gOS4quaWueazlVxuICAgIGFkZFRvcHBpbmcodG9wcGluZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLnRvcHBpbmdzLnB1c2godG9wcGluZyk7XG4gICAgfVxufVxuXG52YXIgcGlzeiA9IG5ldyBQaXp6YXMoXCLkvaDlpb1cIik7XG4iXX0=