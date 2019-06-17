export function clientRequest(name:string){
    console.log(name);
}

export function clientResponse(response:string){
    console.log(response);
}

//默认导出函数
export default function (){
    console.log("默认导出");
}