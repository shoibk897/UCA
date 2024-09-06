
// -------------- step 1 --------------
// function customPromiseExecutor(){
//     console.log("promise executed");
// }
// function customPromise(executerFuncArgs) {
//     executerFuncArgs();
//     this.state = "pending";
//     let returnValue;
// }
// var customPromise1 = new customPromise(customPromiseExecutor);
//------------------------------------------


// ---------- -Step 2:  resolve and reject ------------------
// function customPromiseExecutor(resolve,reject){
//         setTimeout(() => {
//             reject("sample value")
//             console.log("Promise Executed");
//         },3000)
//     }
// function customPromise(executerFuncArgs) {
//     executerFuncArgs(
//         (responeArgs) => {
//             this.state = "fullfied";
//             console.log("Inside resolve function");
//             console.log("Inside resolve fucntion with value as : ",responeArgs);
            
//         },
//         (errorArgs) => {
//             this.state = "rejected";
//             console.log("Inside reject function");
//             console.log("Inside reject fucntion with value as : ",errorArgs);
//         }
//     );
//     this.state = "pending";
//     let returnValue;
// }
// var customPromise1 = new customPromise(customPromiseExecutor);
// ------------------------------------------------------


// --------- -Step 3 : then and catch ------------------
function customPromiseExecutor(resolve,reject){
        setTimeout(() => {
            resolve("sample value")
            console.log("Promise Executed");
        },3000)
    }
function customPromise(executerFuncArgs) {
    this.state = "pending";
    let succesCallBack = () => {};
    let errorCallBack = () => {};
    
    this.then = (succesArgs) => {
        succesCallBack = succesArgs;
    }
    this.catch = (errorArgs) => {
        errorCallBack = errorArgs;
    }

    executerFuncArgs(
        (responeArgs) => {
            this.state = "fullfied";
            console.log("Inside resolve function");
            console.log("Inside resolve fucntion with value as : ",responeArgs);
            succesCallBack(responeArgs);
            
        },
        (errorArgs) => {
            this.state = "rejected";
            console.log("Inside reject function");
            console.log("Inside reject fucntion with value as : ",errorArgs);
            errorCallBack(errorArgs);
        }
    );
}
var customPromise1 = new customPromise(customPromiseExecutor);
customPromise1.then((SomeValue) => {
    responseSuccesVal = SomeValue;
})
// ------------------------------------------------------
