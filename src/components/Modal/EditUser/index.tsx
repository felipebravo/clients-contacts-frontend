import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext, iEditUser } from '../../../contexts/UserContext';
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
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import { Input, StyledInputDiv, StyledInputLabel } from '../../Input/style';
import { Message } from '../../InputErrors/style';
import { Button } from '../../Button/style';

export const EditeUser = () => {
	const { setEditUserModal, editUser, deleteUser } = useContext(UserContext);

	const [seePass, setSeePass] = useState(false);

	const {
		register,
		getValues,
		formState: { errors },
	} = useForm<iEditUser>({
		resolver: yupResolver(editUserSchema),
	});

	const handleEditUser = () => {
		const dataToUpdate = getValues();

		for (let key in dataToUpdate) {
			if (!dataToUpdate[key]) {
				delete dataToUpdate[key];
			}
		}

		editUser(dataToUpdate);
	};

	const handleDeleteUser = () => {
		deleteUser();
	};

	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) && setEditUserModal(false);
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
						<h2>Sua conta</h2>
						<button onClick={() => setEditUserModal(false)}>
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
								type={seePass ? 'text' : 'password'}
								placeholder="Senha"
								className="borderline"
								{...register('password')}
							/>
							<StyledInputLabel className="text">
								Senha
							</StyledInputLabel>
							{seePass ? (
								<VscEye onClick={() => setSeePass(false)} />
							) : (
								<VscEyeClosed
									onClick={() => setSeePass(true)}
								/>
							)}
							<Message>{errors.password?.message}</Message>
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
								onClick={() => handleEditUser()}
							>
								Atualizar
							</Button>
							<p>OU</p>
							<Button
								type="button"
								onClick={() => handleDeleteUser()}
							>
								<AiOutlineDelete /> Excluir conta
							</Button>
						</DivButtonsModal>
					</StyledForm>
				</StyledContent>
			</StyledOverlay>
		</StyledModal>
	);
};
