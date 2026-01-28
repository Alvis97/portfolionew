import React from 'react'
import { Github, Linkedin, Instagram, GithubIcon, Twitter} from "lucide-react";
import style from '../styles/footer.module.scss';
import { BubbleBtnGithub, BubbleBtnLinkedIn, BubbleBtnTwitter, BubbleBtnMail, BubbleBtnMailDark } from './Icons';

interface FooterProps{
  isDarkmodeSelected : boolean;
}

function Footer({ isDarkmodeSelected }: FooterProps ) {
  return (
    <div className={style.footer}>
          
        <span className={style.socials}>
     
            <BubbleBtnLinkedIn className={style.IconLink}/>
            <BubbleBtnGithub className={style.IconLink}/>
            <BubbleBtnTwitter className={style.IconLink}/>
            { isDarkmodeSelected ? (
            <>
            <BubbleBtnMail className={style.IconLink}/>
            </>
          ):(
            <>
            <BubbleBtnMail className={style.IconLink}/>
            </>
          )}

        </span>  
    </div>
  )
}

export default Footer
