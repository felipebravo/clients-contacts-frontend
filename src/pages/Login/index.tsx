import { useContext, useState } from 'react';
import { Button } from '../../components/Button/style';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import {
	Input,
	StyledInputDiv,
	StyledInputLabel,
} from '../../components/Input/style';
import { Message } from '../../components/InputErrors/style';
import { Link } from '../../components/Link';
import { Main } from '../../components/Main';
import { UserContext, iLogin } from '../../contexts/UserContext';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../schemas/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';

export const Login = () => {
	const { login } = useContext(UserContext);

	const [seePass, setSeePass] = useState(false);

	const {
		register,
		getValues,
		formState: { errors },
	} = useForm<iLogin>({
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = () => {
		login(getValues());
	};

	return (
		<Main>
			<Form>
				<h1 className="form_title">Faça seu login</h1>
				<StyledInputDiv>
					<Input
						type="email"
						placeholder="E-mail"
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
				<Button
					type="button"
					onClick={() => {
						handleLogin();
					}}
				>
					Continuar
				</Button>
				<p className="form_paragraph">OU</p>
				<Link to="/signup">Ainda não é cadastrado?</Link>
			</Form>
			<Footer />
		</Main>
	);
};
