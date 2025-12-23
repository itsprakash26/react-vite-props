import React from 'react'
import Leftcontant from './Leftcontant'
import Rightcontant from './Rightcontant'

const Pagecontant = (props) => {
  return (
    <div className='pb-16 pt-5 flex items-center gap-10 h-[90vh]'>
       
       <Leftcontant />
       <Rightcontant users={props.users} />
       
    </div>
  )
}

export default Pagecontant