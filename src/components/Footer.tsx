import React from 'react'
import { Github, Linkedin, Instagram, GithubIcon, Twitter} from "lucide-react";
import '../styles/globals.scss';

function Footer() {
  return (
    <div className='footer'>
           <div className="linkWrapper">
                <a href="" className="link">alva@business.com</a>
                <span className="underline"></span>
            </div>
        <span className='socials'>
            <a className='IconLink' href=""><Github className='Icon'/></a>
            <a className='IconLink' href=""><Linkedin className='Icon'/></a>
            <a className='IconLink' href=""><Instagram className='Icon'/></a>
            <a className='IconLink' href=""><Twitter className='Icon'/></a>
        </span>  
    </div>
  )
}

export default Footer
