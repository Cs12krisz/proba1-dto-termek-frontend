import { useNavigate } from "react-router-dom";

export const NewCustomer = () => {

    const navigate = useNavigate();
    return (
       <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új Customer</h2>
            <form
            onSubmit={(event) => {

            event.persist();
            event.preventDefault();
            fetch(`http://localhost:5198/api/Customers`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    name: event.target.elements.name.value,
                }),
            })
            .then(() =>
            {
                navigate("/customers");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Customer név:</label>
                <div className="col-sm-9">
                <input type="text" name="name" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Küldés
            </button> &nbsp;&nbsp;&nbsp; <button type="reset" className="btn btn-danger">
                Mégsem
            </button>
            </form>
        </div>
    );
}

export default NewCustomer;