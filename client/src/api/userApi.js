import axios from "axios";

const API = process.env.REACT_APP_API + "/auth"

export const signUp = async (user) => await axios.post(`${API}/signup`, user);

export const signIn = async (user) => await axios.post(`${API}/signin`, user);

export const profile = async (token) => 
await axios.get(`${API}/profile`, {
 headers: {
    Authorization: token,
 }
}
);