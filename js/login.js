// steep:1 add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    //step: 2 get the email address add the input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // console.log(email)
    //step:3 get password
    //set id on the html element
    //get the element
    //get the value from the element
    const userPass = document.getElementById('user-pass');
    const password = userPass.value;
    // console.log(email, password);
    
    //step:4 verify email and password
    //do not verify email and password on the client side;
    if(email === 'shazin@ma.com' && password === 'shazin' ){
          location.href = 'bank.html'
    }
    else{
alert('tui password vol!!! likcos. deke pass lik')
    }
})