import { AppContextProps, AppState, Tokens, UserObject } from './types';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext<AppState | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [user, setUser] = useState<UserObject | undefined>(undefined);
	const [tokens, setToken] = useState<Tokens | undefined>(undefined);

	const setTokenState = (accessToken: string, refreshToken: string) => {
		// Here add logic to validate the tokens.
		setToken({ accessToken, refreshToken });
	};

	const logOut = () => {
		setUser(undefined);
		setToken(undefined);
		localStorage.removeItem('tokens');
		localStorage.removeItem('user');
	};

	return (
		<AppContext.Provider value={{ user, setUser, tokens, setToken: setTokenState, logOut }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppContextProvider');
	}
	return context;
};

