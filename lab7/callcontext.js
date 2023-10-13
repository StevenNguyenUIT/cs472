function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`); 
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

// when you call askPassword, the value of this inside it becomes undefined
// askPassword(user.loginOk, user.loginFail);


// use wrapper
askPassword(()=>{ user.loginOk()}, ()=>{ user.loginFail()}); 

// user call
askPassword(() => user.loginOk.call(user), () => user.loginFail(user)); 
    
// use apply
askPassword(function () { user.loginOk.apply(user)}, 
    function () { user.loginFail.apply(user) });

// use bind
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ': ' + student);
        }.bind(this)); // bind this to the function context to get the title
    }
};
group.showList();
