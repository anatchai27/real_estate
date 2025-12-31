'use client';

import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaShieldAlt, FaTools, FaFileAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('Services');

  const steps = [
    { title: t('steps.0.title'), desc: t('steps.0.desc') },
    { title: t('steps.1.title'), desc: t('steps.1.desc') },
    { title: t('steps.2.title'), desc: t('steps.2.desc') },
    { title: t('steps.3.title'), desc: t('steps.3.desc') },
    { title: t('steps.4.title'), desc: t('steps.4.desc') },
  ];

  return (
    <>
      <AppNavbar />
      <main>
        <section className="py-5 bg-primary-green text-white text-center">
          <Container>
            <h1 className="display-4 fw-bold">{t('heroTitle')}</h1>
            <p className="lead">{t('heroSubtitle')}</p>
          </Container>
        </section>

        {/* Process Timeline */}
        <section className="py-5">
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold text-primary-green">{t('processTitle')}</h2>
              <p className="text-muted">{t('processSubtitle')}</p>
            </div>
            <Row className="justify-content-center">
              {steps.map((step, index) => (
                <Col key={index} lg={2} md={4} className="text-center mb-4">
                  <div className="rounded-circle bg-secondary-gold text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                    {index + 1}
                  </div>
                  <h6 className="fw-bold">{step.title}</h6>
                  <p className="small text-muted">{step.desc}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Service Details */}
        <section className="py-5 bg-light">
          <Container>
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm p-4">
                  <div className="fs-1 text-primary-green mb-3"><FaTools /></div>
                  <h4 className="fw-bold">{t('structTitle')}</h4>
                  <p className="text-muted">
                    {t('structDesc')}
                  </p>
                  <ul className="list-unstyled">
                    <li><FaCheckCircle className="text-secondary-gold me-2" /> {t('structItems.0')}</li>
                    <li><FaCheckCircle className="text-secondary-gold me-2" /> {t('structItems.1')}</li>
                    <li><FaCheckCircle className="text-secondary-gold me-2" /> {t('structItems.2')}</li>
                  </ul>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm p-4">
                  <div className="fs-1 text-primary-green mb-3"><FaFileAlt /></div>
                  <h4 className="fw-bold">{t('materialTitle')}</h4>
                  <p className="text-muted">
                    {t('materialDesc')}
                  </p>
                  <ul className="list-unstyled">
                    <li><FaCheckCircle className="text-secondary-gold me-2" /> {t('materialItems.0')}</li>
                    <li><FaCheckCircle className="text-secondary-gold me-2" /> {t('materialItems.1')}</li>
                    <li><FaCheckCircle className="text-secondary-gold me-2" /> {t('materialItems.2')}</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Warranty */}
        <section className="py-5 text-center">
          <Container>
            <div className="p-5 rounded bg-primary-green text-white shadow">
              <div className="fs-1 text-secondary-gold mb-3"><FaShieldAlt /></div>
              <h2 className="fw-bold">{t('warrantyTitle')}</h2>
              <p className="lead mb-0">{t('warrantyLead')}</p>
              <p className="small opacity-75 mt-2">{t('warrantyDesc')}</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
