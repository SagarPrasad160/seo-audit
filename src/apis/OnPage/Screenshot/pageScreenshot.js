import axios from "axios";

const getPageScreenshot = async (url) => {
  const post_array = [];
  post_array.push({
    url: url,
  });
  axios({
    method: "post",
    url: "https://api.dataforseo.com/v3/on_page/page_screenshot",
    auth: {
      username: "sagarprasad480@gmail.com",
      password: "da357a49e523026e",
    },
    data: post_array,
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (response) {
      var result = response["data"]["tasks"];
      // Result data
      return result;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { getPageScreenshot };
