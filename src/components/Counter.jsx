import React from 'react'
import { connect } from 'react-redux'

const incrementCounter = number => {
    return {
        type:"INCREMENT_COUNTER",
        payload: number
    }
}

const decrementCounter = number => {
    return {
        type: "DECREMENT_COUNTER",
        payload: number
    }
}



const Counter = (props) => {

    const incremnetHandler = () => {
        props.incrementCounter(1);
    }

    const decremnetHandler = () => {
        props.decrementCounter(1);
    }

  return (
    <div className='flex flex-col m-50 justify-center items-center'>
        <h1 className='text-5xl'>{props.count}</h1>
        <div>
            <button onClick={incremnetHandler} className='bg-green-200 w-10'>+</button>
            <button onClick={decremnetHandler} className='bg-red-200 w-10'>-</button>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);