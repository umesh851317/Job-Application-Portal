const { getUser } = require("../service/authCoder");

async function checkAuthentication(req, res, next) {
       const authorizationHeaderValue = req.cookies.token // recieve token as cookies....
       if (!authorizationHeaderValue) {
              return res.status(401).json({
                     message: "Token not provided...",
              });
       }
       const user = getUser(authorizationHeaderValue);       // verify the token
       req.user = user;     // send to the next midlware or controller (it's like it attach user in req)
       next();
}

module.exports = { checkAuthentication }