import { AppContextProps, AppState, Tokens } from './types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { User, UserCredential, createUserWithEmailAndPassword, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { httpInstance } from '../../services/httpinstance';

const AppContext = createContext<AppState | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProps) => {
  	const [user, setUser] = useState<User | null>(null);
	const [loadingContext, setLoadingContext] = useState<boolean>(true);
	const [tokens, setToken] = useState<Tokens | undefined>(undefined);

	const setTokenState = (accessToken: string, refreshToken: string) => {
		// Here add logic to validate the tokens.
		setToken({ accessToken, refreshToken });
	};

	const signUp = (email: string, password: string): Promise<UserCredential> => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email: string, password: string): Promise<UserCredential> => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = (): Promise<void> => {
		return signOut(auth);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoadingContext(false);

			if( currentUser ){
				httpInstance.interceptors.request.use(
					async ( config ) => {
					const newConfig = {...config};
					const token = await getIdToken(currentUser);
					// newConfig.headers.Authorization = `Bearer ${token}`;
					return newConfig;
				  },
				  (error) => {
					// console.log
					return Promise.reject(error);
				  }
				);
			}
		})
	}, []);

	return (
		// Cambiar foto
		<AppContext.Provider 
			value={{
				user,
				setUser,
				tokens,
				setTokenState,
				logOut,
				signUp,
				login,
				loadingContext
				}}>
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

