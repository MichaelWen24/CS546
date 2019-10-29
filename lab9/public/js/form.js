//reference from my lab8 code and lecture code
function checkpalindrome(text){
    text = text.toLowerCase();
    text = text.replace(/[^\w]/g,'');

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

const Form = document.getElementById("Form");
if (Form) {
    const phrase = document.getElementById("phrase");
    Form.addEventListener("submit", event => {
        event.preventDefault();
        if (phrase.value) {
            $("#error").hide();
            let ispalindrome = checkpalindrome(phrase.value);
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(phrase.value));
            li.setAttribute("class",ispalindrome ? "is-palindrome" : "not-palindrome");
            let attempts = document.getElementById("attempts");
            attempts.appendChild(li);
            $("#Form").trigger('reset');
            $("#phrase").focus();
        }
        else {
            $("#error").show();
            $("#error").html("Please input a valid string as text!");
            $("#phrase").focus();
        }
    });
}