var user = "pweb_C";
var pass = "123123";
var error="";
var Login = document.getElementsByClassName('button');

Login.addEventListener ('click', function(e) {
    e.preventDevault();
});

function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    let merah = document.querySelector('.merah');
    if (username == user && password == pass){
        // console.log(username + password + "is logged in!!")
        let button = document.querySelector('button[data-toggle = "modal"]');
        let modal = document.querySelector('.modal');
        

        modal.classList.add('show');

        modal.addEventListener('click', function(){
            this.classList.remove('show');
        }
        );

        modal.querySelector('.modal-content').addEventListener ('click', function() {
            e.stopPropragation();
        }
        );
      
    }

    // else {
    //     // console.log("incorrect username or password");
    //     error = " Invalid Username or Password. ";
    //     document.getElementById( "error_para" ).innerHTML = error;
    //     return false;
    // }
    else  {
        // console.log("incorrect username or password");
        merah.classList.add('show1');

        merah.addEventListener('click', function() {
            this.classList.remove('show1');
        });
    } 
}