import axios from "axios";

const API = process.env.REACT_APP_API

export const signUp = async (user) => await axios.post(`${API}/signup`, user);

export const signIn = async (user) => await axios.post(`${API}/signin`, user);

export const profile = async () => await axios.post(`${API}/profile`);