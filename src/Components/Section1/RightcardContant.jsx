import React from 'react'

const RightcardContant = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'> {props.id + 1} </h2>
            <div>
                <p className='text-xl leading- text-shadow-sm text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus qui nemo delectus, odit placeat quisquam pariatur dolore facilis libero veritatis!</p>
                <div className='flex justify-between'>

                    <button
                        style={{ backgroundColor: props.color }}
                        className=" text-white font-medium rounded-full py-2 px-8 transition-all duration-300 hover:scale-98 active:scale-80"
                    >
                        {props.tag}
                    </button>

                    <button className="group text-white font-medium rounded-full py-2 px-4 flex items-center gap-2">
                        <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-2"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default RightcardContant
