import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const ProductsKomponens = ({ elemek }) => {
    return (
        <div>
            {elemek.map((elem, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h4 className="card-title">{elem.name}</h4><br />
                        <h2>{elem.price}</h2>
                        <Link to={"/products/" + elem.id}><i className="bi bi-eye">Részletek</i></Link>
                    </div>
                </div>

            ))}
        </div>
    )
}

function Products() {
    const [adatok, setAdatok] = useState([])

    useEffect(() => {
        fetch("http://localhost:5198/api/Products")
            .then((response) => (response.ok ? response.json() : []))
            .then((tartalom) => setAdatok(tartalom))
    })

    return (
        <>
            <h1>Products</h1>
            <ProductsKomponens elemek={adatok}></ProductsKomponens>
        </>
    )
}

export default Products