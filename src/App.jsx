import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHolder=(e)=>{
    e.preventDefault()
    setTitle('')
    setDetails('')
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(task);
    
    
  }
  
  const deleteNote=(idx)=>{
    const copyTask=[...task]
    // console.log(copyTask[idx]);
    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }
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
        <button className='border-2 active:bg-gray-300 bg-white text-black capitalize border-white px-8 py-4 outline-none rounded-lg '>submit</button>
      </div>
      <div className='p-15 w-1/2 border-l-2'>
        <h1 className='text-4xl font-normal mb-5'>Recent notes</h1>
        <div className='flex flex-wrap gap-4 h-full overflow-auto'>
        {task.map(function(elem,idx){
          return  <div key={idx}className="h-60 w-48 bg-white flex flex-col items-center justify-between text-black p-6 bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.clipartpng.com%2FSticky_Note_PNG_Clip_Art-2367.png&f=1&nofb=1&ipt=d69de4c94c423eabdcc911a4352bca4a4df4d08487c999eb8ba3cb6102454020)] bg-cover bg-center rounded-xl">
            <div className=''>
              <h3 className='leading-snug font-semibold'>{elem.title}</h3>
            <p className='font-light leading-snug mt-3 text-gray-500'>{elem.details}</p>
            </div>
            <h6 onClick={()=>{
              deleteNote(idx)
            }} className= ' bg-red-500 rounded-xl px-7 cursor-pointer text-white'>Delete</h6>
          </div>
          
          
          

        })}
        
        </div>
      </div>
     </form>
    </div>
  )
}

export default App
