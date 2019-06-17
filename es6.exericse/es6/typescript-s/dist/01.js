"use strict";
console.log("hello");
console.log("👏");
console.log("你好");
console.log("处理结果！");
var selectedTopping = "👋";
function selectTopping(topping) {
    selectedTopping = topping;
}
selectTopping("🐷");
console.log(selectedTopping);
function orderError(error) {
    throw new Error(error);
}
var coupon = null;
var pizzaSize = 'small';
function selectSize(size) {
    pizzaSize = size;
}
selectSize('small');
var sumOrder;
sumOrder = function (price, quantity) {
    return price * quantity;
};
sumOrder(100, 1);
var selectPizz;
var selectPizs;
selectPizz = function (price, quantity) {
    if (quantity === void 0) { quantity = 100; }
    if (quantity) {
        price * quantity;
    }
    return price;
};
selectPizs = function (price, quantity) {
    if (quantity === void 0) { quantity = 100; }
    return price * quantity;
};
selectPizz(1);
console.log(selectPizs(1));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8wMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUlyQixJQUFJLGVBQWUsR0FBVyxJQUFJLENBQUM7QUFFbkMsU0FBUyxhQUFhLENBQUMsT0FBZTtJQUNsQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzlCLENBQUM7QUFFRCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU3QixTQUFTLFVBQVUsQ0FBQyxLQUFhO0lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUlELElBQUksTUFBTSxHQUFrQixJQUFJLENBQUM7QUFFakMsSUFBSSxTQUFTLEdBQW9CLE9BQU8sQ0FBQztBQUV6QyxTQUFTLFVBQVUsQ0FBQyxJQUFrQztJQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHcEIsSUFBSSxRQUFrQixDQUFDO0FBR3ZCLFFBQVEsR0FBRyxVQUFDLEtBQWEsRUFBRSxRQUFnQjtJQUN2QyxPQUFPLEtBQUssR0FBRyxRQUFRLENBQUM7QUFDNUIsQ0FBQyxDQUFBO0FBQ0QsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUlqQixJQUFJLFVBQXlELENBQUM7QUFDOUQsSUFBSSxVQUF5RCxDQUFDO0FBQzlELFVBQVUsR0FBRyxVQUFDLEtBQUssRUFBRSxRQUFjO0lBQWQseUJBQUEsRUFBQSxjQUFjO0lBQy9CLElBQUksUUFBUSxFQUFFO1FBQ1YsS0FBSyxHQUFHLFFBQVEsQ0FBQTtLQUNuQjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUlGLFVBQVUsR0FBRyxVQUFDLEtBQUssRUFBRSxRQUFjO0lBQWQseUJBQUEsRUFBQSxjQUFjO0lBQy9CLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUM1QixDQUFDLENBQUM7QUFHRixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbmNvbnNvbGUubG9nKFwi8J+Rj1wiKVxuY29uc29sZS5sb2coXCLkvaDlpb1cIik7XG5jb25zb2xlLmxvZyhcIuWkhOeQhue7k+aenO+8gVwiKTtcblxuLy90c2MgLS13YXRjaCAg55uR5ZCs5paH5Lu25piv5ZCm5pS55Y+YXG5cbmxldCBzZWxlY3RlZFRvcHBpbmc6IHN0cmluZyA9IFwi8J+Ri1wiO1xuXG5mdW5jdGlvbiBzZWxlY3RUb3BwaW5nKHRvcHBpbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIHNlbGVjdGVkVG9wcGluZyA9IHRvcHBpbmc7XG59XG5cbnNlbGVjdFRvcHBpbmcoXCLwn5C3XCIpO1xuY29uc29sZS5sb2coc2VsZWN0ZWRUb3BwaW5nKTtcblxuZnVuY3Rpb24gb3JkZXJFcnJvcihlcnJvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbn1cbi8vIG9yZGVyRXJyb3IoXCLliJvlu7rkuIDkuKrplJnor69cIik7XG5cbi8v5YiG5Li65LiA5Liq5pWw5o2u57G75Z6LXG5sZXQgY291cG9uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxubGV0IHBpenphU2l6ZTogc3RyaW5nIHwgbnVtYmVyID0gJ3NtYWxsJztcbi8vIOWPguaVsOiMg+WbtOmZkOWumlxuZnVuY3Rpb24gc2VsZWN0U2l6ZShzaXplOiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnKTogdm9pZCB7XG4gICAgcGl6emFTaXplID0gc2l6ZTtcbn1cblxuc2VsZWN0U2l6ZSgnc21hbGwnKTtcblxuLy/lrprkuYnkuIDkuKrlh73mlbDnsbvlnotcbmxldCBzdW1PcmRlcjogRnVuY3Rpb247XG5cbi8v54S25ZCO5aOw5piO5Ye95pWw5L2TXG5zdW1PcmRlciA9IChwcmljZTogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gcHJpY2UgKiBxdWFudGl0eTtcbn1cbnN1bU9yZGVyKDEwMCwgMSk7XG5cblxuLy/lo7DmmI7kuIDkuKrlh73mlbDvvIjlj4LmlbDvvInnsbvlnosg6L+U5Zue57G75Z6LID975Y+v5pyJ5Y+v5pegfVxubGV0IHNlbGVjdFBpeno6IChwcmlhY2U6IG51bWJlciwgcXVhbnRpdHk/OiBudW1iZXIpID0+IG51bWJlcjtcbmxldCBzZWxlY3RQaXpzOiAocHJpYWNlOiBudW1iZXIsIHF1YW50aXR5PzogbnVtYmVyKSA9PiBudW1iZXI7XG5zZWxlY3RQaXp6ID0gKHByaWNlLCBxdWFudGl0eSA9IDEwMCkgPT4ge1xuICAgIGlmIChxdWFudGl0eSkge1xuICAgICAgICBwcmljZSAqIHF1YW50aXR5XG4gICAgfVxuICAgIHJldHVybiBwcmljZTtcbn07XG5cblxuLy/omb3nhLblrprkuYnlj6/mnInlj6/ml6Ag5L2G5piv5oiR5Lus5Y+v5Lul5a6a5LmJ5LiA5Liq6buY6K6k5YC8XG5zZWxlY3RQaXpzID0gKHByaWNlLCBxdWFudGl0eSA9IDEwMCkgPT4ge1xuICAgIHJldHVybiBwcmljZSAqIHF1YW50aXR5O1xufTtcblxuXG5zZWxlY3RQaXp6KDEpO1xuY29uc29sZS5sb2coc2VsZWN0UGl6cygxKSk7XG4iXX0=