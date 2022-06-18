import React, {useState} from 'react'
import '../../pages/pharmacy/pharmacy.css'
import { toast } from 'react-toastify'
import { pharmacyService } from '../../api/PharmacyService';

const CreateRecipe = (props) => {
const [therapy, setTherapy] = useState(null);
const [medicine, setMedicine] = useState(null);

const getTherapyFromInput = (e) => {
    setTherapy(e.target.value);
}

const getMedicineFromInput = (e) => {
    setMedicine(e.target.value);
}

const sendRecipe = (params) => {
    return async (event) => {
      event.preventDefault()
      try {
        const res = await pharmacyService.postRecipe(params)
        console.log(res)

        if(res.status === 200)
        {
          toast.success("Success")
          const inputs = document.querySelectorAll('#doctorName, #medicine, #therapy');

            inputs.forEach(input => {
                input.value = '';
            });
        }

      } catch (err) {
        toast.error(`${err.response.status} ${err.response.data.message}`)
        console.log(err.response.data)
        console.log("error sending")
      }
    }
  }    

  return (
    <form onSubmit={sendRecipe({ doctorName: props.doctorName, medicine: medicine, therapy: therapy})} className='form-pharmacy'>
           <label>Doctors Name</label>
           <input
           id='doctorsName'
           aria-label='Doctor Name'
           value={props.doctorName}
           type="text"
           disabled={true}
           className="box"
           />
           <label>Medicine</label>
           <input
            id='medicine'
            placeholder="Medicine"
            required
            type="text"
            className="box"
            onChange={getMedicineFromInput}
          />
          <label>Therapy</label>
          <textarea
            id='therapy'
            required
            placeholder="Therapy"
            type="textarea"
            className="box-pharmacy textarea-pharmacy"
            onChange={getTherapyFromInput}
          />
          <input
            type="submit"
            className="btn"
          />
        </form>
  )
}

export default CreateRecipe