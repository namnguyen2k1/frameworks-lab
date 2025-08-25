import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongodb';

export function isObjectId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid ID format'
    });
  }

  next();
}
