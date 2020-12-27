const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
 // token validation
 console.log("Working Activated");

 let bearerHeader = req.headers["authorization"];
 console.log("Triggered a token check", bearerHeader);

 if (typeof bearerHeader !== "undefined") {
   const bearer = bearerHeader.split(" ");
   const bearerToken = bearer[1];
   req.token = bearerToken;

   let verified = jwt.verify(req.token, "waffles");
   console.log("Here's the verified token", verified);

   req.userId = verified._id;
   next();
  }
  else {
    res.status(403).send("Not working with auth");
  }
};
