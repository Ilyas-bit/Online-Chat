import { compareAsc, format } from "date-fns";
import { getCookie, setCookie } from "typescript-cookie";



import {
  getRequest,
  getRequestPost,
  getRequestGET,
  getMessageHistory,
} from "../ts/request";

// import { setCookieCode, getCookieCode } from "../ts/сookieLs";

import {
  modalWindowVisible,
  modalWindowHidden,
  modalWindowAuthorizationVisible,
  modalWindowAuthorizationHidden,
  modalWindowConfirmationVisible,
  modalWindowConfirmationHidden,
} from "../ts/modalWindow";
import { renderMessages } from "../ts/renderCreate";
import { sendMassage } from "../ts/message";

const settingsBtn: HTMLElement | null = document.getElementById("set");
const modalWindowClose: HTMLElement | null =
  document.querySelector(".modal__btn");
const form: HTMLElement | null = document.getElementById("form");
const chat: HTMLElement | null = document.querySelector(".chat__body");

export const messagesList: (
  | {
    text: string;
    status: string;
    time: string;
    sending?: undefined;
  }
  | {
    text: string;
    status: string;
    sending: string;
    time: string;
  }
)[] = [
    { text: "сходи погуляй", status: "for-me", time: "14:35" },
    { text: "надень шапку", status: "for-me", time: "14:36" },
    { text: "привет", status: "from-me", sending: "sent", time: "14:36" },
    { text: "да, конечно", status: "from-me", sending: "unsent", time: "14:37" },
  ];

async function requestMessages() {
  const requestMessages = await getMessageHistory();
  // console.log(requestMessages);
  renderMessages(requestMessages);
}
requestMessages()

// renderMessages(getMessageHistory());
// modalWindowAuthorizationVisible();

const modalWindowAuthorization = document.getElementById("modal-2");
const buttonAuthorization = document.getElementById(
  "btn-authorization-submit-one"
);
const buttonAuthorizationToConfirmation = document.getElementById(
  "btn-authorization-submit-2"
);
const buttonLogInChat = document.getElementById("log-in-chat");

async function postRequest(event: any) {
  event.preventDefault();
  const inputEmail: HTMLElement | null =
    document.querySelector("#input-email-2");
  if (inputEmail !== null && inputEmail instanceof HTMLInputElement) {
    const inputValueEmail: string = inputEmail.value;
    await getRequest(inputValueEmail);
  }
}

if (buttonAuthorization)
  buttonAuthorization.addEventListener("click", postRequest);
if (buttonAuthorizationToConfirmation)
  buttonAuthorizationToConfirmation.addEventListener("click", () => {
    const inputEmail: HTMLElement | null =
      document.querySelector("#input-email-2");
    modalWindowAuthorizationHidden(event);
    modalWindowConfirmationVisible(event);
  });
if (buttonLogInChat) {
  buttonLogInChat.addEventListener("click", () => {
    const inputToken: HTMLElement | null =
      document.querySelector("#input-token");
    if (inputToken != null && inputToken instanceof HTMLInputElement) {
      setCookie("token", `${inputToken.value}`);
      getRequestPost(inputToken.value, event);
    }
  });
}

// renderMessages(messagesList);

if (settingsBtn) settingsBtn.addEventListener("click", getRequestGET);
if (modalWindowClose)
  modalWindowClose.addEventListener("click", modalWindowHidden);
if (form) form.addEventListener("submit", sendMassage);
