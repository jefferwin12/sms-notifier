var TeleSignSDK = require('telesignsdk');

const customerId = "B8CCFAD2-A0D3-4AD4-B9DE-297A264EB27C";
const apiKey = "LDAcp+tX0PS+CYmC1aC9zJM0u94cTCNX2wcU2ur9tGY/AKLdcHudzhEq8YIXAr4/3XlO8yGnItYI7a733y5G6A==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber = "+639064763492";
const message = "we noticed that your account is below the maintaining balance! we suggest that you go to the nearest unionbank site to deposit so that you won't be charged by unnecessary fees. thank you ";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
