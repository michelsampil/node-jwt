import { User } from "../models/User";

const users: User[] = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

export const findUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};
