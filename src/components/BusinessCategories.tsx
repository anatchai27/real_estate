'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { FaHome, FaTools, FaPaintRoller, FaDraftingCompass } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const BusinessCategories = () => {
  const t = useTranslations('Business');

  const services = [
    { title: t('services.build.title'), icon: <FaHome />, desc: t('services.build.desc') },
    { title: t('services.extend.title'), icon: <FaTools />, desc: t('services.extend.desc') },
    { title: t('services.renovate.title'), icon: <FaPaintRoller />, desc: t('services.renovate.desc') },
    { title: t('services.interior.title'), icon: <FaDraftingCompass />, desc: t('services.interior.desc') },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center section-title-wrapper">
          <h5 className="text-secondary-gold fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px' }}>{t('subtitle')}</h5>
          <h2 className="display-5 fw-bold text-primary-green">{t('title')}</h2>
          <div className="mx-auto mt-3" style={{ width: '80px', height: '4px', background: 'var(--secondary-gold)', borderRadius: '2px' }}></div>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={3} md={6} className="mb-4">
              <div className="text-center p-5 h-100 border-0 rounded-4 shadow-md hover-lift bg-white">
                <div className="fs-1 text-secondary-gold mb-4 d-inline-block p-3 rounded-circle bg-light" style={{ width: '90px', height: '90px', lineHeight: '60px' }}>
                  {service.icon}
                </div>
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="text-muted mb-0 px-2">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BusinessCategories;
