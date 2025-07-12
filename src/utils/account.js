import axios from "axios";

export async function emailScan(data) {
  const list = await axios.get("set here your api");
  return list.data.find((user) => (user.email == data ? user : null));
}

export function login(password, account) {
  password == account.password &&
    localStorage.setItem("user", JSON.stringify(account));
}

export function createUser(user) {
  const newUser = {
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    password: user.password,
  };
  const getList = async () => {
    await axios.post("the same here", newUser);
  };
  getList();
  localStorage.setItem("user", JSON.stringify(newUser));
  return newUser;
}

export function logOut() {
  localStorage.removeItem("user");
}
