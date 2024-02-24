import React from 'react';
import Image from "next/image";
import ReorderIcon from '@mui/icons-material/Reorder';
const  Header = () =>{
  return (
<header>
  <div className={`flex justify-between h-20 `}>
    <div className='flex gap-4 items-center px-5 '>
      <Image src='/images/logo.svg' alt='logo image'      width={20}
      height={20}></Image> 
      <p className='font-bold '>Personal</p>
    </div>
    <div className='flex items-center pr-5'>
    <ReorderIcon/>
    </div>
  </div>

</header>
  );
}
 
export default Header
