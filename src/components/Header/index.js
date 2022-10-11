import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';



const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

 

  return(
    <header className="header">
        <div style={{display: 'flex'}}>
          <div className="logo">Chat</div>
            
            {
              !auth.authenticated ? 
              <ul className="leftMenu">
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>Sign up</NavLink></li>
              </ul> : null
            }
              

            
        </div>
          {/* <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
            {auth.authenticated ? `Hi ${auth.firstName} ${auth.lastName}` : ''}
          </div> */}
          <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="Find people ?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>

        <ul className="menu">
        <li>
         <button className="button button4">Active</button>
         </li>
         <li style={{padding:'0px 10px'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/3524/3524659.png' width="25px"  />
         </li>
         <li style={{padding:'0px 10px'}}>
         <span  className='question'>&#63;</span>
         </li>
          
          
            
             
        </ul>
    </header>
   )

 }

export default Header