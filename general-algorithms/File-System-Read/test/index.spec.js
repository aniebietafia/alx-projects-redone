const chai = require("chai");
const app = require("../index");
const Promise = require("bluebird");
const should = chai.should();
const path = require("path");
const ROOT_DIR = path.resolve("./");
const TEST_DATA_STORE = ROOT_DIR + "/test/data-store";
const data = require("../data.json");
const { v4: uuid_v4 } = require("uuid");
const fs = require("fs");
const generateRandomFile = (path, contents) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, contents, "utf8", (err) => {
      if (err) reject(err);
      else resolve(JSON.parse(contents));
    });
  });
};
describe("file_system_read_basics", () => {
  it("should read the file and return a JSON from the file system", (done) => {
    app(ROOT_DIR + "/data.json").then((result) => {
      result.should.eql(data);
      done();
    });
  });

  it("should read the random generated file from the FS", (done) => {
    let path = TEST_DATA_STORE + `/${uuid_v4()}.json`;
    generateRandomFile(path, '{ "TEST": "VALUE" }').then((file) => {
      app(path).then((result) => {
        result.should.eql(file);
        done();
      });
    });
  });

  it("should return a JSON invalid error message", (done) => {
    app(`${TEST_DATA_STORE}/invalid.json`).catch((err) => {
      err.message.should.eql("JSON Invalid");
      done();
    });
  });

  it("should return a File Missing error message", (done) => {
    app(`${TEST_DATA_STORE}/test.json`).catch((err) => {
      err.message.should.eql("File Does Not Exist");
      done();
    });
  });

  it("should return a Path is a Directory message", (done) => {
    app(ROOT_DIR + "/test").catch((err) => {
      err.message.should.eql("Path is a directory");
      done();
    });
  });
});
