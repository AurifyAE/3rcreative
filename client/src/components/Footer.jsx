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
    <div className="mt-50 md:mt-60 lg:mt-140 bg-black font-[poppins] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-12 px-5">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col items-center justify-center py-6 md:py-10 gap-4">
            <img src={logo} alt="" className="w-16 md:w-20" />
            <img src={logoName} alt="" className="w-32 md:w-40" />
          </Link>
          
          {/* Navigation Links */}
          <ul className="text-center md:text-left space-y-3 md:space-y-2">
            <li><Link to="/home" className="hover:text-gray-300 transition-colors text-sm md:text-base">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 transition-colors text-sm md:text-base">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-300 transition-colors text-sm md:text-base">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition-colors text-sm md:text-base">Discuss Project</Link></li>
          </ul>
    
          {/* Contact Info and Social Links */}
          <div className="flex flex-col-reverse  md:flex-row gap-8 md:gap-12 px-5 ">
            <div className='flex flex-col items-center md:items-start justify-between min-h-[130px] gap-4 md:gap-3'>
              <ul className="text-center md:text-left">
                <li className="max-w-[250px] mt-3">
                  <a
                    href="https://www.google.com/maps?q=C1+Building,+1-F,+Ajman+Free+Zone,+Ajman,+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-gray-300 text-[#B4AFAF] transition-colors text-sm md:text-base"
                  >
                    C1 Building, 1-F, Ajman Free Zone Ajman, UAE.
                  </a>
                </li>
              </ul>
              <p>
                <a href="https://www.creative3r.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-xs md:text-sm">
                  © 3RCreative 2025
                </a>
              </p>
            </div>
            
            <div className='flex flex-col items-center md:items-start justify-around min-h-[150px] gap-4 md:gap-3'>
              {/* Social Media Icons */}
              <ul className="flex flex-row items-center justify-center gap-4">
                <li>
                  <a href="https://www.facebook.com/3rcreative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={facebook} alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/3r_creative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={instagram} alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/3rcreative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={telegram} alt="Telegram" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/3rcreative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={youtube} alt="YouTube" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </li>
              </ul>

              <ul className="text-center md:text-left space-y-2">
                <li>
                  <a href="https://wa.me/971508064894" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-sm md:text-base">
                    +971 50 8064 894
                  </a>
                </li>
                <li>
                  <a href="mailto:info@creative3r.com" className="hover:text-gray-300 transition-colors text-sm md:text-base">
                    info@creative3r.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
