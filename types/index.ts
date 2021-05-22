import { targets as kubernetes } from './kubernetes';
import { targets as postman } from './postman';

export const targets = [
  postman,
  kubernetes,
].flat();
