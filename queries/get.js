const { con } = require("../connetion/con");

const GET = () => {
  con
    .query("SELECT * FROM user", (err, result, fields) => {
      if (err) throw err;
    })
    .then((data) => {
      console.log(data);
    });
};
exports.GET = GET;
