define(["require", "exports", "date-fns"], function (require, exports, date_fns_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scrollDown = exports.clearChatDom = exports.renderMessages = exports.createElementTemplate = void 0;
    function createElementTemplate(textValue, name, time) {
        // console.log(name);
        const templateContent = message.content.cloneNode(true);
        const messageText = templateContent.querySelector(".message-text");
        messageText.textContent = textValue;
        const timeText = templateContent.getElementById("time");
        const timeValue = (0, date_fns_1.format)(new Date(time), 'H:mm');
        timeText.textContent = timeValue;
        // if (status === "for-me") {
        const messageForMe = templateContent.querySelector(".chat__message-from-me_unsent");
        messageForMe.className = "chat__message-for-me";
        const messageImg = templateContent.querySelector(".sent-img");
        messageImg.remove();
        messageText.textContent = name + ": " + messageText.textContent;
        // }
        // if (status === "from-me") {
        //   messageText.textContent = "Я: " + messageText.textContent;
        //   if (sending === "sent") {
        //     const messageFromMe = templateContent.querySelector(".sent-img");
        //     messageFromMe.src = "/sent.721dfba6.png";
        //   }
        // }
        return templateContent;
    }
    exports.createElementTemplate = createElementTemplate;
    const chat = document.querySelector(".chat__body");
    function renderMessages(messagesList) {
        // console.log(messagesList);
        messagesList.messages.forEach((itemMessage) => {
            chat.append(createElementTemplate(itemMessage.text, itemMessage.user.name, itemMessage.updatedAt));
        });
        scrollDown();
    }
    exports.renderMessages = renderMessages;
    function clearChatDom() {
        chat.replaceChildren();
    }
    exports.clearChatDom = clearChatDom;
    function scrollDown() {
        const block = document.querySelector(".chat__body-shell");
        block.scrollTop = block.scrollHeight;
    }
    exports.scrollDown = scrollDown;
});
// {
//   "messages": [
//       {
//           "_id": "65230d5448a9340011314f47",
//           "text": "Привет всем страдальцам с ФР5! Вот и вы добрались до собственного чата 👍 👍 👍",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Dmitry S"
//           },
//           "createdAt": "2023-10-08T20:13:08.046Z",
//           "updatedAt": "2023-10-08T20:13:08.046Z",
//           "__v": 0
//       },
//       {
//           "_id": "652266ccf912510011aedd77",
//           "text": "Всем, доброго утра!",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Peter"
//           },
//           "createdAt": "2023-10-08T08:22:36.245Z",
//           "updatedAt": "2023-10-08T08:22:36.245Z",
//           "__v": 0
//       },
//       {
//           "_id": "652171787b607000112a6323",
//           "text": "соединение не потеряно - это радует))",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Dmitry S"
//           },
//           "createdAt": "2023-10-07T14:55:52.030Z",
//           "updatedAt": "2023-10-07T14:55:52.030Z",
//           "__v": 0
//       },
//       {
//           "_id": "6521715c7b607000112a6322",
//           "text": "чат 3 часа простоял без движения",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Dmitry S"
//           },
//           "createdAt": "2023-10-07T14:55:24.965Z",
//           "updatedAt": "2023-10-07T14:55:24.965Z",
//           "__v": 0
//       },
//       {
//           "_id": "6521480b65c01a0011352dca",
//           "text": "Ещё проверка чата",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Dmitry S"
//           },
//           "createdAt": "2023-10-07T11:59:07.298Z",
//           "updatedAt": "2023-10-07T11:59:07.298Z",
//           "__v": 0
//       },
//       {
//           "_id": "651e9f31b29f66001143ccaf",
//           "text": "Проверка работы чата",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Dmitry S"
//           },
//           "createdAt": "2023-10-05T11:34:09.222Z",
//           "updatedAt": "2023-10-05T11:34:09.222Z",
//           "__v": 0
//       },
//       {
//           "_id": "651e9f28b29f66001143ccae",
//           "text": "Как дела?",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Dmitry S"
//           },
//           "createdAt": "2023-10-05T11:34:00.956Z",
//           "updatedAt": "2023-10-05T11:34:00.956Z",
//           "__v": 0
//       },
//       {
//           "_id": "651e9f1db29f66001143ccad",
//           "text": "Всем привет",
//           "user": {
//               "email": "dimapepsi@mail.ru",
//               "name": "Dmitry S"
//           },
//           "createdAt": "2023-10-05T11:33:49.022Z",
//           "updatedAt": "2023-10-05T11:33:49.022Z",
//           "__v": 0
//       },
//       {
//           "_id": "651ddbb200cf0f0011c263c7",
//           "text": "🤪🤪",
//           "user": {
//               "email": "khlopovartem4321@gmail.com",
//               "name": "khlopovartem4321@gmail.com"
//           },
//           "createdAt": "2023-10-04T21:40:02.873Z",
//           "updatedAt": "2023-10-04T21:40:02.873Z",
//           "__v": 0
//       },
//       {
//           "_id": "651ddbaf00cf0f0011c263c6",
//           "text": "asd",
//           "user": {
//               "email": "khlopovartem4321@gmail.com",
//               "name": "khlopovartem4321@gmail.com"
//           },
//           "createdAt": "2023-10-04T21:39:59.647Z",
//           "updatedAt": "2023-10-04T21:39:59.647Z",
//           "__v": 0
//       },
//       {
//           "_id": "651b25dc00cf0f0011c263c4",
//           "text": ".",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "lord"
//           },
//           "createdAt": "2023-10-02T20:19:40.904Z",
//           "updatedAt": "2023-10-02T20:19:40.904Z",
//           "__v": 0
//       },
//       {
//           "_id": "651b25bd00cf0f0011c263c3",
//           "text": "))",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "lord"
//           },
//           "createdAt": "2023-10-02T20:19:09.280Z",
//           "updatedAt": "2023-10-02T20:19:09.280Z",
//           "__v": 0
//       },
//       {
//           "_id": "651b257800cf0f0011c263c2",
//           "text": ".",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-10-02T20:18:00.164Z",
//           "updatedAt": "2023-10-02T20:18:00.164Z",
//           "__v": 0
//       },
//       {
//           "_id": "6518a3789102390011d53dc0",
//           "text": "(*_*)",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "lord"
//           },
//           "createdAt": "2023-09-30T22:38:48.695Z",
//           "updatedAt": "2023-09-30T22:38:48.695Z",
//           "__v": 0
//       },
//       {
//           "_id": "6517f18c9102390011d53dbf",
//           "text": "1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-30T09:59:40.168Z",
//           "updatedAt": "2023-09-30T09:59:40.168Z",
//           "__v": 0
//       },
//       {
//           "_id": "6517eda59102390011d53dbe",
//           "text": "1.1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-30T09:43:01.228Z",
//           "updatedAt": "2023-09-30T09:43:01.228Z",
//           "__v": 0
//       },
//       {
//           "_id": "6517ed999102390011d53dbd",
//           "text": "w",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-30T09:42:49.999Z",
//           "updatedAt": "2023-09-30T09:42:49.999Z",
//           "__v": 0
//       },
//       {
//           "_id": "6517ed949102390011d53dbc",
//           "text": "(*_*)",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-30T09:42:44.647Z",
//           "updatedAt": "2023-09-30T09:42:44.647Z",
//           "__v": 0
//       },
//       {
//           "_id": "6517ed4d9102390011d53dbb",
//           "text": ".",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-30T09:41:33.903Z",
//           "updatedAt": "2023-09-30T09:41:33.903Z",
//           "__v": 0
//       },
//       {
//           "_id": "6517ed469102390011d53dba",
//           "text": "2",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-30T09:41:26.979Z",
//           "updatedAt": "2023-09-30T09:41:26.979Z",
//           "__v": 0
//       },
//       {
//           "_id": "6517ed429102390011d53db9",
//           "text": "1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-30T09:41:22.703Z",
//           "updatedAt": "2023-09-30T09:41:22.703Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f39f9102390011d53db7",
//           "text": "1",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:43:59.761Z",
//           "updatedAt": "2023-09-28T21:43:59.761Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f3639102390011d53db6",
//           "text": "1",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:42:59.721Z",
//           "updatedAt": "2023-09-28T21:42:59.721Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f31e9102390011d53db5",
//           "text": "1",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:41:50.590Z",
//           "updatedAt": "2023-09-28T21:41:50.590Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2f49102390011d53db4",
//           "text": "q",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:41:08.109Z",
//           "updatedAt": "2023-09-28T21:41:08.109Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2c89102390011d53db3",
//           "text": "q",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:40:24.998Z",
//           "updatedAt": "2023-09-28T21:40:24.998Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2aa9102390011d53db2",
//           "text": "e",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:39:54.983Z",
//           "updatedAt": "2023-09-28T21:39:54.983Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2a29102390011d53db1",
//           "text": "e",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:39:46.970Z",
//           "updatedAt": "2023-09-28T21:39:46.970Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2a29102390011d53db0",
//           "text": "w",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:39:46.258Z",
//           "updatedAt": "2023-09-28T21:39:46.258Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2969102390011d53daf",
//           "text": "2",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:39:34.505Z",
//           "updatedAt": "2023-09-28T21:39:34.505Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2959102390011d53dae",
//           "text": "2",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:39:33.542Z",
//           "updatedAt": "2023-09-28T21:39:33.542Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f2939102390011d53dad",
//           "text": "1",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:39:31.889Z",
//           "updatedAt": "2023-09-28T21:39:31.889Z",
//           "__v": 0
//       },
//       {
//           "_id": "6515f1539102390011d53dac",
//           "text": "q",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "nikita"
//           },
//           "createdAt": "2023-09-28T21:34:11.876Z",
//           "updatedAt": "2023-09-28T21:34:11.876Z",
//           "__v": 0
//       },
//       {
//           "_id": "651543209102390011d53dab",
//           "text": "Еу",
//           "user": {
//               "email": "buterfly0013@mail.ru",
//               "name": "buterfly0013@mail.ru"
//           },
//           "createdAt": "2023-09-28T09:10:56.918Z",
//           "updatedAt": "2023-09-28T09:10:56.918Z",
//           "__v": 0
//       },
//       {
//           "_id": "651419c39102390011d53da9",
//           "text": "(*_*)",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-27T12:02:11.869Z",
//           "updatedAt": "2023-09-27T12:02:11.869Z",
//           "__v": 0
//       },
//       {
//           "_id": "651419b89102390011d53da8",
//           "text": ".",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "elo"
//           },
//           "createdAt": "2023-09-27T12:02:00.380Z",
//           "updatedAt": "2023-09-27T12:02:00.380Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf5a72b340011b36fd9",
//           "text": "фы",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:45.835Z",
//           "updatedAt": "2023-09-25T22:38:45.835Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf5a72b340011b36fd8",
//           "text": "ыв",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:45.720Z",
//           "updatedAt": "2023-09-25T22:38:45.720Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf5a72b340011b36fd7",
//           "text": "ф",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:45.636Z",
//           "updatedAt": "2023-09-25T22:38:45.636Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf5a72b340011b36fd6",
//           "text": "в",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:45.512Z",
//           "updatedAt": "2023-09-25T22:38:45.512Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf5a72b340011b36fd5",
//           "text": "ф",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:45.438Z",
//           "updatedAt": "2023-09-25T22:38:45.438Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf5a72b340011b36fd4",
//           "text": "вфыв",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:45.330Z",
//           "updatedAt": "2023-09-25T22:38:45.330Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf5a72b340011b36fd3",
//           "text": "фы",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:45.135Z",
//           "updatedAt": "2023-09-25T22:38:45.135Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf4a72b340011b36fd2",
//           "text": "фыв",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:44.953Z",
//           "updatedAt": "2023-09-25T22:38:44.953Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf4a72b340011b36fd1",
//           "text": "фывфывфвфыв",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:44.818Z",
//           "updatedAt": "2023-09-25T22:38:44.818Z",
//           "__v": 0
//       },
//       {
//           "_id": "65120bf0a72b340011b36fd0",
//           "text": "всем привет",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-25T22:38:40.539Z",
//           "updatedAt": "2023-09-25T22:38:40.539Z",
//           "__v": 0
//       },
//       {
//           "_id": "65108051a72b340011b36fcf",
//           "text": "1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-09-24T18:30:41.586Z",
//           "updatedAt": "2023-09-24T18:30:41.586Z",
//           "__v": 0
//       },
//       {
//           "_id": "650f46baa72b340011b36fce",
//           "text": "~~~",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "preo"
//           },
//           "createdAt": "2023-09-23T20:12:42.012Z",
//           "updatedAt": "2023-09-23T20:12:42.012Z",
//           "__v": 0
//       },
//       {
//           "_id": "650f4658a72b340011b36fcd",
//           "text": "3",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "preo"
//           },
//           "createdAt": "2023-09-23T20:11:04.737Z",
//           "updatedAt": "2023-09-23T20:11:04.737Z",
//           "__v": 0
//       },
//       {
//           "_id": "650f4127a72b340011b36fcc",
//           "text": "test",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "shinril"
//           },
//           "createdAt": "2023-09-23T19:48:55.800Z",
//           "updatedAt": "2023-09-23T19:48:55.800Z",
//           "__v": 0
//       },
//       {
//           "_id": "650f4105a72b340011b36fcb",
//           "text": "2",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-09-23T19:48:21.691Z",
//           "updatedAt": "2023-09-23T19:48:21.691Z",
//           "__v": 0
//       },
//       {
//           "_id": "650de323a72b340011b36fca",
//           "text": "хелло",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-09-22T18:55:31.042Z",
//           "updatedAt": "2023-09-22T18:55:31.042Z",
//           "__v": 0
//       },
//       {
//           "_id": "650de323a72b340011b36fc9",
//           "text": "хелло",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-09-22T18:55:31.041Z",
//           "updatedAt": "2023-09-22T18:55:31.041Z",
//           "__v": 0
//       },
//       {
//           "_id": "650de322a72b340011b36fc8",
//           "text": "хелло",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-09-22T18:55:30.451Z",
//           "updatedAt": "2023-09-22T18:55:30.451Z",
//           "__v": 0
//       },
//       {
//           "_id": "650de316a72b340011b36fc7",
//           "text": "есть, это я",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-09-22T18:55:18.753Z",
//           "updatedAt": "2023-09-22T18:55:18.753Z",
//           "__v": 0
//       },
//       {
//           "_id": "650c44cfa72b340011b36fc6",
//           "text": "хелло",
//           "user": {
//               "email": "egorshklnk@gmail.com",
//               "name": "бебра"
//           },
//           "createdAt": "2023-09-21T13:27:43.303Z",
//           "updatedAt": "2023-09-21T13:27:43.303Z",
//           "__v": 0
//       },
//       {
//           "_id": "6508a98ba72b340011b36fc5",
//           "text": "есть , это я",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-18T19:48:27.426Z",
//           "updatedAt": "2023-09-18T19:48:27.426Z",
//           "__v": 0
//       },
//       {
//           "_id": "6508a901a72b340011b36fc4",
//           "text": "есть",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-18T19:46:09.965Z",
//           "updatedAt": "2023-09-18T19:46:09.965Z",
//           "__v": 0
//       },
//       {
//           "_id": "6508a4c1a72b340011b36fc3",
//           "text": "3",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-18T19:28:01.023Z",
//           "updatedAt": "2023-09-18T19:28:01.023Z",
//           "__v": 0
//       },
//       {
//           "_id": "6508a4b9a72b340011b36fc2",
//           "text": "3",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-18T19:27:53.810Z",
//           "updatedAt": "2023-09-18T19:27:53.810Z",
//           "__v": 0
//       },
//       {
//           "_id": "65089f7da72b340011b36fc0",
//           "text": "1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asdasd"
//           },
//           "createdAt": "2023-09-18T19:05:33.893Z",
//           "updatedAt": "2023-09-18T19:05:33.893Z",
//           "__v": 0
//       },
//       {
//           "_id": "650899afa72b340011b36fbe",
//           "text": "12",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "ahahasik"
//           },
//           "createdAt": "2023-09-18T18:40:47.813Z",
//           "updatedAt": "2023-09-18T18:40:47.813Z",
//           "__v": 0
//       },
//       {
//           "_id": "650899aca72b340011b36fbd",
//           "text": "12",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "ahahasik"
//           },
//           "createdAt": "2023-09-18T18:40:44.054Z",
//           "updatedAt": "2023-09-18T18:40:44.054Z",
//           "__v": 0
//       },
//       {
//           "_id": "650899a4a72b340011b36fbc",
//           "text": "3",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "ahahasik"
//           },
//           "createdAt": "2023-09-18T18:40:36.388Z",
//           "updatedAt": "2023-09-18T18:40:36.388Z",
//           "__v": 0
//       },
//       {
//           "_id": "6508999fa72b340011b36fbb",
//           "text": "3",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "ahahasik"
//           },
//           "createdAt": "2023-09-18T18:40:31.299Z",
//           "updatedAt": "2023-09-18T18:40:31.299Z",
//           "__v": 0
//       },
//       {
//           "_id": "65089813a72b340011b36fb9",
//           "text": "2",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "Romania"
//           },
//           "createdAt": "2023-09-18T18:33:55.905Z",
//           "updatedAt": "2023-09-18T18:33:55.905Z",
//           "__v": 0
//       },
//       {
//           "_id": "65075426a72b340011b36fb8",
//           "text": "aha",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:31:50.369Z",
//           "updatedAt": "2023-09-17T19:31:50.369Z",
//           "__v": 0
//       },
//       {
//           "_id": "65075400a72b340011b36fb7",
//           "text": "`",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:31:12.335Z",
//           "updatedAt": "2023-09-17T19:31:12.335Z",
//           "__v": 0
//       },
//       {
//           "_id": "650753f5a72b340011b36fb6",
//           "text": ".)",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:31:01.750Z",
//           "updatedAt": "2023-09-17T19:31:01.750Z",
//           "__v": 0
//       },
//       {
//           "_id": "65075321a72b340011b36fb5",
//           "text": "~~~",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:27:29.177Z",
//           "updatedAt": "2023-09-17T19:27:29.177Z",
//           "__v": 0
//       },
//       {
//           "_id": "6507531ba72b340011b36fb4",
//           "text": "ppp",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:27:23.626Z",
//           "updatedAt": "2023-09-17T19:27:23.626Z",
//           "__v": 0
//       },
//       {
//           "_id": "650752fea72b340011b36fb2",
//           "text": "~~~",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "ahahasik"
//           },
//           "createdAt": "2023-09-17T19:26:54.302Z",
//           "updatedAt": "2023-09-17T19:26:54.302Z",
//           "__v": 0
//       },
//       {
//           "_id": "650752d5a72b340011b36fb0",
//           "text": "2",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asdasd"
//           },
//           "createdAt": "2023-09-17T19:26:13.562Z",
//           "updatedAt": "2023-09-17T19:26:13.562Z",
//           "__v": 0
//       },
//       {
//           "_id": "6507522aa72b340011b36faf",
//           "text": "1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asdasd"
//           },
//           "createdAt": "2023-09-17T19:23:22.053Z",
//           "updatedAt": "2023-09-17T19:23:22.053Z",
//           "__v": 0
//       },
//       {
//           "_id": "650751f2a72b340011b36fad",
//           "text": ".",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:22:26.273Z",
//           "updatedAt": "2023-09-17T19:22:26.273Z",
//           "__v": 0
//       },
//       {
//           "_id": "650751e6a72b340011b36fac",
//           "text": ".",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:22:14.135Z",
//           "updatedAt": "2023-09-17T19:22:14.135Z",
//           "__v": 0
//       },
//       {
//           "_id": "650751e3a72b340011b36fab",
//           "text": ".",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T19:22:11.674Z",
//           "updatedAt": "2023-09-17T19:22:11.674Z",
//           "__v": 0
//       },
//       {
//           "_id": "65074f14a72b340011b36fa8",
//           "text": "~",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "skdfklsdfjkl"
//           },
//           "createdAt": "2023-09-17T19:10:12.928Z",
//           "updatedAt": "2023-09-17T19:10:12.928Z",
//           "__v": 0
//       },
//       {
//           "_id": "65074cd8a72b340011b36fa7",
//           "text": "2",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "bzhyk"
//           },
//           "createdAt": "2023-09-17T19:00:40.513Z",
//           "updatedAt": "2023-09-17T19:00:40.513Z",
//           "__v": 0
//       },
//       {
//           "_id": "65074c7da72b340011b36fa5",
//           "text": "yep",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T18:59:09.008Z",
//           "updatedAt": "2023-09-17T18:59:09.008Z",
//           "__v": 0
//       },
//       {
//           "_id": "65074c7da72b340011b36fa4",
//           "text": "yep",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "asd"
//           },
//           "createdAt": "2023-09-17T18:59:09.008Z",
//           "updatedAt": "2023-09-17T18:59:09.008Z",
//           "__v": 0
//       },
//       {
//           "_id": "65074c5aa72b340011b36fa3",
//           "text": "1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "kekw"
//           },
//           "createdAt": "2023-09-17T18:58:34.682Z",
//           "updatedAt": "2023-09-17T18:58:34.682Z",
//           "__v": 0
//       },
//       {
//           "_id": "65074c5aa72b340011b36fa2",
//           "text": "1",
//           "user": {
//               "email": "skorpion156@mail.ru",
//               "name": "kekw"
//           },
//           "createdAt": "2023-09-17T18:58:34.682Z",
//           "updatedAt": "2023-09-17T18:58:34.682Z",
//           "__v": 0
//       },
//       {
//           "_id": "65062678a72b340011b36f9e",
//           "text": "есть кто живой",
//           "user": {
//               "email": "iliya.nov223@gmail.com",
//               "name": "Илья⚛️"
//           },
//           "createdAt": "2023-09-16T22:04:40.309Z",
//           "updatedAt": "2023-09-16T22:04:40.309Z",
//           "__v": 0
//       },
//       {
//           "_id": "6503867fa72b340011b36f9c",
//           "text": "dzien",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:17:35.746Z",
//           "updatedAt": "2023-09-14T22:17:35.746Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038594a72b340011b36f9b",
//           "text": "спасибо",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:13:40.904Z",
//           "updatedAt": "2023-09-14T22:13:40.904Z",
//           "__v": 0
//       },
//       {
//           "_id": "6503858ca72b340011b36f9a",
//           "text": "спасибо",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:13:32.866Z",
//           "updatedAt": "2023-09-14T22:13:32.866Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038471a72b340011b36f99",
//           "text": "what",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:08:49.288Z",
//           "updatedAt": "2023-09-14T22:08:49.288Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038445a72b340011b36f98",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:08:05.390Z",
//           "updatedAt": "2023-09-14T22:08:05.390Z",
//           "__v": 0
//       },
//       {
//           "_id": "650383eea72b340011b36f97",
//           "text": "ooo",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:06:38.620Z",
//           "updatedAt": "2023-09-14T22:06:38.620Z",
//           "__v": 0
//       },
//       {
//           "_id": "650383d3a72b340011b36f96",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:06:11.284Z",
//           "updatedAt": "2023-09-14T22:06:11.284Z",
//           "__v": 0
//       },
//       {
//           "_id": "6503835ba72b340011b36f95",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:04:11.988Z",
//           "updatedAt": "2023-09-14T22:04:11.988Z",
//           "__v": 0
//       },
//       {
//           "_id": "6503834aa72b340011b36f94",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:03:54.572Z",
//           "updatedAt": "2023-09-14T22:03:54.572Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038338a72b340011b36f93",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:03:36.986Z",
//           "updatedAt": "2023-09-14T22:03:36.986Z",
//           "__v": 0
//       },
//       {
//           "_id": "6503826fa72b340011b36f92",
//           "text": "dcdssdc",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T22:00:15.350Z",
//           "updatedAt": "2023-09-14T22:00:15.350Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038243a72b340011b36f91",
//           "text": "fcdssd",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:59:31.135Z",
//           "updatedAt": "2023-09-14T21:59:31.135Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038236a72b340011b36f90",
//           "text": "ascd",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:59:18.171Z",
//           "updatedAt": "2023-09-14T21:59:18.171Z",
//           "__v": 0
//       },
//       {
//           "_id": "6503821da72b340011b36f8f",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:58:53.406Z",
//           "updatedAt": "2023-09-14T21:58:53.406Z",
//           "__v": 0
//       },
//       {
//           "_id": "650381c3a72b340011b36f8e",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:57:23.672Z",
//           "updatedAt": "2023-09-14T21:57:23.672Z",
//           "__v": 0
//       },
//       {
//           "_id": "650381bfa72b340011b36f8d",
//           "text": "hello",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:57:19.347Z",
//           "updatedAt": "2023-09-14T21:57:19.347Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038040a72b340011b36f8c",
//           "text": "dobra",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:50:56.501Z",
//           "updatedAt": "2023-09-14T21:50:56.501Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038018a72b340011b36f8b",
//           "text": "okejjj",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:50:16.079Z",
//           "updatedAt": "2023-09-14T21:50:16.079Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038010a72b340011b36f8a",
//           "text": "okejjj",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:50:08.041Z",
//           "updatedAt": "2023-09-14T21:50:08.041Z",
//           "__v": 0
//       },
//       {
//           "_id": "65038008a72b340011b36f89",
//           "text": "okejjj",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:50:00.562Z",
//           "updatedAt": "2023-09-14T21:50:00.562Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037faca72b340011b36f88",
//           "text": "okejjj",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:48:28.556Z",
//           "updatedAt": "2023-09-14T21:48:28.556Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037f43a72b340011b36f87",
//           "text": "Его имя роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:46:43.294Z",
//           "updatedAt": "2023-09-14T21:46:43.294Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037d3aa72b340011b36f86",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:38:02.985Z",
//           "updatedAt": "2023-09-14T21:38:02.985Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037d33a72b340011b36f85",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:37:55.491Z",
//           "updatedAt": "2023-09-14T21:37:55.491Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037d32a72b340011b36f84",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:37:54.495Z",
//           "updatedAt": "2023-09-14T21:37:54.495Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037d1aa72b340011b36f83",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:37:30.002Z",
//           "updatedAt": "2023-09-14T21:37:30.002Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037d13a72b340011b36f82",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:37:23.458Z",
//           "updatedAt": "2023-09-14T21:37:23.458Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037c8ba72b340011b36f81",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:35:07.038Z",
//           "updatedAt": "2023-09-14T21:35:07.038Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037c43a72b340011b36f80",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:33:55.181Z",
//           "updatedAt": "2023-09-14T21:33:55.181Z",
//           "__v": 0
//       },
//       {
//           "_id": "65037c2ba72b340011b36f7f",
//           "text": "Его имя Роберт полсон",
//           "user": {
//               "email": "kostastavickij4@gmail.com",
//               "name": "Banaishik"
//           },
//           "createdAt": "2023-09-14T21:33:31.636Z",
//           "updatedAt": "2023-09-14T21:33:31.636Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4562a72b340011b36f7e",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "aboba"
//           },
//           "createdAt": "2023-09-10T22:38:26.437Z",
//           "updatedAt": "2023-09-10T22:38:26.437Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4554a72b340011b36f7d",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:38:12.216Z",
//           "updatedAt": "2023-09-10T22:38:12.216Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4527a72b340011b36f7c",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:37:27.510Z",
//           "updatedAt": "2023-09-10T22:37:27.510Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4522a72b340011b36f7b",
//           "text": "asasas",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:37:22.307Z",
//           "updatedAt": "2023-09-10T22:37:22.307Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe451ea72b340011b36f7a",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:37:18.621Z",
//           "updatedAt": "2023-09-10T22:37:18.621Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44f4a72b340011b36f79",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:36:36.624Z",
//           "updatedAt": "2023-09-10T22:36:36.624Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44e5a72b340011b36f78",
//           "text": "lox",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:36:21.249Z",
//           "updatedAt": "2023-09-10T22:36:21.249Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44e0a72b340011b36f77",
//           "text": "lox",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:36:16.466Z",
//           "updatedAt": "2023-09-10T22:36:16.466Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44dca72b340011b36f76",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:36:12.627Z",
//           "updatedAt": "2023-09-10T22:36:12.627Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44c6a72b340011b36f75",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:35:50.178Z",
//           "updatedAt": "2023-09-10T22:35:50.178Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44c5a72b340011b36f74",
//           "text": "as",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:35:49.792Z",
//           "updatedAt": "2023-09-10T22:35:49.792Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44c1a72b340011b36f73",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:35:45.837Z",
//           "updatedAt": "2023-09-10T22:35:45.837Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44bea72b340011b36f72",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:35:42.254Z",
//           "updatedAt": "2023-09-10T22:35:42.254Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe44bda72b340011b36f71",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:35:41.396Z",
//           "updatedAt": "2023-09-10T22:35:41.396Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4468a72b340011b36f70",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:34:16.084Z",
//           "updatedAt": "2023-09-10T22:34:16.084Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4460a72b340011b36f6f",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:34:08.024Z",
//           "updatedAt": "2023-09-10T22:34:08.024Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4413a72b340011b36f6e",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:32:51.604Z",
//           "updatedAt": "2023-09-10T22:32:51.604Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4406a72b340011b36f6d",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:32:38.064Z",
//           "updatedAt": "2023-09-10T22:32:38.064Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe43f4a72b340011b36f6c",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:32:20.346Z",
//           "updatedAt": "2023-09-10T22:32:20.346Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe43cfa72b340011b36f6b",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:31:43.065Z",
//           "updatedAt": "2023-09-10T22:31:43.065Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe42dda72b340011b36f6a",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:27:41.069Z",
//           "updatedAt": "2023-09-10T22:27:41.069Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe42d9a72b340011b36f69",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:27:37.219Z",
//           "updatedAt": "2023-09-10T22:27:37.219Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe42c5a72b340011b36f68",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:27:17.179Z",
//           "updatedAt": "2023-09-10T22:27:17.179Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe42b2a72b340011b36f67",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:26:58.760Z",
//           "updatedAt": "2023-09-10T22:26:58.760Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe42aca72b340011b36f66",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:26:52.383Z",
//           "updatedAt": "2023-09-10T22:26:52.383Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe42a8a72b340011b36f65",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:26:48.889Z",
//           "updatedAt": "2023-09-10T22:26:48.889Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe42a0a72b340011b36f64",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:26:40.566Z",
//           "updatedAt": "2023-09-10T22:26:40.566Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4209a72b340011b36f63",
//           "text": "a",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:24:09.290Z",
//           "updatedAt": "2023-09-10T22:24:09.290Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe41b9a72b340011b36f62",
//           "text": "урааа, я дошел до чата наконец то когда уже сделал реакт))",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:22:49.562Z",
//           "updatedAt": "2023-09-10T22:22:49.562Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe41b6a72b340011b36f61",
//           "text": "урааа, я дошел до чата наконец то когда уже сделал реакт))",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:22:46.161Z",
//           "updatedAt": "2023-09-10T22:22:46.161Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fe4192a72b340011b36f60",
//           "text": "урааа, я дошел до чата наконец то когда уже сделал реакт))",
//           "user": {
//               "email": "vladvoronin428@gmail.com",
//               "name": "Владик"
//           },
//           "createdAt": "2023-09-10T22:22:10.373Z",
//           "updatedAt": "2023-09-10T22:22:10.373Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc70060fa03500117d87d4",
//           "text": "q",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T13:15:50.974Z",
//           "updatedAt": "2023-09-09T13:15:50.974Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc70030fa03500117d87d3",
//           "text": "q",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T13:15:47.566Z",
//           "updatedAt": "2023-09-09T13:15:47.566Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6f100fa03500117d87d2",
//           "text": "1",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T13:11:44.722Z",
//           "updatedAt": "2023-09-09T13:11:44.722Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6cf00fa03500117d87d1",
//           "text": "l",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T13:02:40.174Z",
//           "updatedAt": "2023-09-09T13:02:40.174Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6c7f0fa03500117d87d0",
//           "text": "o",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T13:00:47.948Z",
//           "updatedAt": "2023-09-09T13:00:47.948Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6baf0fa03500117d87cf",
//           "text": "ll",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:57:19.365Z",
//           "updatedAt": "2023-09-09T12:57:19.365Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6ba80fa03500117d87ce",
//           "text": "i",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:57:12.717Z",
//           "updatedAt": "2023-09-09T12:57:12.717Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6b8a0fa03500117d87cd",
//           "text": "l",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:56:42.285Z",
//           "updatedAt": "2023-09-09T12:56:42.285Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6b630fa03500117d87cc",
//           "text": "k",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:56:03.405Z",
//           "updatedAt": "2023-09-09T12:56:03.405Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6b4d0fa03500117d87cb",
//           "text": "t",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:55:41.370Z",
//           "updatedAt": "2023-09-09T12:55:41.370Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6b4a0fa03500117d87ca",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:55:38.759Z",
//           "updatedAt": "2023-09-09T12:55:38.759Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6af40fa03500117d87c9",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:54:12.799Z",
//           "updatedAt": "2023-09-09T12:54:12.799Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6aec0fa03500117d87c8",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:54:04.117Z",
//           "updatedAt": "2023-09-09T12:54:04.117Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6ac80fa03500117d87c7",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:53:28.161Z",
//           "updatedAt": "2023-09-09T12:53:28.161Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6aae0fa03500117d87c6",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:53:02.847Z",
//           "updatedAt": "2023-09-09T12:53:02.847Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc6a090fa03500117d87c5",
//           "text": "al",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:50:17.892Z",
//           "updatedAt": "2023-09-09T12:50:17.892Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc69f40fa03500117d87c4",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:49:56.693Z",
//           "updatedAt": "2023-09-09T12:49:56.693Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc695c0fa03500117d87c3",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:47:24.814Z",
//           "updatedAt": "2023-09-09T12:47:24.814Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc68b90fa03500117d87c2",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:44:41.935Z",
//           "updatedAt": "2023-09-09T12:44:41.935Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc67e00fa03500117d87c1",
//           "text": "fkfkkf",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:41:04.414Z",
//           "updatedAt": "2023-09-09T12:41:04.414Z",
//           "__v": 0
//       },
//       {
//           "_id": "64fc67c10fa03500117d87c0",
//           "text": "fkfkfkkf",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-09-09T12:40:33.726Z",
//           "updatedAt": "2023-09-09T12:40:33.726Z",
//           "__v": 0
//       },
//       {
//           "_id": "64f777db0fa03500117d87be",
//           "text": "123",
//           "user": {
//               "email": "usa-nikita@yandex.ru",
//               "name": "Nikita"
//           },
//           "createdAt": "2023-09-05T18:47:55.415Z",
//           "updatedAt": "2023-09-05T18:47:55.415Z",
//           "__v": 0
//       },
//       {
//           "_id": "64f482016508540011f203c3",
//           "text": "das",
//           "user": {
//               "email": "mirfidron@mail.ru",
//               "name": "mirfidron"
//           },
//           "createdAt": "2023-09-03T12:54:25.092Z",
//           "updatedAt": "2023-09-03T12:54:25.092Z",
//           "__v": 0
//       },
//       {
//           "_id": "64f47ddb6508540011f203c2",
//           "text": "mids",
//           "user": {
//               "email": "mirfidron@mail.ru",
//               "name": "mirfidron"
//           },
//           "createdAt": "2023-09-03T12:36:43.453Z",
//           "updatedAt": "2023-09-03T12:36:43.453Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ee369d6508540011f203c1",
//           "text": "сделали чат наконец?",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "Блат"
//           },
//           "createdAt": "2023-08-29T18:19:09.484Z",
//           "updatedAt": "2023-08-29T18:19:09.484Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ee368d6508540011f203c0",
//           "text": "ну что вы бездари",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "Блат"
//           },
//           "createdAt": "2023-08-29T18:18:53.401Z",
//           "updatedAt": "2023-08-29T18:18:53.401Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec6bbf6508540011f203bf",
//           "text": "g",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "[[["
//           },
//           "createdAt": "2023-08-28T09:41:19.823Z",
//           "updatedAt": "2023-08-28T09:41:19.823Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec6b6f6508540011f203be",
//           "text": "333333333333333333",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "ass"
//           },
//           "createdAt": "2023-08-28T09:39:59.222Z",
//           "updatedAt": "2023-08-28T09:39:59.222Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec691e6508540011f203bd",
//           "text": "123",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-28T09:30:06.246Z",
//           "updatedAt": "2023-08-28T09:30:06.246Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec66fe6508540011f203bc",
//           "text": "df",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-28T09:21:02.695Z",
//           "updatedAt": "2023-08-28T09:21:02.695Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec66f96508540011f203bb",
//           "text": "ret",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-28T09:20:57.222Z",
//           "updatedAt": "2023-08-28T09:20:57.222Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec662e6508540011f203ba",
//           "text": "243",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-28T09:17:34.585Z",
//           "updatedAt": "2023-08-28T09:17:34.585Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec66236508540011f203b9",
//           "text": "123",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-28T09:17:23.440Z",
//           "updatedAt": "2023-08-28T09:17:23.440Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec659a6508540011f203b8",
//           "text": "asd",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-28T09:15:06.416Z",
//           "updatedAt": "2023-08-28T09:15:06.416Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ec64896508540011f203b7",
//           "text": "1324",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-28T09:10:33.708Z",
//           "updatedAt": "2023-08-28T09:10:33.708Z",
//           "__v": 0
//       },
//       {
//           "_id": "64ea398e6508540011f203b4",
//           "text": "xd",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-08-26T17:42:38.232Z",
//           "updatedAt": "2023-08-26T17:42:38.232Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e9f8596508540011f203b2",
//           "text": "ll",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "rrrrr"
//           },
//           "createdAt": "2023-08-26T13:04:25.249Z",
//           "updatedAt": "2023-08-26T13:04:25.249Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e9f8566508540011f203b1",
//           "text": "ll",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "rrrrr"
//           },
//           "createdAt": "2023-08-26T13:04:22.090Z",
//           "updatedAt": "2023-08-26T13:04:22.090Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e9f8566508540011f203b0",
//           "text": "ll",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "rrrrr"
//           },
//           "createdAt": "2023-08-26T13:04:22.028Z",
//           "updatedAt": "2023-08-26T13:04:22.028Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e9f7926508540011f203af",
//           "text": "rrr",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "rrrrr"
//           },
//           "createdAt": "2023-08-26T13:01:06.888Z",
//           "updatedAt": "2023-08-26T13:01:06.888Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e9f4dc6508540011f203ae",
//           "text": "1",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-26T12:49:32.348Z",
//           "updatedAt": "2023-08-26T12:49:32.348Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e9f4ce6508540011f203ad",
//           "text": "\\\\",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-26T12:49:18.895Z",
//           "updatedAt": "2023-08-26T12:49:18.895Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e889f96508540011f203ac",
//           "text": "dd",
//           "user": {
//               "email": "janby3521@gmail.com",
//               "name": "janby"
//           },
//           "createdAt": "2023-08-25T11:01:13.703Z",
//           "updatedAt": "2023-08-25T11:01:13.703Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e7970a6508540011f203ab",
//           "text": "das",
//           "user": {
//               "email": "mirfidron@mail.ru",
//               "name": "mirfidron"
//           },
//           "createdAt": "2023-08-24T17:44:42.932Z",
//           "updatedAt": "2023-08-24T17:44:42.932Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e66f124c96930011cd7b93",
//           "text": "dsadas",
//           "user": {
//               "email": "janby3521@gmail.com",
//               "name": "youngjanby"
//           },
//           "createdAt": "2023-08-23T20:41:54.631Z",
//           "updatedAt": "2023-08-23T20:41:54.631Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e66f124c96930011cd7b92",
//           "text": "dsadas",
//           "user": {
//               "email": "janby3521@gmail.com",
//               "name": "youngjanby"
//           },
//           "createdAt": "2023-08-23T20:41:54.361Z",
//           "updatedAt": "2023-08-23T20:41:54.361Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e66f124c96930011cd7b91",
//           "text": "dsadas",
//           "user": {
//               "email": "janby3521@gmail.com",
//               "name": "youngjanby"
//           },
//           "createdAt": "2023-08-23T20:41:54.067Z",
//           "updatedAt": "2023-08-23T20:41:54.067Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e45c114c96930011cd7b90",
//           "text": "asdf",
//           "user": {
//               "email": "wasd252545@gmail.com",
//               "name": "Дадая"
//           },
//           "createdAt": "2023-08-22T06:56:17.973Z",
//           "updatedAt": "2023-08-22T06:56:17.973Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e1ea674c96930011cd7b8e",
//           "text": "3123",
//           "user": {
//               "email": "mirfidron@mail.ru",
//               "name": "mirfidron"
//           },
//           "createdAt": "2023-08-20T10:26:47.792Z",
//           "updatedAt": "2023-08-20T10:26:47.792Z",
//           "__v": 0
//       },
//       {
//           "_id": "64df623f4c96930011cd7b8d",
//           "text": "ASsssss",
//           "user": {
//               "email": "antoha.16_16@mail.ru",
//               "name": "Али Сакенулы"
//           },
//           "createdAt": "2023-08-18T12:21:19.009Z",
//           "updatedAt": "2023-08-18T12:21:19.009Z",
//           "__v": 0
//       },
//       {
//           "_id": "64df62274c96930011cd7b8c",
//           "text": "ASsssss",
//           "user": {
//               "email": "antoha.16_16@mail.ru",
//               "name": "Антон"
//           },
//           "createdAt": "2023-08-18T12:20:55.086Z",
//           "updatedAt": "2023-08-18T12:20:55.086Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de7f764c96930011cd7b8b",
//           "text": "Привет",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T20:13:42.774Z",
//           "updatedAt": "2023-08-17T20:13:42.774Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de6b8a4c96930011cd7b8a",
//           "text": "Ку",
//           "user": {
//               "email": "sofundel@yandex.ru",
//               "name": "Софи"
//           },
//           "createdAt": "2023-08-17T18:48:42.565Z",
//           "updatedAt": "2023-08-17T18:48:42.565Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de48e24c96930011cd7b89",
//           "text": "dd",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T16:20:50.062Z",
//           "updatedAt": "2023-08-17T16:20:50.062Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de46764c96930011cd7b88",
//           "text": "dd",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T16:10:30.907Z",
//           "updatedAt": "2023-08-17T16:10:30.907Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de466e4c96930011cd7b87",
//           "text": "ddd",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T16:10:22.063Z",
//           "updatedAt": "2023-08-17T16:10:22.063Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de466e4c96930011cd7b86",
//           "text": "ddd",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T16:10:22.062Z",
//           "updatedAt": "2023-08-17T16:10:22.062Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de466e4c96930011cd7b85",
//           "text": "ddd",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T16:10:22.060Z",
//           "updatedAt": "2023-08-17T16:10:22.060Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de45124c96930011cd7b84",
//           "text": "ddd",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T16:04:34.403Z",
//           "updatedAt": "2023-08-17T16:04:34.403Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de429b4c96930011cd7b83",
//           "text": "ddd",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T15:54:03.263Z",
//           "updatedAt": "2023-08-17T15:54:03.263Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de3e384c96930011cd7b82",
//           "text": "test",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T15:35:20.525Z",
//           "updatedAt": "2023-08-17T15:35:20.525Z",
//           "__v": 0
//       },
//       {
//           "_id": "64de3e364c96930011cd7b81",
//           "text": "test",
//           "user": {
//               "email": "arseniy5412@gmail.com",
//               "name": "arseniy"
//           },
//           "createdAt": "2023-08-17T15:35:18.766Z",
//           "updatedAt": "2023-08-17T15:35:18.766Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53cf4c96930011cd7b80",
//           "text": "sdf",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:39.822Z",
//           "updatedAt": "2023-08-15T10:30:39.822Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53cf4c96930011cd7b7f",
//           "text": "dfasf",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:39.522Z",
//           "updatedAt": "2023-08-15T10:30:39.522Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53cf4c96930011cd7b7e",
//           "text": "asfas",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:39.127Z",
//           "updatedAt": "2023-08-15T10:30:39.127Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53ce4c96930011cd7b7d",
//           "text": "etr",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:38.598Z",
//           "updatedAt": "2023-08-15T10:30:38.598Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53cc4c96930011cd7b7c",
//           "text": "eerr",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:36.644Z",
//           "updatedAt": "2023-08-15T10:30:36.644Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53c84c96930011cd7b7b",
//           "text": "eee",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:32.438Z",
//           "updatedAt": "2023-08-15T10:30:32.438Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53c64c96930011cd7b7a",
//           "text": "rer",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:30.922Z",
//           "updatedAt": "2023-08-15T10:30:30.922Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53c54c96930011cd7b79",
//           "text": "erere",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:29.336Z",
//           "updatedAt": "2023-08-15T10:30:29.336Z",
//           "__v": 0
//       },
//       {
//           "_id": "64db53c24c96930011cd7b78",
//           "text": "rererere",
//           "user": {
//               "email": "semkyki@gmail.com",
//               "name": "Cooki"
//           },
//           "createdAt": "2023-08-15T10:30:26.799Z",
//           "updatedAt": "2023-08-15T10:30:26.799Z",
//           "__v": 0
//       },
//       {
//           "_id": "64d82aaa4c96930011cd7b77",
//           "text": "321",
//           "user": {
//               "email": "alvtar.gcp@gmail.com",
//               "name": "Guest711"
//           },
//           "createdAt": "2023-08-13T00:58:18.529Z",
//           "updatedAt": "2023-08-13T00:58:18.529Z",
//           "__v": 0
//       },
//       {
//           "_id": "64d82a944c96930011cd7b76",
//           "text": "123",
//           "user": {
//               "email": "alvtar.gcp@gmail.com",
//               "name": "Guest711"
//           },
//           "createdAt": "2023-08-13T00:57:56.951Z",
//           "updatedAt": "2023-08-13T00:57:56.951Z",
//           "__v": 0
//       },
//       {
//           "_id": "64d4cfc9dbe4560011664a5f",
//           "text": "wq",
//           "user": {
//               "email": "lh.klk07@yandex.ru",
//               "name": "Egor228"
//           },
//           "createdAt": "2023-08-10T11:53:45.160Z",
//           "updatedAt": "2023-08-10T11:53:45.160Z",
//           "__v": 0
//       },
//       {
//           "_id": "64cf866000c02c001155cf00",
//           "text": "привет",
//           "user": {
//               "email": "Prahatuc@mail.ru",
//               "name": "Serg"
//           },
//           "createdAt": "2023-08-06T11:39:12.123Z",
//           "updatedAt": "2023-08-06T11:39:12.123Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c8269300c02c001155ceff",
//           "text": "привет",
//           "user": {
//               "email": "irhin2011@yandex.ru",
//               "name": "enot"
//           },
//           "createdAt": "2023-07-31T21:24:35.876Z",
//           "updatedAt": "2023-07-31T21:24:35.876Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2e4565beda10011ed36aa",
//           "text": "mama",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T21:40:38.830Z",
//           "updatedAt": "2023-07-27T21:40:38.830Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2dbd95beda10011ed36a9",
//           "text": "и еще пишу в чат",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T21:04:25.277Z",
//           "updatedAt": "2023-07-27T21:04:25.277Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2dbd65beda10011ed36a8",
//           "text": "пишу в чат",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T21:04:22.035Z",
//           "updatedAt": "2023-07-27T21:04:22.035Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2dbd35beda10011ed36a7",
//           "text": "пишу в чат",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T21:04:19.921Z",
//           "updatedAt": "2023-07-27T21:04:19.921Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2db935beda10011ed36a6",
//           "text": "фыв",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T21:03:15.680Z",
//           "updatedAt": "2023-07-27T21:03:15.680Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2db8f5beda10011ed36a5",
//           "text": "бу",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T21:03:11.117Z",
//           "updatedAt": "2023-07-27T21:03:11.117Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2db6e5beda10011ed36a4",
//           "text": "течис",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T21:02:38.356Z",
//           "updatedAt": "2023-07-27T21:02:38.356Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2db255beda10011ed36a3",
//           "text": "xd",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T21:01:25.029Z",
//           "updatedAt": "2023-07-27T21:01:25.029Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2da815beda10011ed36a2",
//           "text": "123",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:58:41.853Z",
//           "updatedAt": "2023-07-27T20:58:41.853Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d8d95beda10011ed36a1",
//           "text": "2",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:51:37.635Z",
//           "updatedAt": "2023-07-27T20:51:37.635Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d8d85beda10011ed36a0",
//           "text": "1",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:51:36.782Z",
//           "updatedAt": "2023-07-27T20:51:36.782Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d81c5beda10011ed369f",
//           "text": "не работают кстати",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:48:28.008Z",
//           "updatedAt": "2023-07-27T20:48:28.008Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d8195beda10011ed369e",
//           "text": "смайлики",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:48:25.829Z",
//           "updatedAt": "2023-07-27T20:48:25.829Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d7f25beda10011ed369d",
//           "text": "попи",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:47:46.360Z",
//           "updatedAt": "2023-07-27T20:47:46.360Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d7f05beda10011ed369c",
//           "text": "пипу",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:47:44.269Z",
//           "updatedAt": "2023-07-27T20:47:44.269Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d7cf5beda10011ed369b",
//           "text": "test",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:47:11.820Z",
//           "updatedAt": "2023-07-27T20:47:11.820Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d7c35beda10011ed369a",
//           "text": "123",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:46:59.048Z",
//           "updatedAt": "2023-07-27T20:46:59.048Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d7c05beda10011ed3699",
//           "text": "xd",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:46:56.115Z",
//           "updatedAt": "2023-07-27T20:46:56.115Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d7b35beda10011ed3698",
//           "text": "123",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:46:43.324Z",
//           "updatedAt": "2023-07-27T20:46:43.324Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d78d5beda10011ed3697",
//           "text": "просто в бэкенд пока не особо интересно",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "..."
//           },
//           "createdAt": "2023-07-27T20:46:05.903Z",
//           "updatedAt": "2023-07-27T20:46:05.903Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d7735beda10011ed3696",
//           "text": "хочу устроиться именно фронтендером. на питоне я писал тг-ботов, парсинг и автоматизацию по мелочи",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "..."
//           },
//           "createdAt": "2023-07-27T20:45:39.703Z",
//           "updatedAt": "2023-07-27T20:45:39.703Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d6e85beda10011ed3695",
//           "text": "1",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:43:20.473Z",
//           "updatedAt": "2023-07-27T20:43:20.473Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d6e55beda10011ed3694",
//           "text": "2",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:43:17.951Z",
//           "updatedAt": "2023-07-27T20:43:17.951Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d6a55beda10011ed3693",
//           "text": "в питон, емае, а что так решил вернутся в js?",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T20:42:13.984Z",
//           "updatedAt": "2023-07-27T20:42:13.984Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d65f5beda10011ed3692",
//           "text": "ахах. к концу модуля мб и догоню по реакту. ещё в апреле написал на нем тудушку, а потом свитчнулся на питон, поэтому сейчас в роли отстающего",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "..."
//           },
//           "createdAt": "2023-07-27T20:41:03.688Z",
//           "updatedAt": "2023-07-27T20:41:03.688Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d3e75beda10011ed3691",
//           "text": "помянем",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:30:31.280Z",
//           "updatedAt": "2023-07-27T20:30:31.280Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d3e65beda10011ed3690",
//           "text": "а ты на ваниле...",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:30:30.149Z",
//           "updatedAt": "2023-07-27T20:30:30.149Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d3485beda10011ed368f",
//           "text": "не пробовал. зато точно знаю, что на реакте этот же чат было бы в 1000 раз легче написать и поддерживать. все-таки на ванильном js самому приходится добавлять асбтракции и проч.",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "..."
//           },
//           "createdAt": "2023-07-27T20:27:52.789Z",
//           "updatedAt": "2023-07-27T20:27:52.789Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d21e5beda10011ed368e",
//           "text": "какашка ваш mui",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:22:54.233Z",
//           "updatedAt": "2023-07-27T20:22:54.233Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d2125beda10011ed368d",
//           "text": "mda",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:22:42.695Z",
//           "updatedAt": "2023-07-27T20:22:42.695Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d03f5beda10011ed368c",
//           "text": "😨😨😨😨😨😨",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T20:14:55.773Z",
//           "updatedAt": "2023-07-27T20:14:55.773Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d0315beda10011ed368b",
//           "text": "ой",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:14:41.485Z",
//           "updatedAt": "2023-07-27T20:14:41.485Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d02d5beda10011ed368a",
//           "text": "у меня половина второго )",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "..."
//           },
//           "createdAt": "2023-07-27T20:14:37.578Z",
//           "updatedAt": "2023-07-27T20:14:37.578Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d0215beda10011ed3689",
//           "text": "пол 12 а мы кодим ойойой",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:14:25.160Z",
//           "updatedAt": "2023-07-27T20:14:25.160Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2d0045beda10011ed3688",
//           "text": "<3",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:13:56.477Z",
//           "updatedAt": "2023-07-27T20:13:56.477Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2cff55beda10011ed3687",
//           "text": "ахах, сэнкс",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "..."
//           },
//           "createdAt": "2023-07-27T20:13:41.764Z",
//           "updatedAt": "2023-07-27T20:13:41.764Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2cfe35beda10011ed3686",
//           "text": "ты умница зайка моя",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T20:13:23.060Z",
//           "updatedAt": "2023-07-27T20:13:23.060Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2cfc75beda10011ed3685",
//           "text": "почти все доделал. почти все переписал на ts. ура, этот модуль закончен",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "..."
//           },
//           "createdAt": "2023-07-27T20:12:55.743Z",
//           "updatedAt": "2023-07-27T20:12:55.743Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2bea35beda10011ed3684",
//           "text": "xd",
//           "user": {
//               "email": "tighineanu00@gmail.com",
//               "name": "tighineanu00@gmail.com"
//           },
//           "createdAt": "2023-07-27T18:59:47.754Z",
//           "updatedAt": "2023-07-27T18:59:47.754Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2a1865beda10011ed3683",
//           "text": "сынок, *б*нный",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "JOJO_BIZZARE_ADV"
//           },
//           "createdAt": "2023-07-27T16:55:34.578Z",
//           "updatedAt": "2023-07-27T16:55:34.578Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c2a1765beda10011ed3682",
//           "text": "с какими деньгами?",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "JOJO_BIZZARE_ADV"
//           },
//           "createdAt": "2023-07-27T16:55:18.860Z",
//           "updatedAt": "2023-07-27T16:55:18.860Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c277c88ed97d0010166485",
//           "text": "a",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T13:57:28.094Z",
//           "updatedAt": "2023-07-27T13:57:28.094Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c25d7e8ed97d0010166484",
//           "text": "🥰😆",
//           "user": {
//               "email": "sonalavrushina@gmail.com",
//               "name": "motomoto"
//           },
//           "createdAt": "2023-07-27T12:05:18.454Z",
//           "updatedAt": "2023-07-27T12:05:18.454Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c199d28ed97d0010166483",
//           "text": "Ну че как там с деньгами?",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "Блат"
//           },
//           "createdAt": "2023-07-26T22:10:26.096Z",
//           "updatedAt": "2023-07-26T22:10:26.096Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c17b3b8ed97d0010166482",
//           "text": "hello, амигос",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "JOJO_BIZZARE_ADV"
//           },
//           "createdAt": "2023-07-26T19:59:55.573Z",
//           "updatedAt": "2023-07-26T19:59:55.573Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c17ad18ed97d0010166481",
//           "text": ";)",
//           "user": {
//               "email": "alvtar.gcp@gmail.com",
//               "name": "Guest711"
//           },
//           "createdAt": "2023-07-26T19:58:09.662Z",
//           "updatedAt": "2023-07-26T19:58:09.662Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c179198ed97d0010166480",
//           "text": "BLM!",
//           "user": {
//               "email": "alvtar.gcp@gmail.com",
//               "name": "Guest711"
//           },
//           "createdAt": "2023-07-26T19:50:49.090Z",
//           "updatedAt": "2023-07-26T19:50:49.090Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c179128ed97d001016647f",
//           "text": "Hello everyone!",
//           "user": {
//               "email": "alvtar.gcp@gmail.com",
//               "name": "Guest711"
//           },
//           "createdAt": "2023-07-26T19:50:42.469Z",
//           "updatedAt": "2023-07-26T19:50:42.469Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c179088ed97d001016647e",
//           "text": "Test!!!",
//           "user": {
//               "email": "alvtar.gcp@gmail.com",
//               "name": "Guest711"
//           },
//           "createdAt": "2023-07-26T19:50:32.612Z",
//           "updatedAt": "2023-07-26T19:50:32.612Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c16cf78ed97d001016647b",
//           "text": "ewewwe",
//           "user": {
//               "email": "tarasov14.08.2000@gmail.com",
//               "name": "wewwewwe"
//           },
//           "createdAt": "2023-07-26T18:59:03.356Z",
//           "updatedAt": "2023-07-26T18:59:03.356Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c16ced8ed97d001016647a",
//           "text": "ssdss",
//           "user": {
//               "email": "tarasov14.08.2000@gmail.com",
//               "name": "wewwewwe"
//           },
//           "createdAt": "2023-07-26T18:58:53.431Z",
//           "updatedAt": "2023-07-26T18:58:53.431Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c160588ed97d0010166479",
//           "text": "Хелло",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "Блат"
//           },
//           "createdAt": "2023-07-26T18:05:12.682Z",
//           "updatedAt": "2023-07-26T18:05:12.682Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c15a548ed97d0010166478",
//           "text": "w",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "Ggg"
//           },
//           "createdAt": "2023-07-26T17:39:32.307Z",
//           "updatedAt": "2023-07-26T17:39:32.307Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c13ae68ed97d0010166477",
//           "text": "13",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "балда"
//           },
//           "createdAt": "2023-07-26T15:25:26.477Z",
//           "updatedAt": "2023-07-26T15:25:26.477Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c057278ed97d0010166476",
//           "text": "хелоу",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "JOJO_BIZZARE_ADV"
//           },
//           "createdAt": "2023-07-25T23:13:43.003Z",
//           "updatedAt": "2023-07-25T23:13:43.003Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c030988ed97d0010166475",
//           "text": "мне чето надоело рефакторить. оказывается, надо сразу писать адекватный модульный код)",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "JOJO_BIZZARE_ADV"
//           },
//           "createdAt": "2023-07-25T20:29:12.983Z",
//           "updatedAt": "2023-07-25T20:29:12.983Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c030728ed97d0010166474",
//           "text": "как разработка чата?",
//           "user": {
//               "email": "chop.chop.rock.pop@gmail.com",
//               "name": "JOJO_BIZZARE_ADV"
//           },
//           "createdAt": "2023-07-25T20:28:34.521Z",
//           "updatedAt": "2023-07-25T20:28:34.521Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02fbc8ed97d0010166473",
//           "text": "r",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:25:32.383Z",
//           "updatedAt": "2023-07-25T20:25:32.383Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02f958ed97d0010166472",
//           "text": "r",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:24:53.654Z",
//           "updatedAt": "2023-07-25T20:24:53.654Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02ea48ed97d0010166471",
//           "text": "123",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:20:52.504Z",
//           "updatedAt": "2023-07-25T20:20:52.504Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02e5d8ed97d0010166470",
//           "text": "123",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:19:41.041Z",
//           "updatedAt": "2023-07-25T20:19:41.041Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02e498ed97d001016646f",
//           "text": "123",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:19:21.320Z",
//           "updatedAt": "2023-07-25T20:19:21.320Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02e0f8ed97d001016646e",
//           "text": "213",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:18:23.949Z",
//           "updatedAt": "2023-07-25T20:18:23.949Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02cde8ed97d001016646d",
//           "text": "test",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:13:18.034Z",
//           "updatedAt": "2023-07-25T20:13:18.034Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02cba8ed97d001016646c",
//           "text": "reset",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:12:42.941Z",
//           "updatedAt": "2023-07-25T20:12:42.941Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02c738ed97d001016646b",
//           "text": "mandarin",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:11:31.512Z",
//           "updatedAt": "2023-07-25T20:11:31.512Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02b5f8ed97d001016646a",
//           "text": "pear",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:06:55.589Z",
//           "updatedAt": "2023-07-25T20:06:55.589Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02b558ed97d0010166469",
//           "text": "orange",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:06:45.449Z",
//           "updatedAt": "2023-07-25T20:06:45.449Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02b248ed97d0010166468",
//           "text": "apple",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:05:56.100Z",
//           "updatedAt": "2023-07-25T20:05:56.100Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02a9a8ed97d0010166467",
//           "text": "qwe",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:03:38.024Z",
//           "updatedAt": "2023-07-25T20:03:38.024Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02a258ed97d0010166466",
//           "text": "test",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:01:41.240Z",
//           "updatedAt": "2023-07-25T20:01:41.240Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02a1f8ed97d0010166465",
//           "text": "213",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:01:35.623Z",
//           "updatedAt": "2023-07-25T20:01:35.623Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c02a148ed97d0010166464",
//           "text": "1",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:01:24.863Z",
//           "updatedAt": "2023-07-25T20:01:24.863Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c029e78ed97d0010166463",
//           "text": "qq all",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:00:39.937Z",
//           "updatedAt": "2023-07-25T20:00:39.937Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c029ce8ed97d0010166462",
//           "text": "asd",
//           "user": {
//               "email": "kisele4ek1@gmail.com",
//               "name": "4r1"
//           },
//           "createdAt": "2023-07-25T20:00:14.930Z",
//           "updatedAt": "2023-07-25T20:00:14.930Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c01edd8ed97d0010166461",
//           "text": "кайф",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "балда"
//           },
//           "createdAt": "2023-07-25T19:13:33.047Z",
//           "updatedAt": "2023-07-25T19:13:33.047Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c00ef48ed97d0010166460",
//           "text": "2",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "kazel"
//           },
//           "createdAt": "2023-07-25T18:05:40.001Z",
//           "updatedAt": "2023-07-25T18:05:40.001Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c009a28ed97d001016645f",
//           "text": "2",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "kazel"
//           },
//           "createdAt": "2023-07-25T17:42:58.563Z",
//           "updatedAt": "2023-07-25T17:42:58.563Z",
//           "__v": 0
//       },
//       {
//           "_id": "64c0094f8ed97d001016645e",
//           "text": "1",
//           "user": {
//               "email": "tarasov14.08.2002@gmail.com",
//               "name": "kazel"
//           },
//           "createdAt": "2023-07-25T17:41:35.512Z",
//           "updatedAt": "2023-07-25T17:41:35.512Z",
//           "__v": 0
//       }
//   ]
// }
