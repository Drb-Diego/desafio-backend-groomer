import { NextFunction, Request, Response } from 'express';

export default (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => res.status(500).json({ error: error.message });
