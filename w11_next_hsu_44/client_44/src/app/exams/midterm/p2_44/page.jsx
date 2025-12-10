import Wrapper from '@/assets/wrappers/midterm/Shop_44';
// import { Link } from 'react-router-dom';

import Link from "next/link";

const P2_StaticPage_44 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <a href='/' className='logo-container'>
          <img src='/themes/midterm/assets/crown.svg' />
        </a>
        <div className='options'>
          <a href='./overview.html' className='option'>
            Shop
          </a>
          <a href='/shop' className='option'>
            Contact
          </a>
          <a href='/signin' className='option'>
            Sign In
          </a>
          <div className='cart-icon' onclick='cartToggle()'>
            <img
              className='shopping-icon'
              src='/themes/midterm/assets/shopping-bag.svg'
              alt=''
            />
          </div>
          <div className='cart-dropdown'>
            <div className='cart-items'>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Brown Cowboy</span>
                  <span className='price'>4 * $35</span>
                </div>
              </div>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Blue Jean Jacket</span>
                  <span className='price'>1 * $90</span>
                </div>
              </div>
            </div>
            <button className='custom-button'>GO TO CHECKOUT</button>
          </div>
        </div>
      </div>

      <div className='homepage'>
        <div class='directory-menu'>
          <div class='menu-item'>
            <img src='/images/midterm/homepage/hats.png' alt='' />
            <a href='./hats.html' class='content'>
              <h1 class='title'>HATS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='menu-item'>
            <img src='/images/midterm/homepage/jackets.png' alt='' />
            <a href='./jackets.html' class='content'>
              <h1 class='title'>JACKETS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='menu-item'>
            <img src='/images/midterm/homepage/sneakers.png' alt='' />
            <a href='./sneakers.html' class='content'>
              <h1 class='title'>SNEAKERS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='large menu-item'>
            <img src='/images/midterm/homepage/womens.png' alt='' />
            <a href='./womens.html' class='content'>
              <h1 class='title'>WOMENS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='large menu-item'>
            <img src='/images/midterm/homepage/mens.png' alt='' />
            <a href='./mens.html' class='content'>
              <h1 class='title'>MENS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_44;
