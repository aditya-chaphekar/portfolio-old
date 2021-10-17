import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
// import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 5rem;
  }
  .footer__col1 {
    flex: 1;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+917972694085',
                path: 'tel:+917972694085',
              },
              {
                title: 'adityachaphekar@outlook.com',
                path: 'mailto:adityachaphekar@outlook.com',
              },
              {
                title: 'Nashik, Maharashtra, India',
                path: 'https://goo.gl/maps/nzdfFvTR35tEHJek8',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/aditya-chaphekar',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/aditya-chaphekar-080407a6/',
              },
              {
                title: 'Instagram',
                path: 'http://isntagram.com/_aditya_chaphekar_',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}
