import React from 'react';
import {AlignJustify } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium  ml-32">FAIZA
        </div>
        <ul className='gap-10 items-center p-2 font-bold lg:gap-16 hidden  md:flex'>
         {/* <li className='menuLink'>HOME</li> */}
         <li>
          <Link className="nav-links" href={"/"}>HOME</Link>
         </li>
         {/* <li className='menuLink'>PROJECTS</li> */}
         <li>
         <Link className="nav-links" href={"/Projects"}>PROJECTS</Link>
         </li>
         {/* <li className='menuLink'>SKILLS</li> */}
         <li>
         <Link className="nav-links" href={"/Skills"}>SKILLS</Link>
         </li>
         {/* <li className='menuLink'>TESTIMONIALS</li> */}
         <li>
         <Link className="nav-links" href={"/Testimonials"}>TESTIMONIALS</Link>
         </li>
         {/* <li className='menuLink'>CONTACT</li> */}
         <li>
         <Link className="nav-links" href={"/Contacts"}>CONTACTS</Link>
         </li>
        </ul>

        <AlignJustify className= "md:hidden size-30"/>
      </div>
    </div>
  );
}

export default Navbar;
