import { messagesList } from "../ts/index";
import { compareAsc, format } from "date-fns";
import { clearChatDom, renderMessages, scrollDown } from "./renderCreate";

const formField = document.getElementById("formInput") as HTMLInputElement;

export function pushToMessagesList(formValue: any) {
  const timeValue = format(new Date(), "H:mm");
  messagesList.push({
    text: formValue,
    status: "from-me",
    sending: "unsent",
    time: timeValue,
  });
}

export function sendMassage(e: any) {
  e.preventDefault();
  const formValue = formField.value;
  pushToMessagesList(formValue);
  clearChatDom();
  renderMessages();
  formField.value = "";
  scrollDown();
}
