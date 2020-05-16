const core = require("@actions/core");
const axios = require("axios");

try {
  const tweet = core.getInput("tweet");
  const serverUrl = core.getInput("serverurl");
  scheduleTweet(tweet, serverUrl);
} catch (error) {
  core.setFailed(error.message);
}

async function scheduleTweet(tweet, serverUrl) {
  var res = await axios.post(serverUrl + "/schedulePost", {
    text: tweet,
    scheduledate: new Date(new Date().getTime() + 1 * 60000).toISOString(),
    provider: "twitter",
  });
  if (res) {
    core.setOutput("message", "Successfully tweeted the tweet.");
  } else {
    core.setOutput("message", "Something went wrong.");
  }
}
