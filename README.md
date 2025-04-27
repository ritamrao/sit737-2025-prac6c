# SIT737 – Cloud Native Application Development

**Credit Task 6.2C – Kubernetes Deployment, Port Forwarding, and Update**

## Overview
Deployed a containerized Node.js application to Kubernetes, interacted via port forwarding, and updated the application with a new version.

## Tools Used
- Node.js
- Docker
- Kubernetes (Docker Desktop)
- kubectl
- VS Code

## Part 1: Initial Deployment

### 1. Project Setup
```bash
npm init -y
npm install express
```
Created `app.js` with basic Express server on port 3000.

### 2. Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```
Built image:
```bash
docker build -t sit737-task6c-app:v1 .
```

### 3. Kubernetes Deployment
- `deployment.yaml` uses image `sit737-task6c-app:v1`
- `service.yaml` creates NodePort service at 31005.

Applied configs:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### 4. Port Forward
```bash
kubectl port-forward service/sit737-task6c-service 8080:3000
```
Accessed app at [http://localhost:8080](http://localhost:8080).

## Part 2: Application Update

### 1. Update app.js
Changed server response message.

### 2. Build New Image
```bash
docker build -t sit737-task6c-app:v2 .
```

### 3. Update Deployment
Edited `deployment.yaml` to use `sit737-task6c-app:v2`.

Re-applied:
```bash
kubectl apply -f deployment.yaml
```

### 4. Verify
Port forwarded again and confirmed updated message on localhost.

## Summary
- Node.js app deployed and updated on Kubernetes.
- Port forwarding enabled local access.
- Updates verified successfully.
