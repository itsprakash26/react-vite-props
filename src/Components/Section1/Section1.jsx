import React from 'react'
import Navbar from './Navbar'
import Pagecontant from './Pagecontant'

const Section1 = (props) => {
  
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Pagecontant users={props.users} />
    </div>
  )
}

export default Section1