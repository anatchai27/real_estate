'use client';

import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface AppointmentModalProps {
  show: boolean;
  handleClose: () => void;
}

const AppointmentModal = ({ show, handleClose }: AppointmentModalProps) => {
  const [validated, setValidated] = useState(false);
  const t = useTranslations('Appointment');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="bg-primary-green text-white">
        <Modal.Title>{t('title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>{t('name')}</Form.Label>
              <Form.Control required type="text" placeholder={t('namePlaceholder')} />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>{t('phone')}</Form.Label>
              <Form.Control required type="tel" placeholder={t('phonePlaceholder')} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>{t('service')}</Form.Label>
              <Form.Select required>
                <option value="">{t('serviceSelect')}</option>
                <option>{t('services.0')}</option>
                <option>{t('services.1')}</option>
                <option>{t('services.2')}</option>
                <option>{t('services.3')}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>{t('budget')}</Form.Label>
              <Form.Select required>
                <option value="">{t('budgetSelect')}</option>
                <option>{t('budgets.0')}</option>
                <option>{t('budgets.1')}</option>
                <option>{t('budgets.2')}</option>
                <option>{t('budgets.3')}</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label>{t('details')}</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder={t('detailsPlaceholder')} />
          </Form.Group>
          <div className="d-grid">
            <Button type="submit" className="button-gold py-2">{t('submit')}</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AppointmentModal;
