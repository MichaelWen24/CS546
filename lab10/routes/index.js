const loginRoute = require("./login");
const privateRoute = require("./private");
const userData = require("../data/users");

function constructorMethod(app) {

	app.get("/", async(req, res) => {
		let authenticated;
		try{
			authenticated = await userData.getuserbyid(req.cookies.AuthCookie) !== null;
		} 
		catch (error){
			authenticated = false;
		}
		if(authenticated){
			res.redirect('/private');
		}
		else{
			res.render("login",{title : "Home"}); 
		}
	});

	app.use("/login", loginRoute);

	app.get("/logout", async (req, res) => {
		res.clearCookie("AuthCookie");
		res.render("login",{title: "Home"});
	});

	app.use("/private", privateRoute);

	app.use("*", (req, res) => 
    {
        res.status(404).json({ error: "Page not found" });
    });
};

module.exports = constructorMethod;