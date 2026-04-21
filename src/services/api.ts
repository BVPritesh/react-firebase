import type { User } from "../types";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};