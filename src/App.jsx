import React, { useState } from 'react'

const App = () => {
  const submitHolder=(e)=>{
    e.preventDefault()
    setTitle('')
    setDetails('')
    
    console.log(title);
    console.log(details);
  }
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  return (
    <div >
     <form onSubmit={(e)=>{
      submitHolder(e)
     }} className='h-screen w-screen bg-black text-white flex '>
      <div className=' flex text-3xl flex-col w-1/2 gap-10 p-10'>
      <h1 className='text-4xl font-normal'>Add notes</h1>
        <input
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          
        }} 
        className='border-2 border-white px-8 py-4 outline-none rounded-lg ' type="text" placeholder='Enter the topic' />
        <textarea
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
         className='border-2 h-40 border-white px-8 py-4 outline-none rounded-lg '  name="" placeholder='Enter details' id=""></textarea>
        <button className='border-2 bg-white text-black capitalize border-white px-8 py-4 outline-none rounded-lg '>submit</button>
      </div>
      <div className='p-15 w-1/2 border-l-2'>
        <h1 className='text-4xl font-normal mb-5'>Recent notes</h1>
        <div className='flex flex-wrap gap-4 h-full overflow-auto'>
        <div className="h-60 w-48 bg-white rounded-xl"></div>
        <div className="h-60 w-48 bg-white rounded-xl"></div>
        <div className="h-60 w-48 bg-white rounded-xl"></div>
        <div className="h-60 w-48 bg-white rounded-xl"></div>
        <div className="h-60 w-48 bg-white rounded-xl"></div>
        <div className="h-60 w-48 bg-white rounded-xl"></div>
        <div className="h-60 w-48 bg-white rounded-xl"></div>
        </div>
      </div>
     </form>
    </div>
  )
}

export default App
