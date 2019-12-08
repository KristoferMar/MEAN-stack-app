//Midleware is an async checker of functions

//Middle ware is a function which gets executed on an incoming request.
const jwt = require("jsonwebtoken");

//Authentication check middleware
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
        req.userData = { email: decodedToken.email, userId: decodedToken.userId };
        next();
      } catch (error) {
        res.status(401).json({ message: "You are not authenticated!" });
      }
}