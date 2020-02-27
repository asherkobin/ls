const DB = require("../database/connection");

module.exports = {
  all
}

function all() {
  return DB("cohorts");
}