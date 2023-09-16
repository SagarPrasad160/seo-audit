import axios from "axios";
const password = import.meta.env.VITE_REACT_APP_API_PWD;
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
      password: password,
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
