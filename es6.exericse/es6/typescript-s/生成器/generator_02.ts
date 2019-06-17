const clientHttp = <T>(request: RequestInfo): Promise<T> => {
    return new Promise((resolve) => {
        fetch(request)
            .then(response => response.json())
            .then(body => {
                resolve(body);
            });
    });
};

// example consuming code 
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

//符合某种数据类型
(async function () {
    const data = await clientHttp<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(data);
})();


