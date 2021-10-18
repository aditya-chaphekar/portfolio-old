import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={
              <lord-icon
                src="https://cdn.lordicon.com/qhgmphtg.json"
                trigger="morph-two-way"
                stroke="75"
                colors="primary:#BCB4B4,secondary:#BCB4B4"
                style={{ width: '40px', height: '40px' }}
              />
            }
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={
              <lord-icon
                src="https://cdn.lordicon.com/dtgezzsi.json"
                trigger="morph-two-way"
                stroke="75"
                colors="primary:#BCB4B4,secondary:#ffffff"
                style={{ width: '40px', height: '40px' }}
              />
            }
            title="web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={
              <lord-icon
                src="https://cdn.lordicon.com/jqeuwnmb.json"
                trigger="morph-two-way"
                stroke="75"
                colors="primary:#BCB4B4,secondary:#ffffff"
                style={{ width: '40px', height: '40px' }}
              />
            }
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
