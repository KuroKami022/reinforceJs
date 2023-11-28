//functions capabilities

//callback = call function as an argument-parameter / declaration of a function

function a(){}
function b(a){}
b(a)

//return a function
function a() {
    function b(){

    }
    return b
}

//asign functions to variables / expression of a function
const a = function() {

}

//properties and methods
function a() {

}
const obj = {

}
a.call(obj)

//nested functions
function a() {
    function b() {
        function c() {

        }
        c()
    }
    b()
}
a()

//stored functions inside objects - called methods
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('🚀')
    }
}
rocket.launchMessage()