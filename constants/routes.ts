import { id } from "zod/v4/locales";

const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  ASK_QUESTIONS: '/ask-question', 
  QUESTION: (id: string) => `/questions/${id}`,
};

export default ROUTES;
