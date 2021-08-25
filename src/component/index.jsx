import React, {
  useState, useEffect,
   Component
} from 'react'
import Header from './Header'
import Footer from '../hoc/layout/layout/component/footer';
import UploadImg from './UploadImg';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {UserData} from "../redux/action/action"
import "../assest/style.css"


const Home = () => {
  const [state, setstate] = useState([])
  const dispatch = useDispatch()
  const Data = useSelector((state) => {
    console.log("sssssssssss", state.users.list)
    return state.users.list;
  })
    
useEffect(() => {
  
  console.log("dsfdsfdsfds", Data)
  dispatch(UserData());
  
}, [])
    return (
      <div className="container">
        <Header />
        
        <div className="row">
          <p> welcome to index upload</p>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">username</th>
                <th scope="col">Phone number</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{ val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.username}</td>
                    <td>{ val.phone}</td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      
      </div>
    );
}
 
export default Home;