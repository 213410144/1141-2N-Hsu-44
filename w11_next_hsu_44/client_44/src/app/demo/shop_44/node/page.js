import Wrapper from '@/assets/wrappers/midterm/Shop_44';
// import { Link } from 'react-router-dom';

import Link from "next/link";

const ShopNodeMainPage_44 = () => {
  return (
<Wrapper>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/hats.png"
              alt="hats"
            />
            <Link href="/demo/shop_44/node/hats" className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/jackets.png"
              alt="jackets"
            />
            <Link href="/demo/shop_44/node/jackets" className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/sneakers.png"
              alt="sneakers"
            />
            <Link href="/demo/shop_44/node/sneakers" className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/womens.png"
              alt="womens"
            />
            <Link href="/demo/shop_44/node/womens" className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="/images/midterm/homepage/mens.png"
              alt="mens"
            />
            <Link href="/demo/shop_44/node/mens" className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopNodeMainPage_44;

