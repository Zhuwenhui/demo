enum Sizes {
    Small,
    Medium,
    Larger
}

//在创建一个枚举变量的时候可以初始化一个值
let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
    selected = size;
}

updateSize(Sizes.Larger);

