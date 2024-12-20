import { useEffect, useRef, useState } from "react";

export function SignIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [signInSuccess, setSignInSuccess] = useState(false);

    const fetchUserDetails = async () => {
        let email = localStorage.getItem("email");
        var productsResponse = await fetch(`http://localhost:8080/user/${email}`, {
            headers: {
                Authorization: localStorage.getItem("authToken"),
            },
        });
        var userDetails = await productsResponse.json();
        console.log("The user details are: ", userDetails);
        if (productsResponse.ok && productsResponse.status == "200") {
            localStorage.setItem("user", userDetails);
        } else {
            // setShowFailureAlert(true);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, [signInSuccess]);

    const signInHandler = async (event) => {
        event.preventDefault();

        var formValuesObject = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        console.log("The event is: ", event);
        console.log("The form values are  is: ", formValuesObject);

        if (formValuesObject.email && formValuesObject.password) {
            console.log("Submit this form");
            // fetch("localhost:8080/signup")
            // Make an api/web service call to submit the user details
            const signInResponse = await fetch("http://localhost:8080/user/signin", {
                method: "POST",
                body: JSON.stringify(formValuesObject),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (signInResponse.ok && signInResponse.status == "200") {
                const signInResponseData = await signInResponse.json();
                localStorage.setItem("authToken", signInResponseData?.token);
                localStorage.setItem("email", formValuesObject.email);
                setSignInSuccess(true);
                alert("Signin success");
            } else {
                alert("Signin failed");
            }

        } else {
            alert("Form is invalid");
        }
    };

    return (
        <>
            <form className="g-3" onSubmit={signInHandler}>
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            ref={emailRef}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            ref={passwordRef}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-2 justify-content-md-center">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

// Synthetic Events in REact
//  What is a wrapper