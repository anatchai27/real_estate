'use client';

import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const projects = [
  { id: 1, title: 'บ้านคุณสุ', location: 'ต.ตะพง อ.เมือง จ.ระยอง', area: '250 ตร.ม.', style: 'Modern', image: 'https://images.unsplash.com/photo-1600596542815-27b88e35eabb?q=80&w=2669&auto=format&fit=crop' },
  { id: 2, title: 'บ้านคุณวิชัย', location: 'อ.แกลง จ.ระยอง', area: '180 ตร.ม.', style: 'Minimal', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, title: 'บ้านคุณกานต์', location: 'อ.ศรีราชา จ.ชลบุรี', area: '320 ตร.ม.', style: 'Luxury', image: 'https://images.unsplash.com/photo-1600607687940-4ad236f699c2?q=80&w=2670&auto=format&fit=crop' },
  { id: 4, title: 'บ้านคุณเมย์', location: 'อ.เมือง จ.จันทบุรี', area: '210 ตร.ม.', style: 'Modern', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop' },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const t = useTranslations('Portfolio');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.style === filter);

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
            {/* Filter */}
            <Nav className="justify-content-center mb-5 gap-2">
              {['All', 'Modern', 'Minimal', 'Luxury'].map((cat) => (
                <Nav.Item key={cat}>
                  <Button 
                    variant={filter === cat ? 'primary-green' : 'outline-dark'} 
                    className={`rounded-pill px-4 ${filter === cat ? 'bg-primary-green text-white' : ''}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat === 'All' ? t('filterAll') : cat}
                  </Button>
                </Nav.Item>
              ))}
            </Nav>

            <Row>
              {filteredProjects.map((project) => (
                <Col key={project.id} md={6} lg={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100 overflow-hidden project-card">
                    <div style={{ height: '250px', overflow: 'hidden' }}>
                      <Card.Img variant="top" src={project.image} className="h-100 w-100" style={{ objectFit: 'cover' }} />
                    </div>
                    <Card.Body>
                      <h5 className="fw-bold mb-2">{project.title}</h5>
                      <p className="text-muted small mb-1">{t('location')}: {project.location}</p>
                      <p className="text-muted small mb-3">{t('area')}: {project.area} | {t('style')}: {project.style}</p>
                      <Button variant="outline-primary" className="w-100">
                        {t('viewDetails')}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .project-card {
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </>
  );
}
