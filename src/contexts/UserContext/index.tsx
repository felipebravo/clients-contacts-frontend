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
	user: iUser;
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

export interface iEditUser {
	fullName?: string;
	email?: string;
	password?: string;
	phone?: string;
	[key: string]: any;
}

interface iUserContext {
	user: iUser | null;

	editUserModal: boolean;
	setEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;

	login(userAccess: iLogin): Promise<void>;
	logout(): void;
	signUp(userToCreate: iSignUp): Promise<void>;
	editUser(newUserInfo: iEditUser): Promise<void>;
	deleteUser(): Promise<void>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
	const [user, setUser] = useState<iUser | null>(null);
	const [editUserModal, setEditUserModal] = useState<boolean>(false);

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

					user && navigate('/homepage', { replace: true });
				} catch (error) {
					localStorage.removeItem('@authToken');
					console.error(error);
				}
			}
		};
		handleUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editUserModal]);

	const login = async (userAccess: iLogin): Promise<void> => {
		try {
			const res = await api.post<iLoginRes>('login', userAccess);
			const { user, token } = res.data;

			setUser(user);
			localStorage.setItem('@authToken', token);

			const decodedToken = (await jwtDecode(
				res.data.token
			)) as iDecodedToken;

			localStorage.setItem('@userId', decodedToken.sub);

			navigate('/homepage', { replace: true });
		} catch (error) {}
	};

	const logout = () => {
		localStorage.removeItem('@authToken');
		localStorage.removeItem('@userId');

		navigate('/');
	};

	const signUp = async (userToCreate: iSignUp): Promise<void> => {
		try {
			const res = await api.post<iUser>('users', userToCreate);

			res.data.id && navigate('/login', { replace: true });
		} catch (error) {
			console.error(error);
		}
	};

	const editUser = async (userNewInfo: iEditUser): Promise<void> => {
		const userId = localStorage.getItem('@userId');

		try {
			const res = await api.patch<iUser>(`users/${userId}`, userNewInfo);

			res.data.id && setUser(res.data);

			setEditUserModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteUser = async (): Promise<void> => {
		const userId = localStorage.getItem('@userId');

		try {
			await api.delete<void>(`users/${userId}`);

			localStorage.removeItem('@authToken');
			localStorage.removeItem('@userId');

			setEditUserModal(false);

			navigate('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				editUserModal,
				setEditUserModal,
				login,
				logout,
				signUp,
				editUser,
				deleteUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
