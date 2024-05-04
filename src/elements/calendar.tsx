import React from 'react'
import { InlineWidget } from 'react-calendly'

export default function Calendar() {
  return (
    <div className='h-full mx-10 md:mx-36 justify-center flex-col items-center '>
           <h2 className="text-4xl md:mb-0 mb-6 font-bold text-white hover-text text-start">
            Varaa tapaaminen
          </h2>
        <InlineWidget url="https://calendly.com/sisu-x8nj" />
    </div>
  )
}
