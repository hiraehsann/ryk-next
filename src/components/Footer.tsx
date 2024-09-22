import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='fixed bottom-0 w=full left-0 right-0 flex p-4 bg-slate-500 justify-center'>
         <Link href="#"className='pl-3 pr-3'>privacy</Link>
         <Link href="#"className='pl-3 pr-3'>terms</Link>
         <Link href="#"className='pl-3 pr-3'>condition</Link>
    </div>
  )
}

export default Footer
