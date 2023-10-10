import { getCookie, setCookie } from "typescript-cookie";

export async function getRequest(inputEmail: string) {
  const user = {
    email: inputEmail,
  };

  let response: Response = await fetch("https://edu.strada.one/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  let valueRequest = await response.json();
  console.log(valueRequest);
}

export async function getRequestPost(token: string, event: any) {
  event.preventDefault();
  const user = { name: "Ilyas" };
  let response: Response = await fetch("https://edu.strada.one/api/user", {
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
  let valueRequest = await response.json();
  console.log(valueRequest);
}

export async function getRequestGET() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFhendzeGVkYzIxMDEyMDAzQGdtYWlsLmNvbSIsImlhdCI6MTY5NjY3Mzc4MiwiZXhwIjoxNzAwMjcwMTgyfQ.8ENNQw14JuhOy3SGibIuRDipDWjA2F_RDI8XOK5JpOE";
  let response: Response = await fetch("https://edu.strada.one/api/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "User-Agent": "Your User Agent String",
    },
  });
  let valueRequest = await response.json();
  console.log(valueRequest);
}

export async function getMessageHistory() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFhendzeGVkYzIxMDEyMDAzQGdtYWlsLmNvbSIsImlhdCI6MTY5NjY3Mzc4MiwiZXhwIjoxNzAwMjcwMTgyfQ.8ENNQw14JuhOy3SGibIuRDipDWjA2F_RDI8XOK5JpOE";
  console.log(token);
  let response: Response = await fetch("https://edu.strada.one/api/messages/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "User-Agent": "Your User Agent String",
    },
  });
  const valueRequest = await response.json();
  // console.log(valueRequest);
  return valueRequest;
}
