export interface IHttpResponse<T> extends Response {
    parsedBody?: T;
}


//创建客户端
export const client = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
    let response: IHttpResponse<T>;
    return new Promise(resolve => {
        fetch(request)
            .then(res => {
                response = res;
                return res.json();
            })
            .then(body => {
                response.parsedBody = body;
                resolve(response);
            });
    });
};

// example consuming code 
export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


