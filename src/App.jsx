import React from 'react'
import Section1 from './Components/Section1/Section1'


const App = () => {

  const users = [

    {img: 'https://media.istockphoto.com/id/1365866147/photo/portrait-of-a-successful-entrepreneur-using-laptop-in-the-hotel-room.webp?a=1&s=612x612&w=0&k=20&c=3O3iJ4NsyiW9zrFu-FPWnikObVeJ0Ojw4LSSM2w-bP0=',
    intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus qui nemo delectus, odit placeat quisquam pariatur dolore facilis libero veritatis!',
    color:'darkgray',
    tag:'Satisfide'
    },

    {img: 'https://images.unsplash.com/photo-1730641885704-770446ae78ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
    intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus qui nemo delectus, odit placeat quisquam pariatur dolore facilis libero veritatis!',
    color:'pink',
    tag:'Underserved'
    },
    

    {img: 'https://plus.unsplash.com/premium_photo-1686244745117-ab2d23749209?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus qui nemo delectus, odit placeat quisquam pariatur dolore facilis libero veritatis!',
    color:'skyblue',
    tag:'Underbanked'
    },
    {img: 'https://plus.unsplash.com/premium_photo-1757612172977-2d1cb49f1777?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus qui nemo delectus, odit placeat quisquam pariatur dolore facilis libero veritatis!',
    color:'black',
    tag:'Understand'
    },

  ]


  return (
    <div >
      <Section1 users={users} />
     

    </div>
  )
}

export default App