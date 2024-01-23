import express from 'express';
import cors from "cors";
import helmet from "helmet";
import path from "path";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


// lambda function: () => {} 
app.get("/", (req, res) => {
    res.sendFile(path.resolve() + "/index.html");
});

const HOSTNAME = 'localhost';
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
});