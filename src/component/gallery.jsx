import React from 'react'
import Header from './Header'
import Footer from "../hoc/layout/layout/component/footer"

import UploadImg from './UploadImg'
export default function gallery() {
    return (
        <div className="container">
            <Header />
            <div className="row content" ></div>
            WELCOME TO GALLERY
            <h1>Start to take great picture experience</h1>
           <UploadImg/>
            
        </div>
    )
}
