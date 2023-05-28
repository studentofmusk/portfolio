import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon} from './Icon'
import {motion} from 'framer-motion';

const Navbar = () => {
    
    const CustomLink = ({href, title, className})=>{
        const router = useRouter()
        return <Link href={href} className={`${className} relative group`} >
            {title}
            <span 
            className={`h-[2px] inline-block  absolute -bottom-0.5 left-0 bg-dark
            group-hover:w-full transition-width duration-300 ease ${router.asPath === href? 'w-full':'w-0'}`}
            >&nbsp;</span>
            </Link>
        
    }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4' />
            <CustomLink href='/about' title='About' className='mx-4 w-6' />
            <CustomLink href='/projects' title='Projects' className='mx-4 w-6' />
            <CustomLink href='/articles' title='Articles' className='ml-4' />
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>

        <nav className='flex items-center justify-center flex-wrap'>

            <motion.a href='/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='mx-4 w-6'
            ><TwitterIcon/></motion.a>

            <motion.a href='/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='mx-4 w-6'
            ><GithubIcon/></motion.a>

            <motion.a href='/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='mx-4 w-6'
            ><LinkedInIcon/></motion.a>
            <motion.a href='/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='mx-4 w-6'
            ><PinterestIcon/></motion.a>
            <motion.a href='/' target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='mx-4 w-6'
            ><DribbbleIcon/></motion.a>
            {/* <Link href='/' target={"_blank"}></Link> */}
        </nav>
    </header>
  )
}

export default Navbar