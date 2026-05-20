import React, { useState } from "react";
import DarkStar from "../StarDesign/DarkStar";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPhone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, userEmail, userPhone, subject, message, userAge } = formData;
    if (!userName || !userEmail || !userPhone || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!userEmail.includes("@") || !userEmail.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Your message has been sent successfully!");
    setFormData({
      userName: "",
      userAge: "",
      userEmail: "",
      userPhone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contactPage bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-primary">Contact Us</h1>
              <DarkStar />
              <p className="text-muted mt-3">We'd love to hear from you</p>
            </div>

            <Form onSubmit={handleSubmit} className="p-4 bg-white rounded-4 shadow">
              <Form.Group className="mb-4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  placeholder="Enter your full name"
                  value={formData.userName}
                  onChange={handleChange}
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="userAge"
                  placeholder="Your age"
                  value={formData.userAge}
                  onChange={handleChange}
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="userEmail"
                  placeholder="name@example.com"
                  value={formData.userEmail}
                  onChange={handleChange}
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="userPhone"
                  placeholder="+1 234 567 8900"
                  value={formData.userPhone}
                  onChange={handleChange}
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Message subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="py-2"
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;