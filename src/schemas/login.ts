import * as yup from 'yup';

export const loginSchema = yup.object({
	email: yup.string().email('E-mail inválido').required('Preencher e-mail'),
	password: yup.string().required('Preencher senha'),
});
