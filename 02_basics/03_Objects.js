// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Utkarsh",
    "full name": "Utkarsh Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Utkarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Utkarsh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Utkarsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
JsUser.greeting();
console.log(JsUser.greetingTwo());