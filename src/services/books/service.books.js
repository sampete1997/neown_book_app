import axios from "axios";
import { BASE_URL } from "../service.config";


export async function getBooksList(payload) {

  try {
    const result = await axios.post(
      `${BASE_URL}/api/books/getbooksList`,
      payload,
      {
        headers: {
          Authorization: `Bearer`, // Add your token or other headers here
          "Content-Type": "application/json",
        },
      }
    );
    const response = result?.data
    return response;

  } catch (err) {
    throw new Error(err);
  }
}

export async function recommendationList(payload) {

  try {
    const result = await axios.post(
      `${BASE_URL}/api/recommendation/query`,
      payload,
      {
        headers: {
          Authorization: `Bearer`, // Add your token or other headers here
          "Content-Type": "application/json",
        },
      }
    );
    const response = result?.data
    return response;

  } catch (err) {
    throw new Error(err);
  }
}

