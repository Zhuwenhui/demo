import { client, ITodo } from "./generator_03";

(async function () {
    const response = await client<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
    );
    console.log("👌" + response);
})();

