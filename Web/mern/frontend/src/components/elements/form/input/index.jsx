export function Input(props) {
   
    return (
        <>
            <label htmlFor="productName" className="form-label">
                {props.label}
            </label>
            <input
                type="text"
                className="form-control"
                id={props.id}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            />
        </>
    );
}