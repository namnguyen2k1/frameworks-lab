import { NextFunction, Request, Response } from 'express';

export function validateUserCreateBody(req: Request, res: Response, next: NextFunction) {
  const { email, name } = req.body;

  const errors: string[] = [];

  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.push('Name is required');
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Email format is invalid');
    }
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
