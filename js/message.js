define(["require", "exports", "../ts/index", "date-fns", "./renderCreate"], function (require, exports, index_1, date_fns_1, renderCreate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sendMassage = exports.pushToMessagesList = void 0;
    const formField = document.getElementById("formInput");
    function pushToMessagesList(formValue) {
        const timeValue = (0, date_fns_1.format)(new Date(), "H:mm");
        index_1.messagesList.push({
            text: formValue,
            status: "from-me",
            sending: "unsent",
            time: timeValue,
        });
    }
    exports.pushToMessagesList = pushToMessagesList;
    function sendMassage(e) {
        e.preventDefault();
        const formValue = formField.value;
        pushToMessagesList(formValue);
        (0, renderCreate_1.clearChatDom)();
        (0, renderCreate_1.renderMessages)();
        formField.value = "";
        (0, renderCreate_1.scrollDown)();
    }
    exports.sendMassage = sendMassage;
});
