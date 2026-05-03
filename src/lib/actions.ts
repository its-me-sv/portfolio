"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// navigating on client side using
// server side redirect
export const navigate = async (path: string) => redirect(path);

// reading a cookie value by name
export const getCookie = async <T extends string = string>(
  name: string,
): Promise<T | undefined> => {
  return (await cookies()).get(name)?.value as T | undefined;
};

// writing a cookie value by name
export const setCookie = async <T extends string = string>(
  name: string,
  value: T,
) => {
  (await cookies()).set(name, value);
};
