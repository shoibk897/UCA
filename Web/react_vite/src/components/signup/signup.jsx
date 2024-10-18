import { useRef } from "react"

function SignUp() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUpHandler = async (event) => {
        event.preventDefault();

        if (firstNameRef)
            var formValuesObject = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };

        console.log("The event is: ", event);
        console.log("The form values are  is: ", formValuesObject);

        if (formValuesObject.firstName && formValuesObject.lastName && formValuesObject.email && formValuesObject.password) {
            console.log("Submit this form");

            var result = await fetch("http://localhost:3001/users", {
                method: "POST",
                body: JSON.stringify(formValuesObject)
            })

            if (result.ok && (result.status == "201" || result.status == "201")) {
                alert("Created Succesfully");
            }
            else {
                alert("Some Error");
            }

            console.log("result : ", result);
        }
        else {
            alert("some error");
        }
    };

    const updateFirstName = () => {
        console.log("on change called: ", firstNameRef);
        firstNameRef.current.value = firstNameRef.current.value.toUpperCase()
    };

    return (
        <>
            <div>Sign Up Page</div>
           <form>
            <div class="mb-3">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname" ref={firstNameRef} aria-describedby="emailHelp" onChange={updateFirstName}/>
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" ref={lastNameRef}  aria-describedby="emailHelp" />

            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" ref={emailRef}  aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" ref={passwordRef}  id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={signUpHandler}>Submit</button>
        </form>
        </>
    );
}

export default SignUp;


// Synthetic Events in REact
//  What is a wrapper
// signup