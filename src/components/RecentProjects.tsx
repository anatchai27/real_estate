'use client';

import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { useTranslations } from 'next-intl';

const RecentProjects = () => {
  const t = useTranslations('RecentProjects');

  const projects = [
    {
      id: 1,
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-27b88e35eabb?q=80&w=2669&auto=format&fit=crop',
      category: t('projects.p1.cat')
    },
    {
      id: 2,
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop',
      category: t('projects.p2.cat')
    },
    {
      id: 3,
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2670&auto=format&fit=crop',
      category: t('projects.p3.cat')
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary-green">{t('title')}</h2>
          <p className="lead text-muted">{t('subtitle')}</p>
        </div>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="mb-4">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                category={project.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RecentProjects;
