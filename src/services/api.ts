import axios from "axios"; //axios, que nos permite hacer peticiones HTTP

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000,
});
