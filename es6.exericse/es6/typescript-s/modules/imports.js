"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var samples_1 = require("./samples");
var request_1 = __importDefault(require("./contains/request"));
samples_1.hello("a");
samples_1.helloES("a");
request_1.default();
