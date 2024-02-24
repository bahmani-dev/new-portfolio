import React from 'react';
import Image from "next/image";

const  Header = () =>{
  return (
<header>
  <div className={`flex justify-between h-20 `}>
    <div className='flex gap-4 items-center px-5 '>
      <Image src='/images/logo.svg' alt='logo image'      width={20}
      height={20}></Image> 
      <p className='font-bold '>Personal</p>
    </div>
    <div>
 
    </div>
  </div>

</header>
  );
}
 
export default Header
