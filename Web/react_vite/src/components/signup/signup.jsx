import { useRef } from "react"

function SignUp() {

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const submitHandler = (event) =>{
        event.preventDefault();

        var formValueObject = {
            firstName : firstNameRef.current.value,
            lastName : lastNameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value
        }

        console.log(formValueObject);

        if(formValueObject.firstName && formValueObject.lastName && formValueObject.email && formValueObject.password)
        {
            console.log("Form Submitted");
        }
        else{
            alert("some error");
        }
    }
    return <>
        <form>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstname" ref={firstNameRef} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastname" ref={lastNameRef}  aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" ref={emailRef}  aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" ref={passwordRef}  id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
        </form>
    </>
}

export default SignUp;


// Synthetic Events in REact
//  What is a wrapper
// signup