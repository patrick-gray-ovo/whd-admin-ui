import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export default class RiseSlackBot {
    async postMessage(channel, message) {
        const headers = {
            Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
            "Content-type": "application/json",
        };

        const data = {
            channel,
            text: message,
        };

        try {
            return axios({
                method: "post",
                url: "https://slack.com/api/chat.postMessage",
                headers,
                data,
            });
        } catch (err) {
            console.log(err);
        }
    }

    async upload(pathToFileToUpload) {
        const data = new FormData();

        data.append("file", fs.createReadStream(pathToFileToUpload));

        const config = {
            method: "post",
            url: "https://slack.com/api/files.upload?channels=rise-daily-tests",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
                ...data.getHeaders(),
            },
            data,
        };

        // @ts-ignore
        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
