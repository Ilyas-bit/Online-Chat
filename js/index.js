var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "typescript-cookie", "../ts/request", "../ts/modalWindow", "../ts/renderCreate", "../ts/message"], function (require, exports, typescript_cookie_1, request_1, modalWindow_1, renderCreate_1, message_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.messagesList = void 0;
    const settingsBtn = document.getElementById("set");
    const modalWindowClose = document.querySelector(".modal__btn");
    const form = document.getElementById("form");
    const chat = document.querySelector(".chat__body");
    exports.messagesList = [
        { text: "сходи погуляй", status: "for-me", time: "14:35" },
        { text: "надень шапку", status: "for-me", time: "14:36" },
        { text: "привет", status: "from-me", sending: "sent", time: "14:36" },
        { text: "да, конечно", status: "from-me", sending: "unsent", time: "14:37" },
    ];
    function requestMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            const requestMessages = yield (0, request_1.getMessageHistory)();
            // console.log(requestMessages);
            (0, renderCreate_1.renderMessages)(requestMessages);
        });
    }
    requestMessages();
    // renderMessages(getMessageHistory());
    // modalWindowAuthorizationVisible();
    const modalWindowAuthorization = document.getElementById("modal-2");
    const buttonAuthorization = document.getElementById("btn-authorization-submit-one");
    const buttonAuthorizationToConfirmation = document.getElementById("btn-authorization-submit-2");
    const buttonLogInChat = document.getElementById("log-in-chat");
    function postRequest(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const inputEmail = document.querySelector("#input-email-2");
            if (inputEmail !== null && inputEmail instanceof HTMLInputElement) {
                const inputValueEmail = inputEmail.value;
                yield (0, request_1.getRequest)(inputValueEmail);
            }
        });
    }
    if (buttonAuthorization)
        buttonAuthorization.addEventListener("click", postRequest);
    if (buttonAuthorizationToConfirmation)
        buttonAuthorizationToConfirmation.addEventListener("click", () => {
            const inputEmail = document.querySelector("#input-email-2");
            (0, modalWindow_1.modalWindowAuthorizationHidden)(event);
            (0, modalWindow_1.modalWindowConfirmationVisible)(event);
        });
    if (buttonLogInChat) {
        buttonLogInChat.addEventListener("click", () => {
            const inputToken = document.querySelector("#input-token");
            if (inputToken != null && inputToken instanceof HTMLInputElement) {
                (0, typescript_cookie_1.setCookie)("token", `${inputToken.value}`);
                (0, request_1.getRequestPost)(inputToken.value, event);
            }
        });
    }
    // renderMessages(messagesList);
    if (settingsBtn)
        settingsBtn.addEventListener("click", request_1.getRequestGET);
    if (modalWindowClose)
        modalWindowClose.addEventListener("click", modalWindow_1.modalWindowHidden);
    if (form)
        form.addEventListener("submit", message_1.sendMassage);
});
