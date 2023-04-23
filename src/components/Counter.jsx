import React from 'react'



const Counter = (props) => {
  return (
    <div className='flex flex-col m-50 justify-center items-center'>
        <h1 className='text-5xl'>{props.count}</h1>
        <div>
            <button className='bg-green-200 w-10'>+</button>
            <button className='bg-red-200 w-10'>-</button>
        </div>
    </div>
  )
}

export default Counter