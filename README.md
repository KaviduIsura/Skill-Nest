# Skill-Nest
An AI-Powered Smart Learning &amp; Career Platform

SkillPath AI

AI-Powered Smart Learning & Career Platform

SkillPath AI is a full-stack, AI-driven learning and career guidance platform designed to deliver personalized education experiences. The platform uses machine learning and deep learning models to recommend courses, track learner progress, and provide intelligent assistance through an AI tutor.

Built using Next.js, Node.js, MongoDB, Redis, and Python-based ML/DL services, SkillPath AI simulates a real-world EdTech SaaS system with secure authentication, role-based access, payment integration, and scalable cloud deployment.

The goal of this project is to demonstrate end-to-end system design, full-stack development, AI integration, and production-ready deployment practices in a single real-world application.

📌 Features
👤 User Management

Secure user authentication (JWT-based)

Role-based access control:

Student

Instructor

Admin

Session management with Redis

🎓 Learning & Course Management

Course creation and management (Instructor)

Course browsing with filters and search

Enrollment and progress tracking

Student learning dashboard

Instructor course analytics

🤖 AI & Machine Learning

Personalized course recommendations

Content-based filtering

Collaborative filtering

Learning behavior analysis

AI-powered course discovery

Intelligent learning insights

🧠 AI Tutor (Deep Learning)

NLP-based question answering system

Semantic search over course content

AI tutor chat interface

24/7 learning assistance

💳 Payments & Monetization

Secure payment processing with Stripe

One-time course purchases

Subscription-based access

Webhook-based payment verification

Payment history and access control

📊 Admin Dashboard & Analytics

User management

Course moderation

Revenue and enrollment analytics

System monitoring

⚡ Performance & Scalability

Redis caching for frequently accessed data

Background job processing

Microservice-based ML architecture

Production-ready deployment setup

🛠️ Tech Stack
Frontend

Next.js – Server-side rendering & routing

React – UI development

Redux Toolkit – Global state management

Tailwind CSS – Styling

ShadCN UI – Reusable UI components

Framer Motion – Animations

Backend

Node.js – Server runtime

Express.js – REST API framework

JWT – Authentication & authorization

MongoDB + Mongoose – Primary database

Redis – Caching & session management

BullMQ – Background jobs

Machine Learning & Deep Learning

Python

FastAPI – ML microservice

Scikit-learn – ML models

PyTorch / TensorFlow – Deep learning

HuggingFace Transformers – NLP models

MLflow – Model tracking

Payments

Stripe – Payment gateway & webhooks

DevOps & Deployment

Docker & Docker Compose

GitHub Actions – CI/CD

Vercel – Frontend hosting

Render / Fly.io – Backend hosting

Railway – ML service hosting

MongoDB Atlas

Upstash / Redis Cloud

🧩 System Architecture
High-Level Architecture Overview

The platform follows a modular, scalable architecture with separate services for frontend, backend, and AI processing.

User (Browser)
      |
      v
Frontend (Next.js + React)
      |
      v
Backend API (Node.js + Express)
      |
      +----------------------+
      |                      |
      v                      v
MongoDB                Redis Cache
      |
      v
ML / DL Service (Python + FastAPI)
      |
      v
Stripe Payment Gateway

Architecture Explanation

Frontend handles UI, routing, and state management.

Backend API manages business logic, authentication, payments, and communication with ML services.

MongoDB stores users, courses, enrollments, progress, and payments.

Redis caches frequently accessed data and manages sessions.

ML/DL Service handles recommendations and AI tutor functionality.

Stripe manages secure payment processing.