import React, { useState,useEffect } from "react";
import { getPromocode,createPromocode } from "./apiUtils/api";

function Promo() {
  const [promocode, setPromocode] = useState([]);
  const [promoname, setpromoname] = useState('');
  const [discount, setdiscount] = useState('');
  const [post, setpost] = useState(null);

  useEffect(() => {
    // setPromocodeF()
   
  }, [])
  

// const setPromocodeF = () =>{
//   getPromocode()
//   .then((response) => {
//     setPromocode(response?.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }
createPromocode(promoname,discount)
.then(response=>{
  setpost(response.data)
})

  
  return (
    <div className="container py-5">
      <table className="table mb-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Discount</th>
          </tr>
        </thead>
        <tbody>
          {promocode.map((res) => {
            return (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.discount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     <h1>Add Promo</h1>

     <div className="form-group mb-3">
          <label>Name</label>
          <input className="form-control" value={promoname} onChange={(e)=>{
              setpromoname(e.target.value)
          }}/>
     </div>
     <div className="form-group mb-3">
          <label>Discount</label>
          <input className="form-control" value={discount}  onChange={(e)=>{
              setdiscount(e.target.value)
          }}/>
     </div>
     <div className="form-group mb-3">
         <button className="btn btn-primary" onClick={createPromocode}>Submit</button>
     </div>
    
    </div>
  );
}

export default Promo;
