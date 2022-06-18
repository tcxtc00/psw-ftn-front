import React, {useState} from 'react'
import '../../pages/pharmacy/pharmacy.css'
import { toast } from 'react-toastify'
import { pharmacyService } from '../../api/PharmacyService';

const GetMedicine = () => {
    
    const medicines = [

        {   
            id: 0,
            name: "Bromazepan"
        },
           
        {   id: 1,
            name: "Acisal"
        },
        
        {   id: 2,
            name: "Ksanaks"
        },
    
        {   id: 3,
            name: "Brufen"
        }]

    const [quantity, setQuantity] = useState(null);
    const [name, setName] = useState(medicines[0].name);
    const [responsePharmacy, setResponsePharmacy] = useState("");

    const getQuantityFromInput = (e) => {
        setQuantity(e.target.value);
    }

    const getNameFromSelect = (e) => {
        setName(e.target.value);
    }

    const getMedicine = (params) => {
        return async (event) => {
          event.preventDefault()
          try {
            const res = await pharmacyService.postMedicine(params)
            console.log(res)
    
            if(res.status === 200)
            {
              toast.success("Success")
              setResponsePharmacy(`Thank you for your order. Medicine Name: ${res.data.data.name} Quantity: ${res.data.data.quantity}. Supplies left in Pharmacy: ${res.data.data.supplies}.`)
              console.log(responsePharmacy)
            }
    
          } catch (err) {
            toast.error(`${err.response.status}: ${err.response.data.message}`)
            console.log(err.response.data)
          }
        }
    }    

  return (
    <form onSubmit={getMedicine({ name: name, quantity: quantity})} className='form-pharmacy'>
           <label>Medicine</label>
           <select
            onChange={getNameFromSelect}
            name="Medicine"
            className="box-selector center"
          >
           {medicines.map((medicine) => (
            <option key={medicine.id} value={medicine.name}>
              {medicine.name}
            </option>
          ))}
          </select>
           <label>Quantity</label>
           <input
            id='quantity'
            placeholder="Quantity"
            required
            type="number"
            className="box"
            onChange={getQuantityFromInput}
          />
          <label>Response from Pharmacy</label>
          <textarea
           id='response'
           disabled={true}
           type="text"
           className="box-pharmacy textarea-pharmacy"
           value={responsePharmacy}
          />
          <input
            type="submit"
            className="btn"
          />
        </form>
  )
}

export default GetMedicine