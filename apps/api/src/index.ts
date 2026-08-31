import 'dotenv/config';
import express from 'express';
import { z } from 'zod';

import { Gender } from '@ares/shared';

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(express.json());

const athleteSchema = z.object({
  name: z.string().min(1),
  gender: z.nativeEnum(Gender),
  subscribed: z.boolean().default(false),
});

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'ares-api',
    environment: process.env.NODE_ENV ?? 'development',
  });
});

app.get('/api', (_req, res) => {
  res.json({
    message: 'Ares API is ready',
    defaultGender: Gender.MALE,
  });
});

app.post('/api/athletes', (req, res) => {
  const parsed = athleteSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: 'Invalid athlete payload',
      issues: parsed.error.issues,
    });
  }

  return res.status(201).json({
    message: 'Athlete created',
    athlete: parsed.data,
  });
});

app.listen(port, () => {
  console.log(`Ares API listening on http://localhost:${port}`);
});
