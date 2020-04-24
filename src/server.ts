import * as express from "express";
import * as bodyParser from "body-parser";
import prepareGoogleFeed from "./googleFeed/prepareGoogleFeed";
import { mockData } from "./mock/data";
import { serializer } from "./utils/xmlSerializer";
var RSS = require("rss");

const getRssFeedForGoogleMerchant = () => {
  var feed = new RSS({
    custom_namespaces: { g: "http://base.google.com/ns/1.0" },
  });
  prepareGoogleFeed(mockData).forEach((item) => feed.item(item));

  return feed.xml();
};

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app = express();

app.use(loggerMiddleware);
app.use(bodyParser.json());

app.get("/google-merchant-feed", (request, response) => {
  let xml;
  response.type("application/xml");

  try {
    xml = getRssFeedForGoogleMerchant();
  } catch (error) {
    console.log(error);
    xml = serializer.render({ error: "Wrong data for google feed" });
  }

  response.send(xml);
});

app.listen(5000);
