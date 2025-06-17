import React from 'react'
import { Github, Linkedin, Instagram, GithubIcon, Twitter} from "lucide-react";
import style from '../styles/footer.module.scss';

function Footer() {
  return (
    <div className={style.footer}>
           <div className={style.linkWrapper}>
                <a href="" className={style.link}>alva@business.com</a>
                <span className={style.underline}></span>
            </div>
        <span className={style.socials}>
            <a className={style.IconLink} href=""><Github className={style.icon}/></a>
            <a className={style.IconLink} href=""><Linkedin className={style.icon}/></a>
            <a className={style.IconLink} href=""><Instagram className={style.icon}/></a>
            <a className={style.IconLink}  href=""><Twitter className={style.icon}/></a>
        </span>  
    </div>
  )
}

export default Footer
