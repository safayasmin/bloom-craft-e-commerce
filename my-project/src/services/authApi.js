import axios from "axios";

const API = "http://localhost:5000";

// REGISTER
export const registerUser = async (userData) => {
  const res = await axios.post(`${API}/users`, userData);
  return res.data;
};

// LOGIN
// export const loginUser = async (email, password) => {
//   const res = await axios.get(
//     `${API}/users?email=${email}`
//   );
// if(res.data[0].password !== password){
//   throw new Error("Password do not match")
// }  
//   return res.data[0];
// };






export const loginUser = async (email, password) => {
  const res = await axios.get(`${API}/users?email=${email}`);

  const user = res.data[0];

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Password do not match");
  }

  if (user.status === "Blocked") {
    throw new Error("Your account has been blocked");
  }

  return user;
};




// GET USER
export const getUserById = async (id) => {
  const res = await axios.get(`${API}/users/${id}`);
  return res.data;
};