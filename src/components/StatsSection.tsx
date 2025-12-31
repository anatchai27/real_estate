'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

const StatsSection = () => {
  const t = useTranslations('Stats');

  return (
    <section className="py-5 text-white" style={{ 
      background: 'linear-gradient(135deg, var(--primary-green) 0%, #002a1e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle background pattern or element */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        height: '300px',
        background: 'rgba(206, 166, 108, 0.05)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="text-center align-items-center">
          <Col md={4} className="mb-5 mb-md-0">
            <h2 className="display-3 fw-bold text-secondary-gold mb-2">200+</h2>
            <p className="lead mb-0 opacity-75 text-uppercase tracking-wider">{t('projects')}</p>
          </Col>
          <Col md={4} className="mb-5 mb-md-0 border-start border-end border-light border-opacity-10">
            <h2 className="display-3 fw-bold text-secondary-gold mb-2">12+</h2>
            <p className="lead mb-0 opacity-75 text-uppercase tracking-wider">{t('experience')}</p>
          </Col>
          <Col md={4}>
            <h2 className="display-3 fw-bold text-secondary-gold mb-2">100%</h2>
            <p className="lead mb-0 opacity-75 text-uppercase tracking-wider">{t('satisfaction')}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
