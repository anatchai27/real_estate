'use client';

import { Card, Button, Badge } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const ProjectCard = ({ title, description, imageUrl, category }: ProjectCardProps) => {
  const t = useTranslations('RecentProjects');
  return (
    <Card className="h-100 shadow-md border-0 hover-lift overflow-hidden rounded-4">
      <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={imageUrl} 
          style={{ 
            objectFit: 'cover', 
            height: '100%', 
            width: '100%',
            transition: 'transform 0.6s ease'
          }} 
          className="project-img"
        />
        <div className="overlay-gradient" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))',
          pointerEvents: 'none'
        }}></div>
        <Badge 
          className="bg-primary-green px-3 py-2"
          style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px',
            fontSize: '0.85rem',
            borderRadius: '50px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}
        >
          {category}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold text-header h4 mb-3">{title}</Card.Title>
        <Card.Text className="text-muted flex-grow-1 mb-4" style={{ fontSize: '0.95rem' }}>
          {description}
        </Card.Text>
        <Button className="button-outline-green w-100 py-2 rounded-pill fw-bold">
          {t('viewDetails')}
        </Button>
      </Card.Body>
      <style jsx>{`
        :global(.hover-lift:hover .project-img) {
          transform: scale(1.1);
        }
      `}</style>
    </Card>
  );
};

export default ProjectCard;
