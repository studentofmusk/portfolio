import React from 'react'
import {motion} from 'framer-motion'

const Skill =({name, x, y})=>{
    return (
        <motion.div className="flex items-center justifu-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        animate={{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        >
           {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center '>Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div className="flex items-center justifu-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
        whileHover={{scale:1.05, cursor:"pointer"}}>
            web
        </motion.div>

        <Skill name="HTML" x="-5vw" y="-10vw"/>
        <Skill name="ReactJS" x="-10vw" y="10vw"/>
        <Skill name="MongoDB" x="-15vw" y="-20vw"/>
        <Skill name="Python" x="15vw" y="13vw"/>
        <Skill name="NodeJS" x="-25vw" y="-6vw"/>
        <Skill name="C++" x="27vw" y="2vw"/>
        <Skill name="JavaScript" x="25vw" y="-10vw"/>
        <Skill name="TailwindCSS" x="16vw" y="-17vw"/>
        <Skill name="Figma" x="0vw" y="16vw"/>
        <Skill name="CSS" x="-25vw" y="15vw"/>
        <Skill name="Flask" x="-5vw" y="-10vw"/>


    </div>
    </>
  )
}

export default Skills