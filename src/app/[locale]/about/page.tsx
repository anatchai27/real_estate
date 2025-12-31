'use client';

import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAward, FaUsers, FaMapMarkedAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <>
      <AppNavbar />
      <main>
        {/* Hero Section */}
        <section className="py-5 bg-primary-green text-white text-center">
          <Container>
            <h1 className="display-4 fw-bold">{t('heroTitle')}</h1>
            <p className="lead">{t('heroSubtitle')}</p>
          </Container>
        </section>

        {/* History & Vision */}
        <section className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <img 
                  src="https://images.unsplash.com/photo-1541915059233-ef541fe4699e?q=80&w=2670&auto=format&fit=crop" 
                  alt="Company History" 
                  className="img-fluid rounded shadow"
                />
              </Col>
              <Col lg={6} className="ps-lg-5 mt-4 mt-lg-0">
                <h2 className="fw-bold text-primary-green mb-4">{t('historyTitle')}</h2>
                <p>
                  {t('historyDesc1')}
                </p>
                <p className="fst-italic border-start border-4 border-secondary-gold ps-3 py-2">
                  "{t('vision')}"
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Team Members */}
        <section className="py-5 bg-light">
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold text-primary-green">{t('teamTitle')}</h2>
              <p className="text-muted">{t('teamSubtitle')}</p>
            </div>
            <Row>
              {[1, 2, 3, 4].map((member) => (
                <Col key={member} md={3} className="mb-4">
                  <Card className="border-0 shadow-sm text-center h-100">
                    <Card.Img variant="top" src={`https://i.pravatar.cc/300?img=${member + 10}`} className="p-3 rounded-circle" />
                    <Card.Body>
                      <Card.Title className="fw-bold">{t('teamMember')} {member}</Card.Title>
                      <Card.Text className="text-secondary-gold small fw-bold">{t('teamRole')}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Certificates & Awards */}
        <section className="py-5">
          <Container>
            <Row className="text-center">
              <Col md={4} className="mb-4">
                <div className="fs-1 text-secondary-gold mb-3"><FaAward /></div>
                <h5 className="fw-bold">{t('certTitle1')}</h5>
                <p className="text-muted small">{t('certDesc1')}</p>
              </Col>
              <Col md={4} className="mb-4">
                <div className="fs-1 text-secondary-gold mb-3"><FaUsers /></div>
                <h5 className="fw-bold">{t('certTitle2')}</h5>
                <p className="text-muted small">{t('certDesc2')}</p>
              </Col>
              <Col md={4} className="mb-4">
                <div className="fs-1 text-secondary-gold mb-3"><FaMapMarkedAlt /></div>
                <h5 className="fw-bold">{t('certTitle3')}</h5>
                <p className="text-muted small">{t('certDesc3')}</p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
