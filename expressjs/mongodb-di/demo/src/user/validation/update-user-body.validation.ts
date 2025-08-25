import { NextFunction, Request, Response } from 'express';

export function validateUserUpdateBody(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  const errors: string[] = [];

  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.push('Name is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 400,
      message: 'Validation failed',
      errors
    });
  }

  next();
}
