// import

const JoinUs = () => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    contactNumber: "",
    occupation: "",
    qualification: "",
    purpose: "",
    duration: ""
  })


  function handleOnChange(e){
    
  }

  return (
    <main>
      <h1>Fill the Form to Join</h1>
      <form>
        <div>
        <label htmlFor="nam">Name</label>
        <input type="text" id="nam" name="name" value={form.name} onChange={handleOnChange}/>
        </div>

         <div>
        <label htmlFor="cit">City</label>
        <input type="text" id="cit" name="city" value={form.city} onChange={handleOnChange}/>
        </div>

         <div>
        <label htmlFor="cont">Contact Number</label>
        <input type="text" id="cont" name="contactNumber" value={form.contactNumber} onChange={handleOnChange}/>
        </div>

         <div>
        <label htmlFor="occ">Occupation </label>
        <input type="text" id="occ" name="occupation" value={form.occupation} onChange={handleOnChange}/>
        </div>


         <div>
        <label htmlFor="qul">Qualification </label>
        <input type="text" id="qul" name="qualification" value={form.qualification} onChange={handleOnChange}/>
        </div>

         <div>
        <label htmlFor="pur">Purpose</label>
        <input type="text" id="pur" name="purpose" value={form.purpose} onChange={handleOnChange}/>
        </div>

        <div>
          <label htmlFor="dur">Duration</label>
          <select id="dur" name="duration" value={form.duration} onChange={handleOnChange}>
            <option value="One month">One month</option>
            <option value="Two month">Two month</option>
            <option value="Three month">Three month</option>
            <option value="Four month">Four month</option>
            <option value="Five month">Five month</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>

    </main>
  )
}

export default JoinUs;