import * as Yup from 'yup';

export const validationFormSchema = Yup.object().shape({
  network: Yup.string().required('Please select a network.'),
  codeId: Yup.string().required('Code id is required'),
});
