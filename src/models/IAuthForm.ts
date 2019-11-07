export interface IAuthFormProps {
  headerText: string;
  errorMessage: string;
  onSubmitForm: (par: {}) => void;
  name: string;
  submitButtonText: string;
}
