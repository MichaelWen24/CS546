const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.get("/", async(req, res) => {
    let user = await userData.getuserbyid(req.cookies.AuthCookie);
    let authenticated = user !== null;
    if(authenticated){
        data = {
            title: "Info",
            user: user
        }
        res.render("private", data);
    }
    else{
        let data = {
            title: "Error",
            description: "User is not logged in!"
        }
        res.status(403).render("error", data);
    }
});
module.exports = router;