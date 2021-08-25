import React, { Component } from 'react'
import { useHistory } from "react-router-dom";
import Header from './Header';
import ImageCarousel from "../component/ImageCarousel"
import Sidebar from '../hoc/layout/layout/component/Sidebar';

const Home = () => {
let history = useHistory();
    const handleClick = () => {
        history.push('/gallery')
    }
    return (
      <div className="container">
        <Header />

        <div id="content" className="row ">
          <p>Album.. Click here </p>
          <div className="col">
            <button className="btn btn-primary" onClick={handleClick}>
              Start
            </button>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="sidebarStyle">
                <Sidebar />
              </div>
            </div>
            <div className="col-sm-9">
              <ImageCarousel />
            </div>

            <div className="col-sm-8"></div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
}
 
export default Home;