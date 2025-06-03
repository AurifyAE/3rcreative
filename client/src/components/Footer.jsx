import React from 'react'
import logo from '../assets/logo.svg'
import logoName from '../assets/logoName.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import telegram from '../assets/telegram.svg'
import youtube from '../assets/youtube.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="mt-140 bg-black text-white flex items-center justify-around px-10 py-5 gap-10">
      <Link to="/">
        <div className='flex flex-col items-center justify-center py-10 gap-4'>
          <img src={logo} alt="" className='w-25' />
          <img src={logoName} alt="" className='w-65' />
        </div>
      </Link>
      
        <ul className='space-y-2'>
          <li><Link to="/home">Home</Link></li>
          <li>About Us</li>
          <li><Link to="/services">Services</Link></li>
          <li>Discuss Project</li>
        </ul>
  
        <div className='flex gap-4'>
          <ul className='space-y-1 mb-4'>
            <li>
              <a href="https://wa.me/971508064894" target="_blank" rel="noopener noreferrer">
                +971 50 8064 894
              </a>
            </li>

            <li>
              <a href="mailto:info@creative3r.com">
                info@creative3r.com
              </a>
            </li>

            <li>
              <a href="https://www.creative3r.com" target="_blank" rel="noopener noreferrer">
                www.creative3r.com
              </a>
            </li>

            <li className='w-70 mt-3'>
              <a
                href="https://www.google.com/maps?q=C1+Building,+1-F,+Ajman+Free+Zone,+Ajman,+UAE"
                target="_blank"
                rel="noopener noreferrer"
              >
                C1 Building, 1-F, Ajman Free Zone Ajman, UAE.
              </a>
            </li>
          </ul>
          <div>
          <ul className='flex flex-col items-center gap-3'>
            <li>
              <a href="https://www.facebook.com/Creative3R" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/creative3r/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/creative3r/" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/creative3r/" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>
        </div>
        
    </div>
  )
}
