import { useEffect, useState } from 'react';
import '../index.css';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';


const NavBar = ({signInUser, categories}) => {
const {search, setSearch} = useState('')
const {cartValue , setCartValue} = useState(1)

useEffect(()=>{
  
})

const searchProduct =() =>{

}
    return (
   <div className="nav-bar">
    <div className="mobile-nav">
      <div className="menu-section">
      <h2>STORE</h2>  
      <div className="side-menu">
      <FontAwesomeIcon icon={faBars} />
      </div>
      </div>
    </div>

     <div className="top-section">
      <h2>STORE</h2>
      <div className="input-part">
         <input
          type="text" 
         placeholder='search Product'
         value={search}
         onChange={e=> setSearch(e.target.value)}
          />
          <button onClick={searchProduct} className="search-btn">SEARCH</button>
      </div>
  
      <div className="second-part">
          <div className="cart">
          <FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />
          <span>Cart</span>
          <div className="number">
        <h6>{cartValue}0</h6>
        </div>
          </div>
          <div className="User" onClick={signInUser}>
          <FontAwesomeIcon icon={faUser} className='userIcon' />
            <span>Sign in</span>
          </div>
      </div>
     </div>
     <div className="bottom-section">
      <ul className='nav-list'>
         <li className='categories' onClick={categories}>
          <FontAwesomeIcon icon={faBars} />
          <p>All Categories</p>
          </li>
         <li className='brands'>Brands</li>
         <li className='contacts'>Contact Us</li>
         <li className='sell'>Sell</li>
         <li className='offers'>Offers</li>
      </ul>
     </div>
     </div>
       
      );
}
 
export default NavBar;