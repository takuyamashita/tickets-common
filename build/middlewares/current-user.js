"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var currentUser = function (request, response, next) {
    var _a;
    if (!((_a = request.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        return next();
    }
    try {
        var payload = jsonwebtoken_1.default.verify(request.session.jwt, process.env.JWT_KEY);
        request.currentUser = payload;
    }
    catch (error) { }
    next();
};
exports.currentUser = currentUser;