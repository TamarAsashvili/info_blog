import React from 'react';
import logo from '../../images/logo.png'

export default function Footer() {
  return (

    <div className='footer' style={{ color: '#fff' }}>
      <img
        src={logo}
        widtth='60'
        height='60'
        className='d-inline-block align-top'
        alt='logo'
      />****** 2020
    </div>

  );
}
