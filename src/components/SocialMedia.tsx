import React from 'react';
import { BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href='https://www.facebook.com/Victor19P' target='_blank' rel='noreferrer'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/victor19pa/' target='_blank' rel='noreferrer'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://wa.me/+50497677062' target='_blank' rel='noreferrer'>
          <BsWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;
