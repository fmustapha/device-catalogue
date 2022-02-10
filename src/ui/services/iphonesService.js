import axios from "axios";
import apiBaseUrl from "../../../config.json";

const apiUrl = apiBaseUrl.apiUrl;
const apiPath = apiUrl + "/iphones";

export async function getIPhones() {
  try {
    const response = await axios.get(`${apiPath}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}
