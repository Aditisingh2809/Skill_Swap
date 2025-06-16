# Skill_Swap
SkillSwap Backend
A bidding system built with Node.js, Express.js, and MongoDB to facilitate skill-based exchanges.

Features
RESTful API for bid storage and retrieval

MongoDB integration to store bids dynamically

Tested API routes using Postman

Scalable backend structure

Setup Instructions
Clone the repository

bash
git clone https://github.com/Aditisingh2809/Skill_Swap.git
cd Skill_Swap/backend
Install dependencies

bash
npm install
Run backend

bash
node server.js
Test API routes with Postman

GET /api/bids → Fetches all bids

POST /api/bids → Stores a bid

API Endpoints
POST /api/bids
Request Body (JSON):

json
{
   "amount": 100,
   "user": "Aditi"
}
Response: Bid stored successfully

GET /api/bids
Response: Returns all stored bids

Technologies Used
Backend: Node.js, Express.js

Database: MongoDB

API Testing: Postman

Future Improvements
Add user authentication

Implement bid sorting (latest/highest first)

Deploy backend online


