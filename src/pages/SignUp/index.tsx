import { useContext, useState } from 'react';
import { Button } from '../../components/Button/style';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import {
	Input,
	StyledInputDiv,
	StyledInputLabel,
} from '../../components/Input/style';
import { Link } from '../../components/Link';
import { Main } from '../../components/Main';
import { UserContext, iSignUp } from '../../contexts/UserContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import { signUpSchema } from '../../schemas/signUp';
import { Message } from '../../components/InputErrors/style';

export const SignUp = () => {
	const { signUp } = useContext(UserContext);

	const [seePass, setSeePass] = useState(false);

	const {
		register,
		getValues,
		formState: { errors },
	} = useForm<iSignUp>({
		resolver: yupResolver(signUpSchema),
	});

	const handleSignUp = () => {
		signUp(getValues());
	};

	return (
		<Main>
			<Form>
				<h1 className="form_title">Cadastre-se</h1>
				<StyledInputDiv>
					<Input
						type="text"
						placeholder="Nome completo"
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
						placeholder="Email"
						{...register('email')}
					/>
					<StyledInputLabel className="text">E-mail</StyledInputLabel>
					<Message>{errors.email?.message}</Message>
				</StyledInputDiv>
				<StyledInputDiv>
					<Input
						type={seePass ? 'text' : 'password'}
						placeholder="Senha"
						{...register('password')}
					/>
					<StyledInputLabel className="text">Senha</StyledInputLabel>
					{seePass ? (
						<VscEye onClick={() => setSeePass(false)} />
					) : (
						<VscEyeClosed onClick={() => setSeePass(true)} />
					)}
					<Message>{errors.password?.message}</Message>
				</StyledInputDiv>
				<StyledInputDiv>
					<Input
						type="text"
						placeholder="Contato"
						{...register('phone')}
					/>
					<StyledInputLabel className="text">
						Contato
					</StyledInputLabel>
					<Message>{errors.phone?.message}</Message>
				</StyledInputDiv>
				<Button type="button" onClick={() => handleSignUp()}>
					Cadastrar
				</Button>
				<p className="form_paragraph">OU</p>
				<Link to="/login">Voltar para o login</Link>
			</Form>
			<Footer />
		</Main>
	);
};
