import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CustomersKomponens = ({elemek}) => {
    return(
<div>
    {elemek.map((elem, index) => (
     <div className="card" key={index}>
        <div className="card-body">
    <h4 className="card-title">{elem.name}<br />
    <Link to={"/customers/" + elem.id}><i className="bi bi-eye">Részletek</i></Link>
    </h4>
        </div>
    </div>
      
    ))}
</div>
    )
}


function Customers() {
    const [adatok, setAdatok] = useState([])

    useEffect(() => {
        fetch("http://localhost:5198/api/Customers")
        .then((response) => (response.ok ? response.json() : []))
        .then((tartalom) => setAdatok(tartalom))
    })

    return (
        <>
        <h1>Customers</h1>
        <CustomersKomponens elemek={adatok}></CustomersKomponens>
        </>
    )
}

export default Customers