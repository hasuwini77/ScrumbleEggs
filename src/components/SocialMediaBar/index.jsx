import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = () => {
  const socialMediaLinks = [
    { icon: faFacebook, url: 'https://www.facebook.com/example' },
    { icon: faXTwitter, url: 'https://twitter.com/example' },
    { icon: faInstagram, url: 'https://www.instagram.com/example/' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/example/' }
  ];

  return (
    <div className="social-media-bar flex">
      {socialMediaLinks.map((socialMedia, index) => (
        <a className="m-1 flex justify-center items-center" key={index} href={socialMedia.url} target="_blank">
          <FontAwesomeIcon icon={socialMedia.icon} className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;
