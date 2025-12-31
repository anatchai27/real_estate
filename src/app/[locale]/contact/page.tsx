'use client';

import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaLine, FaClock, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const tApp = useTranslations('Appointment');

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

        <section className="py-5">
          <Container>
            <Row>
              {/* Contact Info */}
              <Col lg={5} className="mb-5 mb-lg-0">
                <h2 className="fw-bold text-primary-green mb-4">{t('infoTitle')}</h2>
                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="fs-4 text-secondary-gold me-3"><FaMapMarkerAlt /></div>
                    <div>
                      <h6 className="fw-bold mb-1">{t('addressTitle')}</h6>
                      <p className="text-muted mb-0">96 หมู่ 2 ต.วังหว้า อ.แกลง จ.ระยอง 21110</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="fs-4 text-secondary-gold me-3"><FaPhoneAlt /></div>
                    <div>
                      <h6 className="fw-bold mb-1">{t('phoneTitle')}</h6>
                      <p className="text-muted mb-0">093-651-7978</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="fs-4 text-secondary-gold me-3"><FaLine /></div>
                    <div>
                      <h6 className="fw-bold mb-1">{t('lineTitle')}</h6>
                      <p className="text-muted mb-0">@realestrad</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="fs-4 text-secondary-gold me-3"><FaEnvelope /></div>
                    <div>
                      <h6 className="fw-bold mb-1">{t('emailTitle')}</h6>
                      <p className="text-muted mb-0">contact@realestrad.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="fs-4 text-secondary-gold me-3"><FaClock /></div>
                    <div>
                      <h6 className="fw-bold mb-1">{t('hoursTitle')}</h6>
                      <p className="text-muted mb-0">{t('hoursDesc')}</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Placeholder */}
                <div className="rounded overflow-hidden shadow-sm" style={{ height: '300px', background: '#eee' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5123456789!2d101.654321!3d12.789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ3JzIwLjQiTiAxMDHCsDM5JzE1LjYiRQ!5e0!3m2!1sth!2sth!4v1234567890" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>

              {/* Contact Form */}
              <Col lg={7}>
                <Card className="border-0 shadow p-4 p-md-5">
                  <h3 className="fw-bold mb-4">{t('formTitle')}</h3>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formName">
                          <Form.Label>{t('name')}</Form.Label>
                          <Form.Control type="text" placeholder={t('namePlaceholder')} />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formPhone">
                          <Form.Label>{t('phone')}</Form.Label>
                          <Form.Control type="tel" placeholder={t('phonePlaceholder')} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formService">
                          <Form.Label>{t('service')}</Form.Label>
                          <Form.Select>
                            <option>{tApp('services.0')}</option>
                            <option>{tApp('services.1')}</option>
                            <option>{tApp('services.2')}</option>
                            <option>{tApp('services.3')}</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formBudget">
                          <Form.Label>{t('budget')}</Form.Label>
                          <Form.Select>
                            <option>{tApp('budgets.0')}</option>
                            <option>{tApp('budgets.1')}</option>
                            <option>{tApp('budgets.2')}</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label>{t('message')}</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder={t('messagePlaceholder')} />
                    </Form.Group>
                    <div className="d-grid">
                      <Button className="button-gold py-3 fw-bold">{t('submit')}</Button>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
