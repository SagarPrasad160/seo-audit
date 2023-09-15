import axios from "axios";
const password = import.meta.env.VITE_REACT_APP_API_PWD;

// Function to create a task and return the task ID
const createLighthouseTask = async (url) => {
  return new Promise((resolve, reject) => {
    const post_array = [];
    post_array.push({
      url: url,
      for_mobile: false,
    });

    axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/lighthouse/task_post",
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
        resolve(result[0].id);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

// Function to check the status of a task by its ID
const checkTaskStatus = async (task_id) => {
  return axios({
    method: "get",
    url:
      "https://api.dataforseo.com/v3/on_page/lighthouse/task_get/json/" +
      task_id,
    auth: {
      username: "sagarprasad480@gmail.com",
      password: password,
    },
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (response) {
      var result = response["data"]["tasks"];
      // Result data
      return result[0];
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Function to wait for a task to complete and return the result
const waitForLighthouseTaskCompletion = async (taskId) => {
  let isTaskCompleted = false;
  while (!isTaskCompleted) {
    const taskStatus = await checkTaskStatus(taskId);
    if (taskStatus.status_code === 40602) {
      // Task is still in queue, wait for a while and check again
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
    } else if (taskStatus.status_code === 20000) {
      // Task is completed, return the result
      isTaskCompleted = true;
      return taskStatus.result;
    } else {
      // An error occurred
      throw new Error(taskStatus.status_message);
    }
  }
};

export { createLighthouseTask, waitForLighthouseTaskCompletion };
