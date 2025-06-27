import express, { Request, Response } from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const app = express();
app.use(express.json());

// Basic health check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "healthy Server" });
});

// Add user
app.get('/add-user', async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  });

  res.status(200).json({ message: "user successfully inserted", user });
});

// List users
app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

// Create HTTP server
const server = createServer(app);

// Attach WebSocket server to same HTTP server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', (data) => {
    console.log('received:', data.toString());

    // Echo back the message
    ws.send(`You said: ${data}`);
  });

  ws.send('Connected to WebSocket server');
});

// Start both servers on one port
const PORT = Number(process.env.PORT) || 3001;
server.listen(PORT, () => {
  console.log(`HTTP & WebSocket server is running on port ${PORT}`);
});
