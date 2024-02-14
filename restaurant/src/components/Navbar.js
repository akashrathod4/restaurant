import React, { useRef } from 'react'
import Logo from "./Images/Logo.jpg";
import { cart } from '../Data';
function Navbar() {
  const searchRef = useRef();
  function searchHandler() {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    barRef.current.classList.remove("active");

  }
  const cartRef=useRef();
  function cartHandler(){
cartRef.current.classList.toggle("active");
searchRef.current.classList.remove("active");
    barRef.current.classList.remove("active");

  }
  /* responsive Bar*/
  const barRef=useRef();
  function navBarHandler(){
    barRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
searchRef.current.classList.remove("active");
  }
  return (

    <>
      <header className="header">
        <a href="#" className='logo'>
          <img src={Logo} alt='' />

        </a>
        <nav className='navbar'>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Menu">Menu</a>
          <a href="#Products">Products</a>
          <a href="#Review">Review</a>
          <a href="#Contact">Contact</a>
          <a href="#Blogs">Blogs</a>
        </nav>
    
       

        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
          <div className="fas fa-bars" id="menu-bar" onClick={navBarHandler} ></div>
        </div>
        <div className='search-form' ref={searchRef}>
          <input type="search" placeholder='Search here...'
            id="search-box" />
          <label htmlFor="search-box"></label>
        </div>
        /*respnavbar*/
        <nav className='respnavbar' ref={barRef}>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Menu">Menu</a>
          <a href="#Products">Products</a>
          <a href="#Review">Review</a>
          <a href="#Contact">Contact</a>
          <a href="#Blogs">Blogs</a>
        </nav>

        <div className="cart-items-container" ref={cartRef}>
          
        {cart.map((items, index) => (
          <div className="cart-item" key={index}>
            <span className="fas fa-times"></span>
            <img src={items.img} alt=''/>
            <div className="content">

            <h3>cart item01</h3>
            <div className="price">$19.99</div>
            </div>
            

          </div>
          

        ))}

        <a href="#" className="btn">checkout now</a>
        </div>
       
      </header>
    </>
  )
}

export default Navbar