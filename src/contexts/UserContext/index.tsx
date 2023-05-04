import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

interface iUserContextProps {
	children: React.ReactNode;
}

export interface iLogin {
	email: string;
	password: string;
}

interface iLoginRes {
	token: string;
}

interface iDecodedToken {
	sub: string;
}

export interface iUser {
	id: string;
	fullName: string;
	email: string;
	phone: string;
	createdAt: string;
}

export interface iSignUp {
	fullName: string;
	email: string;
	password: string;
	phone: string;
}

interface iUserContext {
	user: iUser | null;
	setUser: React.Dispatch<React.SetStateAction<iUser | null>>;

	login(userAccess: iLogin): Promise<void>;
	signUp(userToCreate: iSignUp): Promise<void>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
	const [user, setUser] = useState<iUser | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		const handleUser = async () => {
			const token = localStorage.getItem('@authToken');
			const userId = localStorage.getItem('@userId');

			if (token) {
				try {
					api.defaults.headers.authorization = `Bearer ${token}`;

					const res = await api.get<iUser>(`users/${userId}`);

					setUser(res.data);
				} catch (error) {
					localStorage.removeItem('@authToken');
					console.error(error);
				}
			}
		};
		handleUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const login = async (userAccess: iLogin): Promise<void> => {
		try {
			const res = await api.post<iLoginRes>('login', userAccess);

			localStorage.setItem('@authToken', res.data.token);

			const decodedToken = (await jwtDecode(
				res.data.token
			)) as iDecodedToken;

			localStorage.setItem('@userId', decodedToken.sub);

			navigate('/homepage', { replace: true });
		} catch (error) {}
	};

	const signUp = async (userToCreate: iSignUp): Promise<void> => {
		try {
			const res = await api.post<iUser>('users', userToCreate);

			res.data.id && navigate('/login', { replace: true });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<UserContext.Provider value={{ user, setUser, login, signUp }}>
			{children}
		</UserContext.Provider>
	);
};
