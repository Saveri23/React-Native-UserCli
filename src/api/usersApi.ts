import { User } from '../types/User';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};