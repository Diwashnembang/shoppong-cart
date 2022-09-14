import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './home.css'

const Home = () => {
  return (
    <>
      <div id='home-component'>
        <section className='main-product-info'>
          <h1>Nvidia GeForce RTX 3080 </h1>
          <h3>Preorder Now </h3>
          <Link to={'./Shop'}>
            <button type='button'>Shop Now</button>
          </Link>
        </section>
        <section className='main-product-image'>
          <img src='public/assets/electronics/geforce-rtx-3080-ti.jpg' />
        </section>
      </div>
    </>
  )
}

export default Home
