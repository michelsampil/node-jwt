import { User } from "../models/User";

const users: User[] = [
  {
    id: 0,
    username: "michel",
    password: "$2b$10$zSFi19CeCGYBZxtDeF93WerWJ5ElwHdcm6ar6zsvzbTIcLuVqC8/K",
  },
];

export const findUserByUsername = (username: string): User | undefined => {
  const result = users.find((user) => user?.username === username);
  return result;
};

export const saveUser = (username: string, password: string): void => {
  const newUserId = users.length++;
  const newUser: User = { id: newUserId, username, password };
  users.push(newUser);
};
