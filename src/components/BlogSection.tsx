'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const blogs = [
  {
    title: 'วัสดุก่อสร้างที่ควรรู้ก่อนสร้างบ้าน',
    category: 'HOMETOUR',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop',
    date: '31 Dec 2025'
  },
  {
    title: '5 สิ่งที่หลายคนพลาดตอนสร้างบ้าน',
    category: 'HOMETOUR',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop',
    date: '30 Dec 2025'
  },
  {
    title: 'Before & After: บ้านที่ออกแบบใหม่เพื่อครอบครัว',
    category: 'HOMETOUR',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2674&auto=format&fit=crop',
    date: '29 Dec 2025'
  }
];

const BlogSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h5 className="text-secondary-gold fw-bold">BLOG</h5>
            <h2 className="display-6 fw-bold text-primary-green mb-0">พื้นที่แห่งไอเดียดีๆ สำหรับคนรักบ้าน</h2>
          </div>
          <Button variant="outline-dark" className="rounded-pill px-4">ดูทั้งหมด</Button>
        </div>
        <Row>
          {blogs.map((blog, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Img variant="top" src={blog.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-secondary-gold fw-bold">{blog.category}</small>
                    <small className="text-muted">{blog.date}</small>
                  </div>
                  <Card.Title className="fw-bold h5 mb-3">{blog.title}</Card.Title>
                  <Button variant="link" className="p-0 text-primary-green fw-bold text-decoration-none">
                    อ่านเพิ่มเติม →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
