// promise - an object created using Promise() constructor function and have 2 property
// state -
// value -

/* 
    state - Possible value
        - pending
        - fulfiled
        - rejection
*/

/* 
    value - Possible value
        - Undefiend
        - Return value or error
*/

// ------------------Basic example--------------------

// function promiseExecuter(){
//     setTimeout(() => {
//         console.log("Promise Executed");
//     },1000)
// }
// var promise1 = new Promise(promiseExecuter); // create a simple promise

// ----------------------------------------------------


// On succes this call then 
// --------------- Then -----------------
// function promiseExecuter(resolve,reject){
//     setTimeout(() => {
//         resolve({response : "response1"})
//         console.log("Promise Executed");
//     },1000)
// }

// let responseSuccesVal;
// var promise1 = new Promise(promiseExecuter);
// promise1.then((SomeValue) => {
//     responseSuccesVal = SomeValue;
// })
// --------------------------------------


// On error it callls catch
// ------------ Catch -----------------
// function promiseExecuter(resolve,reject){
//     setTimeout(() => {
//         reject({response : "response1"})
//         console.log("Promise Executed");
//     },1000)
// }
// let responseErrorVal;
// var promise1 = new Promise(promiseExecuter);
// promise1.catch((SomeValue) => {
//     responseErrorVal = SomeValue;
// })
// -----------------------------------