const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const userRoutes = require('./routes/user.routes');
const noteRoutes = require('./routes/note.routes');

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors({
    origin: [
        "https://krs-classes-2024-client.vercel.app",
        "https://krs-classes-2024-client.vercel.app/signup"
        "https://krs-classes-2024-client-59jtk0cr0-raghav-jaiswals-projects.vercel.app"
    ],
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true
}));

// app.use(cors({
//     origin: "*", // Allows requests from any origin
//     methods: ["POST", "GET", "PATCH", "DELETE"],
//     credentials: true
// }));



app.options('*', cors()); // Handle preflight requests

app.use('/users', userRoutes);
app.use('/notes', noteRoutes);

app.get("/", (req, res) => {
    res.json("hello");
});

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.get('*', (req, res) => {
    res.status(404).json({ error: 'route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App has started on PORT: ${PORT}`);
});
