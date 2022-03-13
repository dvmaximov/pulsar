const fs = require("fs");

const version = 1.0;
const dbPath = "../../db.json";

let settings = [];
let db = {};

function update() {
  fs.readFile(dbPath, (err, res) => {
    if (err) throw err;
    db = JSON.parse(res.toString());
    settings = db["settings"];
    runUpdate();
  });
}

function setNewVersion() {
  console.log("test");
  settings[4]["value"] = version;
  db["settings"] = [...settings];
  fs.writeFile(dbPath, JSON.stringify(db), (err) => {
    if (err) throw err;
  });
}

function runUpdate() {
  const oldVersion = settings[4]["value"];
  console.log(`update form ${oldVersion} to ${version}`);
  if (version > oldVersion) {
    setNewVersion();
  }
}

update();
