define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.modalWindowConfirmationHidden = exports.modalWindowConfirmationVisible = exports.modalWindowAuthorizationHidden = exports.modalWindowAuthorizationVisible = exports.modalWindowHidden = exports.modalWindowVisible = void 0;
    const modalWindow = document.getElementById("modal-1");
    const modalWindowAuthorization = document.getElementById("modal-2");
    const modalWindowConfirmation = document.getElementById("modal-3");
    function modalWindowVisible() {
        if (modalWindow) {
            modalWindow.style.visibility = "visible";
            modalWindow.style.opacity = "1";
        }
    }
    exports.modalWindowVisible = modalWindowVisible;
    function modalWindowHidden() {
        if (modalWindow) {
            modalWindow.style.visibility = "hidden";
            modalWindow.style.opacity = "0";
        }
    }
    exports.modalWindowHidden = modalWindowHidden;
    function modalWindowAuthorizationVisible() {
        if (modalWindowAuthorization) {
            modalWindowAuthorization.style.visibility = "visible";
            modalWindowAuthorization.style.opacity = "1";
        }
    }
    exports.modalWindowAuthorizationVisible = modalWindowAuthorizationVisible;
    function modalWindowAuthorizationHidden(event) {
        event.preventDefault();
        if (modalWindowAuthorization) {
            modalWindowAuthorization.style.visibility = "hidden";
            modalWindowAuthorization.style.opacity = "0";
        }
    }
    exports.modalWindowAuthorizationHidden = modalWindowAuthorizationHidden;
    function modalWindowConfirmationVisible(event) {
        event.preventDefault();
        if (modalWindowConfirmation) {
            modalWindowConfirmation.style.visibility = "visible";
            modalWindowConfirmation.style.opacity = "1";
        }
    }
    exports.modalWindowConfirmationVisible = modalWindowConfirmationVisible;
    function modalWindowConfirmationHidden(event) {
        event.preventDefault();
        if (modalWindowConfirmation) {
            modalWindowConfirmation.style.visibility = "hidden";
            modalWindowConfirmation.style.opacity = "0";
        }
    }
    exports.modalWindowConfirmationHidden = modalWindowConfirmationHidden;
});
