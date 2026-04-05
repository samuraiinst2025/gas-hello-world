/**
 * hello world GAS
 * シンプルなhello world表示スクリプト
 */

function helloWorld() {
  Logger.log("hello world");
  console.log("hello world");
}

function doGet(e) {
  return HtmlService.createHtmlOutput("hello world");
}
