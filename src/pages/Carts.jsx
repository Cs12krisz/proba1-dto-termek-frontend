import { useState, useEffect } from "react"

const CartsComponent = ({ elemek }) => {
    return (
        <div>
            {elemek.map((elem, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h4 className="card-title">{elem.customerName}</h4>
                        <h2>{elem.productName}</h2>
                        <h2>{elem.price}</h2>
                        <h2>{elem.quantity}</h2>
                        <h2>{elem.total}</h2>
                    </div>
                </div>

            ))}
        </div>
    )
}

function Carts() {
    const [adatok, setAdatok] = useState([])

    useEffect(() => {
        fetch("http://localhost:5198/api/Cart")
            .then((response) => (response.ok ? response.json() : []))
            .then((tartalom) => setAdatok(tartalom))
    })

    return (
        <>
            <h1>Carts</h1>
            <CartsComponent elemek={adatok}></CartsComponent>
        </>
    )
}

export default Carts