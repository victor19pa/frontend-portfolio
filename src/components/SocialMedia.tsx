import React from 'react';
import { BsGithub, BsInstagram, BsWhatsapp, BsFillFileEarmarkPdfFill, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href='https://github.com/victor19pa' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/victor-pineda-alonzo/' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://drive.google.com/file/d/1GslzAzTvtBkaoNWlt3S6gR51txPcyxUE/view?usp=sharing' target='_blank' rel='noreferrer'>
          <BsFillFileEarmarkPdfFill />
        </a>
      </div>
      {/* <div>
        <a href='../assets/pdf/VictorPinedaCV2022.pdf' target='_blank' rel='noreferrer'>
          <BsFillFileEarmarkPdfFill />
        </a>
      </div> */}
      <div>
        <a href='https://www.instagram.com/victor19pa/' download="VictorPinedaCV2022" target='_blank' rel='noreferrer'>
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
