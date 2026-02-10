# Skill Nest: 1-Month Learning & Implementation Plan

This plan guides you from zero to a fully deployed AI-powered EdTech platform in 4 weeks. It combines concept learning with practical implementation.

## User Review Required
> [!IMPORTANT]
> This is a fast-paced schedule. It assumes you can dedicate significant time daily. If you are learning new concepts (like Next.js or Python ML) from scratch, we may need to adjust the velocity.

## Week 1: The Foundation - Full Stack Basics & Auth
**Goal:** Build the skeleton of the app, set up the database, and handle secure user login.

### Concepts to Learn
- **Frontend:** Next.js App Router, React Server Components vs Client Components, Tailwind CSS utility classes.
- **Backend:** REST API design, Node.js event loop (basics), Express.js middleware.
- **Database:** NoSQL modeling with MongoDB (Schemas, Models).
- **Security:** JWT (JSON Web Tokens), Hashing (bcrypt), Role-Based Access Control (RBAC).

### Implementation Tasks
#### Days 1-2: Project Setup & Frontend UI
- [ ] Initialize Monorepo or separate folders for `client`, `server`, `ml-service`.
- [ ] Setup Next.js with Tailwind CSS and ShadCN UI.
- [ ] Create Landing Page and Auth Pages (Login/Register).

#### Days 3-4: Backend & Database
- [ ] Setup Express.js server.
- [ ] Connect to MongoDB Atlas (Cluster setup).
- [ ] Create User Schema (Name, Email, Password, Role: Student/Instructor/Admin).

#### Days 5-7: Authentication System
- [ ] Implement Registration API (Hash passwords).
- [ ] Implement Login API (Issue JWT).
- [ ] Protect frontend routes (Middleware/HOC).

## Week 2: Core Features - Courses & Payments
**Goal:** Allow instructors to create content and students to consume it.

### Concepts to Learn
- **State Management:** Redux Toolkit (Slices, Thunks for async logic).
- **Data Fetching:** React Query or SWR (caching, invalidation).
- **File Handling:** Uploading images/videos (Cloudinary or AWS S3).
- **Caching:** Redis basics (why and when to cache).
- **Payments:** Stripe Payment Intents API, Webhooks.

### Implementation Tasks
#### Days 8-10: Course Management (Instructor)
- [ ] Create Course Schema (Title, Description, Videos, Price).
- [ ] Build Instructor Dashboard (Create/Edit/Delete Courses).
- [ ] specific file upload service configuration.

#### Days 11-12: Student Experience
- [ ] Build Course Catalog (Search, Filter).
- [ ] Implement Course Player (Video streaming).
- [ ] Track progress (Video completion status).

#### Days 13-14: Payments & Redis
- [ ] Integrate Stripe for Checkout.
- [ ] Setup Webhook to unlock course access after payment.
- [ ] Implement Redis to cache course details for faster loading.

## Week 3: The Brain - AI & Machine Learning
**Goal:** Make the platform "smart" with recommendations and an AI tutor.

### Concepts to Learn
- **Python API:** FastAPI (Async endpoints, Pydantic models).
- **ML Basics:** Collaborative Filtering vs Content-Based Filtering.
- **NLP:** Transformers, Embeddings, Vector Databases (optional but good).
- **Integration:** Microservices communication (Node.js calling Python services).

### Implementation Tasks
#### Days 15-16: Python Service Setup
- [ ] Setup FastAPI project.
- [ ] Create a "Hello World" endpoint.
- [ ] Connect Node.js backend to Python service (internally).

#### Days 17-19: Recommendation Engine
- [ ] **Data:** Generate dummy user interaction data (clicks, enrollments).
- [ ] **Model:** Build a simple Content-Based recommendation system (using Scikit-learn).
    - *Logic:* "Users who liked 'Python 101' might like 'Advanced Python'".
- [ ] API endpoint to `get_recommendations(user_id)`.

#### Days 20-21: AI Tutor (LLM Wrapper)
- [ ] Integrate OpenAI API or HuggingFace model.
- [ ] Create a Chat interface in the Frontend.
- [ ] Implement `ask_tutor` endpoint that takes context (current course) and answers student questions.

## Week 4: Production Readiness - DevOps & Deploy
**Goal:** Polish the application and put it on the internet.

### Concepts to Learn
- **Containerization:** Docker (Images, Containers, Docker Compose).
- **CI/CD:** Continuous Integration/Deployment workflows.
- **Cloud:** Hosting static sites vs dynamic APIs.

### Implementation Tasks
#### Days 22-24: Polish & Optimization
- [ ] Fix bugs.
- [ ] Improve UI/UX (Loading states, Error boundaries).
- [ ] Add Form validation (Zod/Yup).

#### Days 25-27: Docker & Deployment
- [ ] Write `Dockerfile` for Client, Server, and ML Service.
- [ ] Create `docker-compose.yml` to run everything locally with one command.
- [ ] Deploy Frontend to Vercel.
- [ ] Deploy Backends to Render/Railway.

#### Day 28: Final Review
- [ ] Full end-to-end testing.
- [ ] Celebrate!

## Resources & Tools
- **VS Code** (Extensions: ES7+, DOM, Python, Prettier).
- **Postman** (for API testing).
- **MongoDB Compass** (GUI for Database).
