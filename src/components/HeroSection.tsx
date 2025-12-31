'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations('Hero');

  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 63, 45, 0.7), rgba(0, 63, 45, 0.4)), url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      <Container style={{ zIndex: 2, position: 'relative' }}>
        <Row>
          <Col md={10} lg={8} xl={7}>
            <h5 className="text-secondary-gold fw-bold mb-3 text-uppercase tracking-widest" style={{ letterSpacing: '3px' }}>
              {t('subtitle')}
            </h5>
            <h1 className="display-2 fw-bold mb-4 lh-1">
              {t('title1')}<br />
              <span className="text-gradient-gold">{t('title2')}</span> {t('title3')}
            </h1>
            <p className="lead mb-5 opacity-90 fs-4 fw-light" style={{ maxWidth: '600px' }}>
              {t('desc')}
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button className="button-gold btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg">
                {t('cta')}
              </Button>
              <Button variant="outline-light" size="lg" className="px-5 py-3 rounded-pill fw-bold border-2">
                <FaPhoneAlt className="me-2" /> 093-651-7978
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
