import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function footer() {
    return (
        
            
   <div className="footer-style">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
    
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Shubham.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  </div>




    )
}
