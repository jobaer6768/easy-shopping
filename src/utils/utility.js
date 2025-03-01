/**
 * Fetches data from the given URL and returns the parsed JSON response.
 *
 * @async
 * @function
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} A promise that resolves to the `data` property of the JSON response.
 * @throws {Error} If there is an issue with fetching or parsing the response.
 */
export async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log("Error Fetching data", error);
  }
}
