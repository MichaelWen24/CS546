const express = require("express");
const router = express.Router();
// const data = require("../data");
// const postData = data.posts;


function checkpalindrome(text){
    text = text.toLowerCase();
    text = text.replace(/[^\w]/g,'');

    // if(!text || typeof text !== "string"){
    //     console.log("You must input a string as test");
    // }

    let left = 0;
    let right = text.length - 1;

    while(left < right){
        if(text[left] != text[right]){
            return false;
        }
        else{
            left++;
            right--;
        }
    }
    return true;
}


router.post("/", (req, res) => {
    let text = req.body['text-to-test']//* not()
    
    if(text){
        let palindrome = checkpalindrome(text);

        let data = {
            title: "The Palindrome Results!",
            text: text,
            palindrome: palindrome,
            class: palindrome ? "success" : "failure"
        };
        res.render("result", data);
    }
    else if(!text || typeof text !== "string"){
        let data ={
            title: "Error: 400",
            description: "You must input a string as test."
        } 
        // console.log(error);
        res.status(400).render("error", data);
    }
  });

  module.exports = router;