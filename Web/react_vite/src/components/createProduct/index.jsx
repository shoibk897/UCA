import { useRef } from "react";

function CreateProduct()
{
    const productNameRef = useRef(null);
    const priceRef = useRef(null);

    const submitHandler = async (event) =>{
        event.preventDefault();
        var formValueObject = {
            name : productNameRef.current.value,
            price : priceRef.current.value
        }

        console.log(formValueObject);

        if(formValueObject.name && formValueObject.price)
        {
            var result = await fetch("http://localhost:3001/ProductList", {
                method: "POST",
                body : JSON.stringify(formValueObject)
            })

            if(result.ok && (result.status == "201" || result.status == "201"))
            {
                alert("Added");
            }
            else{
                alert("Some Error");
            }
        }
        else{
            alert("some error");
        }
    }
    return <>
        <form>
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="exampleInputName1" ref={productNameRef}  aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPrice1" class="form-label">Price</label>
                <input type="number" class="form-control" ref={priceRef}  id="exampleInputPrice1" />
            </div>
            <button type="submit" class="btn btn-primary" onClick={submitHandler}>Submit</button>
        </form>
    </>
}

export default CreateProduct;