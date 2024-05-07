import React from 'react'
import { InlineWidget } from 'react-calendly'
import { Helmet } from 'react-helmet'

export default function Calendar() {
  return (
    <div className='h-full lg:mx-36 flex-col items-center '>
        <Helmet>
        <title>Varaa tapaaminen</title>
        <meta
          name="description"
          content="Tervetuloa varauskalenteriini! Seuraa leppoisasti viittoilevia ohjeita ja pian ollaan kahvikupin ääressä suunnittelemassa maailmanvalloitusta. 😁"
        />
        <meta property="og:title" content="Varaa tapaaminen" />
        <meta
          property="og:description"
          content="Tervetuloa varauskalenteriini! Seuraa leppoisasti viittoilevia ohjeita ja pian ollaan kahvikupin ääressä suunnittelemassa maailmanvalloitusta. 😁"
        />
      </Helmet>
           <h2 className="text-4xl w-full md:mb-0 mb-6 font-bold justify-center items-center text-white hover-text text-start">
            Varaa tapaaminen
          </h2>
        <InlineWidget url="https://calendly.com/sisu-x8nj?hide_gdpr_banner=1" />
    </div>
  )
}
