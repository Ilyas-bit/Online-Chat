const modalWindow: HTMLElement | null = document.getElementById("modal-1");
const modalWindowAuthorization: HTMLElement | null =
  document.getElementById("modal-2");
const modalWindowConfirmation: HTMLElement | null =
  document.getElementById("modal-3");

export function modalWindowVisible() {
  if (modalWindow) {
    modalWindow.style.visibility = "visible";
    modalWindow.style.opacity = "1";
  }
}

export function modalWindowHidden() {
  if (modalWindow) {
    modalWindow.style.visibility = "hidden";
    modalWindow.style.opacity = "0";
  }
}

export function modalWindowAuthorizationVisible() {
  if (modalWindowAuthorization) {
    modalWindowAuthorization.style.visibility = "visible";
    modalWindowAuthorization.style.opacity = "1";
  }
}

export function modalWindowAuthorizationHidden(event) {
  event.preventDefault();
  if (modalWindowAuthorization) {
    modalWindowAuthorization.style.visibility = "hidden";
    modalWindowAuthorization.style.opacity = "0";
  }
}

export function modalWindowConfirmationVisible(event) {
  event.preventDefault();
  if (modalWindowConfirmation) {
    modalWindowConfirmation.style.visibility = "visible";
    modalWindowConfirmation.style.opacity = "1";
  }
}

export function modalWindowConfirmationHidden(event) {
  event.preventDefault();
  if (modalWindowConfirmation) {
    modalWindowConfirmation.style.visibility = "hidden";
    modalWindowConfirmation.style.opacity = "0";
  }
}
