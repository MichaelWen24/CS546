const express = require("express");
const router = express.Router();
const uuid = require('uuid/v4');
const userData = require("../data/users");
const bcrypt = require('bcrypt');

async function checkpassword(username, password) {
    let user = await userData.getuserbyusername(username);
    let compare = await bcrypt.compare(password, user.hashedpassword);
	if (user && compare){
        return true;
    }
	else{
        return false;
    }
}

router.post("/", async(req, res) => {
    
    let emessage = "";
    let iflogin = false;//beginning
    let username = req.body.username;
    let password = req.body.password;

    try{
        iflogin = await checkpassword(username, password);
    }
    catch(error){
        emessage = "The username or password is incorrect."
    }
    if(iflogin){
        let id = uuid();
        userData.addusersid(username, id);
        res.cookie("AuthCookie", id);
        res.redirect("/private");
    }
    else{
        let data = {
            title: "Home",
            error: emessage
        }
        res.render("login", data);
    }
});

module.exports = router;