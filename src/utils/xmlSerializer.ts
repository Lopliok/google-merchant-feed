var EasyXml = require("easyxml");

export var serializer = new EasyXml({
  singularize: false,
  rootElement: "rss",
  version: "2.0",
  dateFormat: "ISO",
  rootArray: "channedl",
  manifest: true,
  unwrapArrays: true,
});
