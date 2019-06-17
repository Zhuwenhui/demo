"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//创建客户端
exports.client = function (request) {
    var response;
    return new Promise(function (resolve) {
        fetch(request)
            .then(function (res) {
            response = res;
            return res.json();
        })
            .then(function (body) {
            response.parsedBody = body;
            resolve(response);
        });
    });
};
