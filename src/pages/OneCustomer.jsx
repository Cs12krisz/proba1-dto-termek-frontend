import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function OneCustomerComponent({elem}) {
    return (
    <>
     <div className="card">
        <div className="card-body">
            <div className="card-title"><h2>{elem.name}</h2></div>
            <Link to="/customers"><i className="bi bi-paragraph">Vissza</i></Link>
        </div>
     </div>

    </>
    )
}

function OneCustomer() {
    const params = useParams();
    const id = params.customerId;
    const [adat, setAdat] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5198/api/Customers/${id}`)
    .then((res) => (res.ok? res.json() : []))
    .then((tartalom) => setAdat(tartalom));
  }, [id])

  return (
      <div className="row m-5 p-5 border">
        <OneCustomerComponent elem={adat}/>
      </div>
  )
}

export default OneCustomer;