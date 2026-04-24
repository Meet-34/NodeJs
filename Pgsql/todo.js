// import express from 'express';
// import bodyParser from 'body-parser';
// import pkg from 'pg';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const { Client } = pkg;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const server = express();
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(express.json());

// const db = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'todo_db',
//     password: 'Tog',
//     port: 5432,
// });

// db.connect();

// // Routes
// server.get('/', (req, res) => {
//     res.sendFile(__dirname + '/todo.html');
// });

// server.post('/add-task', (req, res) => {
//     console.log("Request Received");

//     const task = req.body.task_name;
//     console.log("Task:", task);

//     db.query(
//         'INSERT INTO tasks(task_name, status) VALUES($1, $2)',
//         [task, 'pending'],
//         (err, result) => {
//             if (err) {
//                 console.log("Error:", err);
//                 res.send("Error Occurred");
//             } else {
//                 console.log("Task Added");
//                 res.send("Task Added Successfully");
//             }
//         }
//     );
// });

// // Start server
// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

// Routes
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/todo.html');
});

server.post('/add-task', async (req, res) => {
    try {
        const task = req.body.task_name;

        await prisma.task.create({
            data: {
                task_name: task,
                status: 'pending'
            }
        });

        res.send("Task Added Successfully");
    } catch (err) {
        console.log(err);
        res.send("Error Occurred");
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running on port 3000");
});