import { useRef } from "react"

function SignIn() {


    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const submitHandler = (event) =>{
        event.preventDefault();

        var formValueObject = {
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

export default SignIn;


// Synthetic Events in REact
//  What is a wrapper