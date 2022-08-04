import { url, port } from "../../src/helpers";

export default function registration(value) {
  return fetch(`${url}:${port.rest}/api/singup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: value.name,
      email: value.email,
      password: value.password,
      description: value.description,
      photo: value.photo,
      sex: value.sex,
      city: value.city,
      date: value.date,
      status: value.status,
      location: value.location,
    }),
  }).then((res) => res.json());
}
