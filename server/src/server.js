const http = require('http');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const { connect } = require('./services/mongo');
const { loadPlanetsData, } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

async function startServer() {
    await connect();
    await loadPlanetsData();
    await loadLaunchData();
    server.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
}

startServer();