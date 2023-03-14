import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,

} from 'mdb-react-ui-kit';
import './Footer.css';
import myprintclothe from '../Image/printClotheImg.png'

const Footer = () => {
    return (
      <div className="footer-container">
        <MDBFooter className='text-center' color='white'>
        <MDBContainer className='p-5'>
          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5>Shop</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                     Search
                    </a>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5>About</h5>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5>Our Mission</h5>
  
                <p className='text-white'>
                We are here provide you best customized product you can get in market.
                    </p>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
               <img src={myprintclothe} alt="img"/>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023
          <a className='text-white' href='https://myprintclothe.com/'>
          My print clothe
          </a>
          <a className='text-white' href='https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore'>
          Powered by Shopify
          </a>
        </div>
      </MDBFooter>
      </div>
    )
}

export default Footer;