# store-social-distancing
- An App that reduces wait time of users while visiting their store, avoiding long waits and thus reducing the risk of exposure to contagious viruses.

# This App allow USERS to:
- See the max capacity of people allowed of their selected store (vendor) per hour
- Reserve their spot for their selected vendor for an hour of their selection
- Cancel their reservation
- See statistics of the most busy time for their selected store

# This App allow the VENDORS to:
- Set opearational times for their store
- Set the max capacity of people allowed to remain on premises per hour
- Update number of people currently in their premises (By using a QR Scanner)

# Tech Stack Used:
- Database: PostgreSQL hosted on ElephantSQL
- Backend: NodeJS, Express
- Frontend: React (Web), React-native (Android, IOS)

# Getting Started:
## Start The Server (Backend)
- Create a `.env` file according to the `.env.example` file in the `backend` root directory.
- `npm install`, `npm start` to start the server. If no PORT defined in .env file, the server automatically starts at PORT:8000.
## Start The Client (Frontend)
- Create a `.env` file according to the `.env.example` file in the `frontend` root directory.
- `npm install`, `npm start` to start the client server. The React app automatically starts at PORT:3000 unless specified otherwise in `script` of `package.json` file. 

# Libraries Used (Package.json):
- 