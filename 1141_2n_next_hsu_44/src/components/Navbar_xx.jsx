import React from 'react';
import Wrapper from '../assets/wrappers/Navbar_xx';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
const Navbar_xx = () => {
  return (
    <Wrapper>
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>TkuDemo</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <Link href='/' className='active'>
                  Home
                </Link>
              </li>

              {/* <li className='menu-item mega-menu'>
                <Link href='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper slideInUp'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}

              <li className='menu-item dropdown'>
                <Link href='#'>Demo +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/booklist_xx'>W2-BookList_xx</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/static_xx'>W3-BlogStatic_xx</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/localjson_xx'>W3-BlogLocalJson_xx</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/node_xx'>W4-BlogNode_xx</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>W5-BlogSupa_xx</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Tuhrefrials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t11_xx'>
                        T11_ErrorExamplePage_xx
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t12_xx'>
                        T12_UseStateBasicsPage_xx
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <Link href='#'>midterm +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='exams/midterm/p1_44'>p1_StaticPage_44</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/p2_44'>p2_StaticPage_44</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/P3_44'>p3_NodePage_44</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/P4_44'>p4_SupaPage_44</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Quiz1 +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/quiz1/static_xx'>hrefurStaticPage_xx</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/quiz1/static2_xx'>hrefurStaticPage2_xx</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/quiz1/static3_xx'>hrefurStaticPage3_xx</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/quiz1/node_xx'>hrefurNodePage_xx</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item'>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
            <Link
              href='#'
              id='hamburger-icon'
              className='mobile-hrefggler'
              aria-label='Mobile Menu'
            >
              <i className='fas fa-bars'></i>
            </Link>
          </div>
          <div id='mobile-menu' className='mobile-menu hidden slideInDown'>
            <ul>
              <li className='menu-item'>
                <Link href='#' className='active'>
                  Home
                </Link>
              </li>

              {/* <li className='menu-item mega-menu'>
                <Link href='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}

              <li className='menu-item dropdown'>
                <Link href='#'>Services +</Link>
                <div className='sub-menu-wrapper'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='#'>Service 1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 2</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 3</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Tuhrefrials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t11_xx'>
                        T11_ErrorExamplePage_xx
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t12_xx'>
                        T12_UseStateBasicsPage_xx
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_xx;
