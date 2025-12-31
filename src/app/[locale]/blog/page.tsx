'use client';

import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const blogs = [
  { id: 1, title: '5 สิ่งที่ต้องเตรียมตัวก่อนสร้างบ้าน', category: 'ความรู้เรื่องบ้าน', date: '25 Dec 2025', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop' },
  { id: 2, title: 'ฮวงจุ้ยบ้าน 2026 จัดบ้านอย่างไรให้เฮง', category: 'ฮวงจุ้ย', date: '20 Dec 2025', image: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, title: 'เลือกวัสดุอย่างไรให้บ้านเย็นประหยัดไฟ', category: 'วัสดุก่อสร้าง', date: '15 Dec 2025', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop' },
  { id: 4, title: 'ขั้นตอนการกู้ธนาคารเพื่อสร้างบ้าน', category: 'การเงิน', date: '10 Dec 2025', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2611&auto=format&fit=crop' },
];

export default function BlogPage() {
  const t = useTranslations('Blog');

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
              {/* Main Content */}
              <Col lg={8}>
                <Row>
                  {blogs.map((blog) => (
                    <Col md={6} key={blog.id} className="mb-4">
                      <Card className="border-0 shadow-sm h-100">
                        <Card.Img variant="top" src={blog.image} style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body>
                          <div className="d-flex justify-content-between mb-2">
                            <small className="text-secondary-gold fw-bold">{blog.category}</small>
                            <small className="text-muted">{blog.date}</small>
                          </div>
                          <Card.Title className="fw-bold h5 mb-3">{blog.title}</Card.Title>
                          <Button variant="link" className="p-0 text-primary-green fw-bold text-decoration-none">
                            {t('readMore')} →
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>

              {/* Sidebar */}
              <Col lg={4}>
                <div className="ps-lg-4">
                  {/* Search */}
                  <div className="mb-5">
                    <h5 className="fw-bold mb-3">{t('search')}</h5>
                    <InputGroup>
                      <Form.Control placeholder={t('searchPlaceholder')} />
                      <Button variant="primary-green" className="bg-primary-green text-white">
                        <FaSearch />
                      </Button>
                    </InputGroup>
                  </div>

                  {/* Categories */}
                  <div className="mb-5">
                    <h5 className="fw-bold mb-3">{t('categories')}</h5>
                    <ul className="list-unstyled">
                      {['ความรู้เรื่องบ้าน', 'ฮวงจุ้ย', 'วัสดุก่อสร้าง', 'การเงิน', 'เทรนด์แต่งบ้าน'].map((cat) => (
                        <li key={cat} className="mb-2">
                          <a href="#" className="text-decoration-none text-muted hover-primary-green">
                            {cat}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Posts */}
                  <div>
                    <h5 className="fw-bold mb-3">{t('recentPosts')}</h5>
                    {blogs.slice(0, 3).map((blog) => (
                      <div key={blog.id} className="d-flex mb-3 align-items-center">
                        <img src={blog.image} alt="" className="rounded" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                        <div className="ms-3">
                          <h6 className="mb-0 small fw-bold">{blog.title}</h6>
                          <small className="text-muted">{blog.date}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .hover-primary-green:hover {
          color: var(--primary-green) !important;
          padding-left: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}
