'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaLine } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="fw-bold text-secondary-gold mb-4">REAL ESTRAD</h3>
            <p className="text-light-50 mb-4">
              {t('about')}
            </p>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white"><FaFacebook /></a>
              <a href="#" className="text-white"><FaYoutube /></a>
              <a href="#" className="text-white"><FaTiktok /></a>
              <a href="#" className="text-white"><FaLine /></a>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-4">{t('contact')}</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="me-3 mt-1 text-secondary-gold" />
                <span>{t('address')}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-3 text-secondary-gold" />
                <span>093-651-7978</span>
              </li>
              <li className="d-flex align-items-center">
                <FaLine className="me-3 text-secondary-gold" />
                <span>@realestrad</span>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6}>
            <h5 className="fw-bold mb-4">{t('serviceArea')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">{t('areas.0')}</li>
              <li className="mb-2">{t('areas.1')}</li>
              <li className="mb-2">{t('areas.2')}</li>
              <li>{t('areas.3')}</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-5 border-light opacity-25" />
        <div className="text-center text-light-50">
          <small>Copyright © 2025 REAL ESTRAD ENTERPRISE CO.,LTD. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
