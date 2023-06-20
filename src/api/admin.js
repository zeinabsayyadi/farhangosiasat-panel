import axios from "axios";

const BASE_URL = `https://6476e88d9233e82dd53a804b.mockapi.io/`; //api url it must have a api perfix !
const api_url = (uri = "") => `${BASE_URL}${uri}`; // base_url must be config.api_url
const opt = (head = { token: "" }) => ({
  headers: { "x-access-token": head?.token, "content-type": head?.contentType },
});

//sign in admin---------------------------------------------->

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