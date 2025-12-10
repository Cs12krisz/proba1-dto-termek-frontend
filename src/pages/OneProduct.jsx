import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function OneProductComponent({elem}) {
    return (
    <div>
        <div className="card" style={{ width: "400px" }}>
            <div className="card-body">
                <h4 className="card-title">{elem.name}</h4>
                    <h2>{elem.price}</h2>
                    <Link to={"/products"}><i className="bi bi-paragraph">Vissza</i></Link>
            </div>
        </div>
    </div>
    )
}

function OneProduct() {
    const params = useParams();
    const id = params.productId;
    const [adat, setAdat] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5198/api/Products/${id}`)
            .then((res) => (res.ok ? res.json() : []))
            .then((tartalom) => setAdat(tartalom));
    }, [id])

    return (
        <div className="row m-5 p-5 border">
            <OneProductComponent elem={adat} />
        </div>
    )
}

export default OneProduct;
