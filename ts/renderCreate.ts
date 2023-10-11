import { messagesList } from "../ts/index";
import { compareAsc, format } from "date-fns";

export function createElementTemplate(
  textValue: string,
  name: string,
  time: string
) {
  // console.log(name);
  const message: HTMLTemplateElement | null =
    document.querySelector("#message");
  if (message !== null) {
    const templateContent = message.content.cloneNode(true);
    const messageText = templateContent.querySelector(".message-text");
    messageText.textContent = textValue;

    const timeText = templateContent.getElementById("time");
    const timeValue = format(new Date(time), "H:mm");

    timeText.textContent = timeValue;

    // if (status === "for-me") {
    const messageForMe = templateContent.querySelector(
      ".chat__message-from-me_unsent"
    );
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
}

const chat: Element | null = document.querySelector(".chat__body");

interface messages {
  messages: {
    _id: string;
    text: string;
    user: {
      email: string;
      name: string;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
}

export function renderMessages(messagesList: messages) {
  messagesList.messages.forEach((itemMessage) => {
    if (chat != null) {
      chat.append(
        createElementTemplate(
          itemMessage.text,
          itemMessage.user.name,
          itemMessage.updatedAt
        )
      );
    }
  });
  scrollDown();
}


export function clearChatDom() {
  if (chat != null) chat.replaceChildren();
}

export function scrollDown() {
  const block: Element | null = document.querySelector(".chat__body-shell");
  if (block) block.scrollTop = block.scrollHeight;
}
