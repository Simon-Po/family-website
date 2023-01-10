import React from 'react'

const LoginForm = ( {onSubmit, notFilled}) => {
  return (
    <div className='  bg-slate-700 rounded-md p-2  border border-solid '>

    <form action="" className='grid p-2' onSubmit={onSubmit}>
        <div className=' pb-2 '>
            <label htmlFor="" className='  text-lg  mr-2'>Name:</label>
            <   input name="username" type="text"  className=' rounded border float-right'/>
        </div>
        <div className=' pb-2'>
            <label htmlFor="" className=' text-lg mr-2'>Passowrd:</label>
            <input type="password" name="password" className=' rounded  border float-right' />
        </div>

        {(notFilled) ? <div className=''>
            <p className='float-right text-red-500'>Please Fill out all the Fields</p>
        </div> : ""
        }
        

        <div className=' mt-2  flex justify-center'>
            <button type="submit" className='  btn  bg-transparent text-white border-white hover:bg-slate-400'>Submit</button>
        </div>
            

    </form>
    </div>
  )
}

export default LoginForm