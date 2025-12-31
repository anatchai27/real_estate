'use client';

import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';
import AppointmentModal from './AppointmentModal';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} href="/" className="fw-bold fs-3 text-primary-green">
            REAL ESTRAD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4 align-items-center">
              <Nav.Link as={Link} href="/" className="px-3 fw-medium">{t('home')}</Nav.Link>
              <Nav.Link as={Link} href="/about" className="px-3 fw-medium">{t('about')}</Nav.Link>
              <Nav.Link as={Link} href="/services" className="px-3 fw-medium">{t('services')}</Nav.Link>
              <Nav.Link as={Link} href="/portfolio" className="px-3 fw-medium">{t('portfolio')}</Nav.Link>
              <Nav.Link as={Link} href="/blog" className="px-3 fw-medium">{t('blog')}</Nav.Link>
              <Nav.Link as={Link} href="/contact" className="px-3 fw-medium">{t('contact')}</Nav.Link>
              
              <NavDropdown title={<><FaGlobe className="me-1" /> {locale.toUpperCase()}</>} id="language-nav-dropdown" className="px-3 fw-medium">
                <NavDropdown.Item onClick={() => toggleLanguage('th')}>TH - ไทย</NavDropdown.Item>
                <NavDropdown.Item onClick={() => toggleLanguage('en')}>EN - English</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex align-items-center">
              <div className="me-3 d-none d-xl-block text-end">
                <small className="text-muted d-block">{t('consultFree')}</small>
                <span className="fw-bold text-primary-green">093-651-7978</span>
              </div>
              <Button className="button-gold px-4 rounded-pill" onClick={() => setShowModal(true)}>
                <FaPhoneAlt className="me-2" /> {t('appointment')}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AppointmentModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default AppNavbar;
