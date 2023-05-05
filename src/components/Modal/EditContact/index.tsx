import { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserSchema } from '../../../schemas/editUser';
import {
	DivButtonsModal,
	DivHeaderModal,
	StyledContent,
	StyledForm,
	StyledModal,
	StyledOverlay,
} from '../style';
import { AiOutlineCloseCircle, AiOutlineDelete } from 'react-icons/ai';
import { Input, StyledInputDiv, StyledInputLabel } from '../../Input/style';
import { Message } from '../../InputErrors/style';
import { Button } from '../../Button/style';
import { ContactContext, iEditContact } from '../../../contexts/ContactContext';

export const EditContact = () => {
	const { selectedContact, setEditContactModal, editContact, deleteContact } =
		useContext(ContactContext);

	const {
		register,
		getValues,
		formState: { errors },
	} = useForm<iEditContact>({
		resolver: yupResolver(editUserSchema),
	});

	const handleEditContact = () => {
		const dataToUpdate = getValues();

		for (let key in dataToUpdate) {
			if (!dataToUpdate[key]) {
				delete dataToUpdate[key];
			}
		}

		editContact(dataToUpdate, selectedContact!.id);
	};

	const handleDeleteContact = () => {
		deleteContact(selectedContact!.id);
	};

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setEditContactModal(false);
		};

		document.addEventListener('mousedown', handleOutclick);

		return () => {
			document.removeEventListener('mousedown', handleOutclick);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<StyledModal>
			<StyledOverlay>
				<StyledContent ref={contentRef}>
					<DivHeaderModal>
						<h2>Novo contato</h2>
						<button onClick={() => setEditContactModal(false)}>
							<AiOutlineCloseCircle />
						</button>
					</DivHeaderModal>
					<StyledForm>
						<StyledInputDiv>
							<Input
								type="text"
								placeholder="Nome completo"
								className="borderline"
								{...register('fullName')}
							/>
							<StyledInputLabel className="text">
								Nome completo
							</StyledInputLabel>
							<Message>{errors.fullName?.message}</Message>
						</StyledInputDiv>
						<StyledInputDiv>
							<Input
								type="email"
								placeholder="E-mail"
								className="borderline"
								{...register('email')}
							/>
							<StyledInputLabel className="text">
								E-mail
							</StyledInputLabel>
							<Message>{errors.email?.message}</Message>
						</StyledInputDiv>
						<StyledInputDiv>
							<Input
								type="text"
								placeholder="Contato"
								className="borderline"
								{...register('phone')}
							/>
							<StyledInputLabel className="text">
								Contato
							</StyledInputLabel>
							<Message>{errors.phone?.message}</Message>
						</StyledInputDiv>
						<DivButtonsModal>
							<Button
								type="button"
								onClick={() => handleEditContact()}
							>
								Atualizar
							</Button>
							<p>OU</p>
							<Button
								type="button"
								onClick={() => handleDeleteContact()}
							>
								<AiOutlineDelete /> Excluir contato
							</Button>
						</DivButtonsModal>
					</StyledForm>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
