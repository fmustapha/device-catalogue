import { axios } from "axios";
import apiUrl from "../../../config.json";

const apiPath = apiUrl + "/watches";

export async function getWatches() {
  try {
    const response = await axios.get(apiPath);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}
