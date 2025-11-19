import React from 'react';
import Wrapper from '../assets/wrapper/Navbar_44.jsx'

const Navbar_44 = () => {
  return (
    <Wrapper>
        <header class="header">
      <div class="header-row container" role="navigation" aria-label="Main">
        <div class="header-left">
          <div class="logo">
            <h1>Tku demo</h1>
          </div>
        </div>
        <div class="header-right">
          <ul class="main-menu">
            <li class="menu-item"><a href="#" class="active">Home</a></li>

            <li class="menu-item mega-menu">
              <a href="#">Mega menu +</a>
              <div class="mega-menu-wrapper slideInUp">
                <div class="mega-menu-col">
                  <h5>Menu block 1</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
                <div class="mega-menu-col">
                  <h5>Menu block 2</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
                <div class="mega-menu-col">
                  <h5>Menu block 3</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
                <div class="mega-menu-col">
                  <h5>Menu block 4</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="menu-item dropdown">
              <a href="#">Demo +</a>
              <div class="sub-menu-wrapper slideInUp">
                <ul class="sub-menu">
                  <li class="menu-item"><a href="/static_44">w03 BlogStaticPage_44</a></li>
                  <li class="menu-item"><a href="/localjson_44">w03 BlogLocalJsonPage_44</a></li>
                  <li class="menu-item"><a href="/node_44">w4-BlogNodePage_44</a></li>
                  <li class="menu-item"><a href="#">w05 Blogsupa </a></li>
                </ul>
              </div>
            </li>
            <li class="menu-item"><a href="#">Blog</a></li>
            <li class="menu-item"><a href="#">Contact</a></li>
          </ul>
          <a
            href="#"
            id="hamburger-icon"
            class="mobile-toggler"
            aria-label="Mobile Menu"
            ><i class="fas fa-bars"></i
          ></a>
        </div>

        
        <div id="mobile-menu" class="mobile-menu hidden slideInDown">
          <ul>
            <li class="menu-item"><a href="#" class="active">Home</a></li>

            <li class="menu-item mega-menu">
              <a href="#">Mega menu +</a>
              <div class="mega-menu-wrapper">
                <div class="mega-menu-col">
                  <h5>Menu block 1</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
                <div class="mega-menu-col">
                  <h5>Menu block 2</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
                <div class="mega-menu-col">
                  <h5>Menu block 3</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
                <div class="mega-menu-col">
                  <h5>Menu block 4</h5>
                  <ul class="mega-sub-menu">
                    <li><a href="#">Menu block item 1</a></li>
                    <li><a href="#">Menu block item 2</a></li>
                    <li><a href="#">Menu block item 3</a></li>
                    <li><a href="#">Menu block item 4</a></li>
                    <li><a href="#">Menu block item 5</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="menu-item dropdown">
              <a href="#">Services +</a>
              <div class="sub-menu-wrapper">
                <ul class="sub-menu">
                  <li class="menu-item"><a href="#">Service 1</a></li>
                  <li class="menu-item"><a href="#">Service 2</a></li>
                  <li class="menu-item"><a href="#">Service 3</a></li>
                  <li class="menu-item"><a href="#">Service 4</a></li>
                </ul>
              </div>
            </li>
            <li class="menu-item"><a href="#">Blog</a></li>
            <li class="menu-item"><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
    </Wrapper>
);
};
export default Navbar_44;
