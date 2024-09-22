import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-3 p-6 bg-slate-500'>
<Link href="\">Home page</Link>
<Link href="\name">name page</Link>
<Link href="\address">address</Link>
    </div>
  )
}

export default Header