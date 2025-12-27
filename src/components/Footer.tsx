import React from 'react'
import { Github, Linkedin, Instagram, GithubIcon, Twitter} from "lucide-react";
import style from '../styles/footer.module.scss';
import { BubbleBtnGithub, BubbleBtnInstagram, BubbleBtnLinkedIn, BubbleBtnTwitter, PinkBubbleBtnGithub, PinkBubbleBtnInstagram, PinkBubbleBtnLinkedIn, PinkBubbleBtnTwitter } from './Icons';

interface FooterProps{
  isDarkmodeSelected : boolean;
}

function Footer({ isDarkmodeSelected }: FooterProps ) {
  return (
    <div className={style.footer}>
          
        <span className={style.socials}>
          { isDarkmodeSelected ? (
            <>
            <BubbleBtnLinkedIn className={style.IconLink}/>
            <BubbleBtnGithub className={style.IconLink}/>
            <BubbleBtnInstagram className={style.IconLink}/>
            <BubbleBtnTwitter className={style.IconLink}/>
            </>
          ):(
            <>
            <PinkBubbleBtnLinkedIn className={style.IconLink}/>
            <PinkBubbleBtnGithub className={style.IconLink}/>
            <PinkBubbleBtnInstagram className={style.IconLink}/>
            <PinkBubbleBtnTwitter className={style.IconLink}/>
            </>
          )}

        </span>  
    </div>
  )
}

export default Footer
