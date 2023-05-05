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
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Input, StyledInputDiv, StyledInputLabel } from '../../Input/style';
import { Message } from '../../InputErrors/style';
import { Button } from '../../Button/style';
import { ContactContext, iNewContact } from '../../../contexts/ContactContext';

export const CreateContact = () => {
	const { setCreateContactModal, createContact } = useContext(ContactContext);

	const {
		register,
		getValues,
		formState: { errors },
	} = useForm<iNewContact>({
		resolver: yupResolver(editUserSchema),
	});

	const handleCreateContact = () => {
		createContact(getValues());
	};

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) &&
				setCreateContactModal(false);
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
						<button onClick={() => setCreateContactModal(false)}>
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
								onClick={() => handleCreateContact()}
							>
								Criar
							</Button>
						</DivButtonsModal>
					</StyledForm>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
