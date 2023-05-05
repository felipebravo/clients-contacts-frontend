import * as yup from 'yup';

export const editUserSchema = yup.object({
	fullName: yup.string().notRequired(),
	email: yup.string().email().notRequired(),
	password: yup.string().notRequired(),
	phone: yup.string().notRequired(),
});
