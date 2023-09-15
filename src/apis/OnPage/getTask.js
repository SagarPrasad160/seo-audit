import axios from "axios";
const password = import.meta.env.VITE_REACT_APP_API_PWD;
// Function to create an onPage API task and return the task ID
const createOnPageAPITask = async (domainName) => {
  const post_array = [
    {
      target: domainName,
      max_crawl_pages: 1,
      load_resources: true,
      enable_javascript: true,
      custom_js: "meta = {}; meta.url = document.URL; meta;",
    },
  ];

  const response = await axios.post(
    "https://api.dataforseo.com/v3/on_page/task_post",
    post_array,
    {
      auth: {
        username: "sagarprasad480@gmail.com",
        password: password,
      },
      headers: {
        "content-type": "application/json",
      },
    }
  );

  if (response.data.status_code === 20000) {
    // Task creation was successful, return the task ID
    return response.data.tasks[0].id;
  } else {
    throw new Error(response.data.status_message);
  }
};

// Function to check the status of an onPage API task by its ID
const checkOnPageAPITaskStatus = async (task_id) => {
  return new Promise((resolve, reject) => {
    const post_array = [];
    post_array.push({
      id: task_id,
      order_by: ["meta.content.plain_text_word_count,desc"],
      limit: 1,
    });
    axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/pages",
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
        resolve(result[0]);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

// Function to wait for an onPage API task to complete and return the result
const waitForOnPageAPITaskCompletion = async (taskId) => {
  let isTaskCompleted = false;

  while (!isTaskCompleted) {
    const taskStatus = await checkOnPageAPITaskStatus(taskId);

    // Task is completed, check the crawl_progress
    if (taskStatus.status_code === 20000) {
      if (taskStatus.result[0]?.crawl_progress === "finished") {
        isTaskCompleted = true;
        return taskStatus.result;
      } else if (taskStatus.result[0]?.crawl_progress === "in_progress") {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
      }
    } else if (taskStatus.status_code === 40602) {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
    } else {
      // An error occurred
      throw new Error(taskStatus.status_message);
    }
  }
};

export { createOnPageAPITask, waitForOnPageAPITaskCompletion };
