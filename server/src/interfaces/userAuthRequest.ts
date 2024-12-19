import type { Request } from 'express';
import type IJwtPayload from './jwtpayload.js';

export default interface IUserAuthRequest extends Request { 
  user: IJwtPayload
}
