const http = async (request: RequestInfo): Promise<any> => {
    return new Promise(resolve => {
        fetch(request)
            .then(response => response.json())
            .then(body => {
                resolve(body);
            });
    });
};



let resource = async function () {
    // example consuming code 
    const data = await http("https://jsonplaceholder.typicode.com/todos");
    console.log(data);
}


resource();
