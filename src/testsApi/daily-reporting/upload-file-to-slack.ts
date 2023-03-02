import RiseSlackBot from "./slack-functions";
const slackbot = new RiseSlackBot();

const channel = "insert-slack-channel-name-here starting with #";
const message = `Message to include when posting to slack`;

slackbot
    .upload("path-to-file-you-want-to-upload")
    .then(() => {
        slackbot.postMessage(channel, message);
    })
    .catch((e) => {
        console.log(e);
        throw new Error(e);
    });
