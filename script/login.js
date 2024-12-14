// Callback function
function check(val) {
    if (val() === 1) {
        // console.log(d);
        return true;
    } else {
        // console.log(d);
        return false;
    }
}

function validate() {
    var userName = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if ((userName === "admin" ) & ( Number(password) === 12345)) {
        alert('Login Success!!');
        return 1;
    } else {
        alert('Invalid Login');
        return 0;
    }
}
