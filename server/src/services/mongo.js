const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is open!');
});

mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
});

async function connect() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to database successfully`);
    } catch (error) {
        console.log('Connect fail!!' + error.message);
    }
}

async function close() {
    await mongoose.connection.close();
}

module.exports = {
    connect,
    close,
};