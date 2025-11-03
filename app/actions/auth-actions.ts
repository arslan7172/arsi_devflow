"use server";

import {signOut } from "@/auth";
import ROUTES from "@/constants/routes";

export async function handleSignOut() {
  await signOut({ redirectTo: ROUTES.SIGN_IN });
}