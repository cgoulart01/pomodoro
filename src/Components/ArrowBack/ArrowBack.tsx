import Link from 'next/link'
import React from 'react'
import {IoMdArrowRoundBack} from "react-icons/io"

const ArrowBack = () => {
    return ( <Link className="arrow-back" href="/">
    <IoMdArrowRoundBack style={{fontSize:"40px"}}/>
  </Link>)
} 
export default ArrowBack