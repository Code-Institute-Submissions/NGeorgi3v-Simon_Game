// Auth status check
auth.onAuthStateChanged(user => {
    if(user){
        console.log("User logged in: ", user);
        setupUI(user);
    }else{
        console.log("User logged out.");
        setupUI(user);
    }
});

// Sign up
const signUpForm = document.getElementById("signup_form");
signUpForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    // get user details
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;
    const username = signUpForm['username'].value;
    
    // signup user
    auth.createUserWithEmailAndPassword(email, password).then(cred=>{
        // Update user displayName
        auth.currentUser.updateProfile({
            displayName: username
            }).then(function() {
            // Update successful.
            }).catch(function(error) {
            // An error happened.
            console.log("Error occured while creating user...");
        });
        // Add record to db with user ID
        return db.collection('users').doc(cred.user.uid).set({
            name: username,
            record: 0
        });
    }).then(()=>{
        $('#game_register_modal').modal('hide');
        signUpForm.reset();
    });
});

// logout
const logout = document.querySelector("#log_out");
logout.addEventListener("click", e =>{
    e.preventDefault();
    auth.signOut().then( () => {
        $("#user_info").modal('hide');
    });
});

// Login
const loginForm = document.getElementById("login_form");
loginForm.addEventListener("submit", e => {
    const email = loginForm['email_field'].value;
    const password = loginForm['password_field'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        $("#game_login_modal").modal('hide');
        loginForm.reset();
    });
});