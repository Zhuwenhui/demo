"use strict";
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Larger"] = 2] = "Larger";
})(Sizes || (Sizes = {}));
var selected = Sizes.Small;
function updateSize(size) {
    selected = size;
}
updateSize(Sizes.Larger);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8wMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSyxLQUlKO0FBSkQsV0FBSyxLQUFLO0lBQ04sbUNBQUssQ0FBQTtJQUNMLHFDQUFNLENBQUE7SUFDTixxQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUpJLEtBQUssS0FBTCxLQUFLLFFBSVQ7QUFHRCxJQUFJLFFBQVEsR0FBVSxLQUFLLENBQUMsS0FBSyxDQUFDO0FBRWxDLFNBQVMsVUFBVSxDQUFDLElBQVc7SUFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNwQixDQUFDO0FBRUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImVudW0gU2l6ZXMge1xuICAgIFNtYWxsLFxuICAgIE1lZGl1bSxcbiAgICBMYXJnZXJcbn1cblxuLy/lnKjliJvlu7rkuIDkuKrmnprkuL7lj5jph4/nmoTml7blgJnlj6/ku6XliJ3lp4vljJbkuIDkuKrlgLxcbmxldCBzZWxlY3RlZDogU2l6ZXMgPSBTaXplcy5TbWFsbDtcblxuZnVuY3Rpb24gdXBkYXRlU2l6ZShzaXplOiBTaXplcyk6IHZvaWQge1xuICAgIHNlbGVjdGVkID0gc2l6ZTtcbn1cblxudXBkYXRlU2l6ZShTaXplcy5MYXJnZXIpO1xuXG4iXX0=