
import Header from './Header'
import React, { useState,useEffect } from "react"

const Contact = () => {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [country, setCountry] = useState("India")
     const[feedback,setFeedback] =useState()
    const handleChange = (e) => {
        let name = e.target.name
        if (name==="firstname") {
           setFname(e.target.value) 
        }
        if (name==="lastname") {
           setLname(e.target.value) 
        }
        if (name==="country") {
           setCountry(e.target.value) 
        }
        if (name==="subject") {
           setFeedback(e.target.value) 
        }

        console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`thanks  ${fname} from ${ country } to contact with us  `)
    }

     return (
         <div className="container">
             <Header/>
             <h3>Contact Form</h3>
             <form onSubmit={handleSubmit} >
    <label htmlFor="fname">First Name</label>
                 <input type="text" onChange={ handleChange} id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" onChange={ handleChange} id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select onClick={ handleChange} id="country" name="country">
      <option value="australia">India</option>
      <option value="canada">Canada</option>
                     <option value="usa">USA</option>
                     <option value="australia">Australia</option>
      <option value="canada">UK</option>
      <option value="usa">Italy</option>
    </select>

    <label for="subject">Subject</label>
    <textarea onChange={ handleChange} id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
  </form>
             </div>

       

    
        

    )
}
export default Contact