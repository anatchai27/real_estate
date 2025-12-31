'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

const styles = [
  { name: 'MODERN', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop' },
  { name: 'CONTEMPORARY', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2684&auto=format&fit=crop' },
  { name: 'JAPANESE', image: 'https://images.unsplash.com/photo-1528913122250-50df44ac736c?q=80&w=2574&auto=format&fit=crop' },
  { name: 'MODERN LUXURY', image: 'https://images.unsplash.com/photo-1600607687940-4ad236f699c2?q=80&w=2670&auto=format&fit=crop' },
  { name: 'NORDIC', image: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?q=80&w=2670&auto=format&fit=crop' },
  { name: 'GABLE', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop' },
];

const HomeStyles = () => {
  const t = useTranslations('HomeStyles');

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center section-title-wrapper">
          <h5 className="text-secondary-gold fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px' }}>{t('subtitle')}</h5>
          <h2 className="display-5 fw-bold text-primary-green">{t('title')}</h2>
          <div className="mx-auto mt-3" style={{ width: '80px', height: '4px', background: 'var(--secondary-gold)', borderRadius: '2px' }}></div>
        </div>
        <Row>
          {styles.map((style, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="border-0 shadow-md overflow-hidden h-100 rounded-4 hover-lift">
                <div style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                  <Card.Img 
                    src={style.image} 
                    className="h-100 w-100 style-img" 
                    style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }}
                  />
                  <div 
                    className="style-overlay"
                    style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      top: 0,
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(0,63,45,0.9))',
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <h3 className="text-white fw-bold mb-1">{style.name}</h3>
                    <div className="style-details" style={{ maxHeight: '0', overflow: 'hidden', transition: 'all 0.4s ease', opacity: 0 }}>
                      <p className="text-white-50 mb-3 small">{t('desc')}</p>
                      <Button variant="outline-light" size="sm" className="rounded-pill px-4">{t('viewPlan')}</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        :global(.hover-lift:hover .style-img) {
          transform: scale(1.15);
        }
        :global(.hover-lift:hover .style-overlay) {
          background: linear-gradient(to bottom, transparent 20%, rgba(0,63,45,0.95)) !important;
        }
        :global(.hover-lift:hover .style-details) {
          max-height: 100px !important;
          opacity: 1 !important;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
};

export default HomeStyles;
