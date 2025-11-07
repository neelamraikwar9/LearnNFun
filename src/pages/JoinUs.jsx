import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './joinus.css';


const JoinUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    contactNumber: "",
    occupation: "",
    qualification: "",
    purpose: "",
    duration: ""
  })


  function handleOnChange(event){
    const {name, value} = event.target;
    setForm((prev) => ({ ...prev, [name] : value}));
    
  }


  async function handleSubmit(){
    try{
    const res = axios.post("https://lnf-backend.vercel.app/forms", JSON.stringify(form), {headers : {"Content-Type" : "application/json" }});
    console.log(res.data,  "Details added successfully");

    toast.success("Details added successfully", {
      autoClose : 5000
    });


    setForm({
    name: "",
    city: "",
    contactNumber: "",
    occupation: "",
    qualification: "",
    purpose: "",
    duration: ""
  });
  } catch(error){
    console.log("Error Submitting Detail", error)
     if (error.response) {
        console.error("Server error:", error.response.data);
        console.error("Status:", error.response.status);
      } else if (error.request) {
        console.error("Network error:", error.request);
        alert("Network error: Please check your internet connection.");
      } else {
        console.error("Error:", error.message);
        alert(` Error: ${error.message}`);
      }
    }
}


  return (
    <main className='mainFormCon'>
    <div className="wholeFormCon">
      <h1 className="formHeadText">Fill the Form to Join</h1>
      <form onSubmit={handleSubmit} className="formCon">
        <div className='field'>
        <label htmlFor="nam">Name</label>
        <input type="text" id="nam" name="name" value={form.name} onChange={handleOnChange} className="inp" autoComplete="name"/>
        </div>

        <div className='field'>
        <label htmlFor="em">Email</label>
        <input type="text" id="em" name="email" value={form.email} onChange={handleOnChange} className="inp" autoComplete="email"/>
        </div>


         <div className='field'>
        <label htmlFor="cont">Contact Number</label>
        <input type="number" id="cont" name="contactNumber" value={form.contactNumber} onChange={handleOnChange} className="inp" autoComplete="contactNumber"/>
        </div>

        <div className='field'>
        <label htmlFor="cit">City</label>
        <input type="text" id="cit" name="city" value={form.city} onChange={handleOnChange} className="inp" autoComplete="city"/>
        </div>

         <div className='field'>
        <label htmlFor="occ">Occupation </label>
        <input type="text" id="occ" name="occupation" value={form.occupation} onChange={handleOnChange} className="inp" autoComplete="occupation"/>
        </div>


         <div className='field'>
        <label htmlFor="qul">Qualification </label>
        <input type="text" id="qul" name="qualification" value={form.qualification} onChange={handleOnChange} className="inp" autoComplete="qualification"/>
        </div>

         <div className='field'>
        <label htmlFor="pur">Purpose</label>
        <input type="text" id="pur" name="purpose" value={form.purpose} onChange={handleOnChange} className="inp" autoComplete="purpose"/>
        </div>

        <div className='field'>
          <label htmlFor="dur">Duration</label>
          <select id="dur" name="duration" value={form.duration} onChange={handleOnChange} className="sel" autoComplete="off">
            <option value="One month">One month</option>
            <option value="Two month">Two month</option>
            <option value="Three month">Three month</option>
            <option value="Four month">Four month</option>
            <option value="Five month">Five month</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="btn">
        <button type="submit" className="subBtn" >Submit Details</button>
        </div>
      </form>
      </div>

    </main>
  )
}

export default JoinUs;