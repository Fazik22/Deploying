import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
       <header className='flex justify-between mt-[19px] px-[100px]'>
         <div className='flex mt-[17px]'>
          <img src="/message svg.svg" alt="message" className='w-[38px] block h-[38px]'/>
          <h1 className='text-center font-bold text-xl py-1 px-[2px]'>Talk Business</h1>
         </div>
         <div className='flex gap-[29px]'> 
          <ul className='flex gap-[52px] mt-[15px]'>
            <li><a className='font-semibold' href="#">Home</a></li>
            <li><a className='font-semibold' href="#">About</a></li>
            <li><a className='font-semibold' href="#">Services</a></li>
            <li><a className='font-semibold' href="#">Systems</a></li>
          </ul>
            <button className='border-2 rounded-[150px] font-semibold border-violet-700 text-violet-700 px-[33px] py-4'>Contact us</button>
         </div>
       </header>
       <section className='mt-[138px] text-center'>
        <h2 className='font-bold text-6xl px-[28.5%] mb-4'>Become a better business with us.</h2>
        <p className='text-xl px-[30.8%] font-normal mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis tortor, ultricies ut justo eu.</p>
        <button className='text-xl font-semibold bg-[#8540F5] text-white rounded-[150px] px-16 py-4 mb-32'>Our Business</button>
        <img src="/public/woman with tablet.png" alt="women with tablet" />
       </section>
       <section className='mt-[190px] pl-[16.8%]'>
        <h3 className='text-6xl mb-[197px] pr-[28.4%] font-bold'>Here is what’s happening in the world of talk business.</h3>
        <div className='flex mb-[68px] gap-12'>
          <div>
            <p className='mb-[23px] text-[#6610F2] font-bold'>MAY 2021</p>
            <h3 className='font-bold text-[26px] max-w-[251px]'>Agile focused business services and more.</h3>
          </div>
        <img src="public/man with laptop.png" alt="man with laptop" />  
        </div>
        <div className='flex mb-[68px] gap-12'>
          <div>
            <p className='mb-[23px] text-[#6610F2] font-bold'>JUN 2021</p>
            <h3 className='font-bold text-[26px] max-w-[251px]'>Agile focused business services and more.</h3>
          </div>
          <img src="public/man's table.png" alt="man's table" />
        </div>
        <div className='flex mb-[38px] gap-12'>
          <div>
            <p className='mb-[23px] text-[#6610F2] font-bold'>JUL 2021</p>
            <h3 className='font-bold text-[26px] max-w-[251px]'>Agile focused business services and more.</h3>
          </div>
          <img src="public/man's watch.png" alt="man's watch" />
        </div>
       </section>
    </div>
  )
}

export default App;
