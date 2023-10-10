var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getMessageHistory = exports.getRequestGET = exports.getRequestPost = exports.getRequest = void 0;
    function getRequest(inputEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                email: inputEmail,
            };
            let response = yield fetch("https://edu.strada.one/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(user),
            });
            let valueRequest = yield response.json();
            console.log(valueRequest);
        });
    }
    exports.getRequest = getRequest;
    function getRequestPost(token, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const user = { name: "Ilyas" };
            let response = yield fetch("https://edu.strada.one/api/user", {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json;charset=utf-8",
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "User-Agent": "Your User Agent String",
                },
                body: JSON.stringify(user),
            });
            let valueRequest = yield response.json();
            console.log(valueRequest);
        });
    }
    exports.getRequestPost = getRequestPost;
    function getRequestGET() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFhendzeGVkYzIxMDEyMDAzQGdtYWlsLmNvbSIsImlhdCI6MTY5NjY3Mzc4MiwiZXhwIjoxNzAwMjcwMTgyfQ.8ENNQw14JuhOy3SGibIuRDipDWjA2F_RDI8XOK5JpOE";
            let response = yield fetch("https://edu.strada.one/api/user/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "User-Agent": "Your User Agent String",
                },
            });
            let valueRequest = yield response.json();
            console.log(valueRequest);
        });
    }
    exports.getRequestGET = getRequestGET;
    function getMessageHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFhendzeGVkYzIxMDEyMDAzQGdtYWlsLmNvbSIsImlhdCI6MTY5NjY3Mzc4MiwiZXhwIjoxNzAwMjcwMTgyfQ.8ENNQw14JuhOy3SGibIuRDipDWjA2F_RDI8XOK5JpOE";
            console.log(token);
            let response = yield fetch("https://edu.strada.one/api/messages/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "User-Agent": "Your User Agent String",
                },
            });
            const valueRequest = yield response.json();
            // console.log(valueRequest);
            return valueRequest;
        });
    }
    exports.getMessageHistory = getMessageHistory;
});
