import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .test {
    height: 20px;
    width: 20px;
    padding: 10px;
  }
  .test:hover {
    animation: beat 1s infinite ease;
  }
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
  @keyframes beat {
    to {
      transform: scale(1.2);
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<i className="fas fa-phone fa-2x test" />}
              text="+917972694085"
            />
            <ContactInfoItem
              icon={
                <lord-icon
                  src="https://cdn.lordicon.com/rhvddzym.json"
                  trigger="morph-two-way"
                  stroke="75"
                  colors="primary:#BCB4B4,secondary:#08a88a"
                  style={{ width: '40px', height: '40px' }}
                />
              }
              text="adityachaphekar@outlook.com"
            />
            <ContactInfoItem
              icon={
                <lord-icon
                  src="https://cdn.lordicon.com/zzcjjxew.json"
                  trigger="morph-two-way"
                  colors="primary:#BCB4B4,secondary:#BCB4B4"
                  stroke="75"
                  style={{ width: '40px', height: '40px' }}
                />
              }
              text="Nashik, India"
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
