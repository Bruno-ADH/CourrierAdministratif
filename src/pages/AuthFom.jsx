import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import "../styles/authForm.css";
import useAuthStore from "../store/useAuthStore";


const AuthForm = () => {
    const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const login = useAuthStore.use.login()

  const toggleForm = () =>{
    setIsLogin(!isLogin)
  }

  // Fonction pour gérer les changements des inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction de soumission du formulaire

  const validateForm = () => {
    let newErrors = {};
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Le nom est requis.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Le mot de passe est requis.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    login()
    navigate('/dashboard');
    console.log("Données soumises :", formData);
  };

  return (
    <div className="bg-light">
      <Container className="d-flex align-items-center justify-content-center vh-100 p-0">
      <Row className="align-items-center bg-primary w-75 h-lg-75 custom-rounded">
        {/* Section Image/Text */}
        <Col md={6} className="text-section h-100">
          <motion.h2
            key={isLogin ? "login-text" : "signup-text"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="my-3"
          >
            {isLogin ? "Bienvenue sur GCA !" : "Inscrivez-vous !"}
          </motion.h2>
        </Col>

        {/* Section Formulaire */}
        <Col md={6} className="d-flex form-section bg-white border-0 rounded-start-5 h-100 justify-content-center align-items-center">
          <motion.div
            key={isLogin ? "login-form" : "signup-form"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-100"
          >
            <h2 className="mb-5">{isLogin ? "Connexion" : "Inscription"}</h2>
            <Form onSubmit={handleSubmit}>
              {!isLogin && (
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <Alert variant="danger" className="mt-2 p-2">{errors.name}</Alert>}
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  // required
                />
                {errors.email && <Alert variant="danger" className="mt-2 p-2">{errors.email}</Alert>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  // required
                />
                {errors.password && <Alert variant="danger" className="mt-2 p-2">{errors.password}</Alert>}
              </Form.Group>
              <Button variant="primary" className="w-100" type="submit">
                {isLogin ? "Se connecter" : "S'inscrire"}
              </Button>
            </Form>
            <p className="mt-3">
              {isLogin
                ? "Vous n'avez pas de compte ? "
                : "Vous avez déjà un compte ? "}
              <a href="#" onClick={toggleForm}>
                {isLogin ? "S'inscrire" : "Se connecter"}
              </a>
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AuthForm;
