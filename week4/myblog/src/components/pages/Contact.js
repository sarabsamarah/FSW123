import React from 'react'



function Contact () {
    return  <>
    <h1>Contact</h1>
    <h5>Can we be email buddies?</h5>
    <form>
      <input type="text" placeholder="First Name"></input>
      <br></br>
      <input type="text" placeholder="Last Name"></input>
      <br></br>
      <input type="email" placeholder="Email"></input>
      <br></br>
      <input type="tel" placeholder="Phone"></input>
      <br></br>
      <button type= "submit">Submit</button>
    </form>

    </>
}

export default Contact;