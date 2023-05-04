import * as yup from 'yup';

export const signUpSchema = yup.object({
	fullName: yup.string().required('Preencher nome completo'),
	email: yup.string().email('E-mail inválido').required('Preencher e-mail'),
	password: yup.string().required('Preencher senha'),
	phone: yup.string().required('Preencher contato'),
});
