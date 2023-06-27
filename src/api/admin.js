import axios from "axios";

const BASE_URL = `http://192.168.1.193:8000/`; //api url it must have a api perfix !
const api_url = (uri = "") => `${BASE_URL}${uri}`; // base_url must be config.api_url
const opt = (head = { token: "" }) => ({
  headers: { "x-access-token": head?.token, "content-type": head?.contentType },
});

//sign in admin---------------------------------------------->

export const loginAdmin = (data) =>
  axios.post(api_url(data?.address), data.body);
//post user data to server and get response

//--------------------------------------
export const getAllArticles = (data, head) =>
  axios.get(api_url(data?.address), opt(head));

export const postArticle = (data, head) =>
  axios.post(api_url(data?.address), data?.body, opt(head));

export const getArticle = (data, head) =>
  axios.get(api_url(data?.address), opt(head));

export const putArticle = (data, head) =>
  axios.put(api_url(data.address), data.body, opt(head));

export const deleteArticle = (data, head) =>
  axios.delete(api_url(data.address), opt(head));
