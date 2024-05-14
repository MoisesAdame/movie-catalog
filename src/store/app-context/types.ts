import React from 'react';

export interface UserObject {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AppState {
  user: UserObject | undefined;
  setUser: (user: UserObject) => void;
  tokens: Tokens | undefined;
  setToken: (accessToken: string, refreshToken: string) => void;
  logOut: () => void;
}

export type AppContextProps = {
  children: React.ReactNode;
}
