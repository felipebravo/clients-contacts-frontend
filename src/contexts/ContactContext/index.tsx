import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { UserContext } from '../UserContext';

interface iContactContextProps {
	children: React.ReactNode;
}

interface iUserWithContacts {
	id: string;
	fullName: string;
	email: string;
	phone: string;
	createdAt: string;
	contacts: iContact[];
}

export interface iNewContact {
	fullName: string;
	email: string;
	phone: string;
}

export interface iContact {
	id: string;
	fullName: string;
	email: string;
	phone: string;
	createdAt: string;
	userId: string;
}

export interface iEditContact {
	fullName?: string;
	email?: string;
	password?: string;
	phone?: string;
	[key: string]: any;
}

interface iContactContext {
	contacts: iContact[] | null;
	selectedContact: iContact | null;
	setSelectedContact: React.Dispatch<React.SetStateAction<iContact | null>>;

	createContactModal: boolean;
	setCreateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
	editContactModal: boolean;
	setEditContactModal: React.Dispatch<React.SetStateAction<boolean>>;

	createContact(contactToCreate: iNewContact): Promise<void>;
	editContact(contactNewInfo: iEditContact, contactId: string): Promise<void>;
	deleteContact(contactId: string): Promise<void>;
}

export const ContactContext = createContext<iContactContext>(
	{} as iContactContext
);

export const ContactProvider = ({ children }: iContactContextProps) => {
	const { user } = useContext(UserContext);

	const [contacts, setContacts] = useState<iContact[] | null>(null);
	const [selectedContact, setSelectedContact] = useState<iContact | null>(
		null
	);

	const [createContactModal, setCreateContactModal] =
		useState<boolean>(false);
	const [editContactModal, setEditContactModal] = useState<boolean>(false);

	useEffect(() => {
		const handleContacts = async () => {
			try {
				if (user) {
					const res = await api.get<iUserWithContacts>('contacts');

					setContacts(res.data.contacts);
				}
			} catch (error) {
				console.error(error);
			}
		};
		handleContacts();
	}, [user, createContactModal, editContactModal]);

	const createContact = async (
		contactToCreate: iNewContact
	): Promise<void> => {
		try {
			const res = await api.post<iContact>('contacts', contactToCreate);

			res.data.id && setCreateContactModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	const editContact = async (
		contactNewInfo: iEditContact,
		contactId: string
	): Promise<void> => {
		try {
			await api.patch<iContact>(`contacts/${contactId}`, contactNewInfo);

			setEditContactModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteContact = async (contactId: string): Promise<void> => {
		try {
			await api.delete<void>(`contacts/${contactId}`);

			setEditContactModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ContactContext.Provider
			value={{
				contacts,
				selectedContact,
				setSelectedContact,
				createContactModal,
				setCreateContactModal,
				editContactModal,
				setEditContactModal,
				createContact,
				editContact,
				deleteContact,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};
