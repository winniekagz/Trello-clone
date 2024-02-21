'use client'

import React from 'react'
import SearchForm from './Search'
import Image from 'next/image'
import CustomAvatar from './Avatar'
import GptSuggestionBox from './GptSuggestionBox'

export default function Header() {
    const handleSubmit=(e:any)=>{
        console.log('e',e.target.value)
    }
  return (
    <div className="w-full bg-gray-500/10 py-[15px] h-96 px-1">
      <div className='-z-50 absolute top-0 left-0  w-full h-96 bg-gradient-to-br from-pink-400 to-[#0079BF ] filter blur-3xl opacity-50'/>
    <header className='w-full flex justify-between   md:px-[52px] flex-col md:flex-row z-20npm run dev'>
<div className=" flex gap-x-1 items-center">
    <Image
     src={"/assets/trello.png"}
      alt='trelo image' 
      width={300}
       height={100}
       className='w-[44px] md:w-[56px] pb-10 md:pb-0 object-contain'
       />
       <p className='font-[700] text-[40px]'>Trello</p>
</div>
<div className="flex gap-x-2 items-center">
    <SearchForm onSearch={handleSubmit} />
    <CustomAvatar name='winnie kagendo'/>
</div>
    </header>
    <GptSuggestionBox/>
    </div>
  )
}
