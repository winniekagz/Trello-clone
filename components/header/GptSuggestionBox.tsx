import { UserCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

export default function GptSuggestionBox() {
  return (
    <div className='flex flex-center justify-center px-5 py-2 mr-1'>

        <p className='px-4 text-blue py-2 flex items-center text-xs italic bg-white max-w-3xl text-light shadow-md rounded-md'>
            <UserCircleIcon className='inline-block h-10 w-10 mr-2' color={'#0079BF'}/>
            GPT is summarizing your tasks today
        </p>
    </div>
  )
}
