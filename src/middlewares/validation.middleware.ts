import {NextFunction, Request, Response, RequestHandler} from 'express';
import {AnyZodObject} from 'zod';

export const validate = (schema: AnyZodObject, type: 'body' | 'query' | 'params' = 'body'): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req[type]); // Parse and validate the body
      next(); // Call the next middleware/controller
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: (error as any).issues,
        });
      }
    }
  };
};
