import { FieldProps } from 'formik';

export interface InputProps extends FieldProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  bootstrapClass?: string;
}

export interface TextAreaProps extends FieldProps {
  id?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
}

export interface SelectProps extends FieldProps {
  id?: string;
  label?: string;
  disabledValue?: boolean;
  selectOptions: { name: string; value: string }[];
}

export interface FileProps extends FieldProps {
  id?: string;
  label?: string;
  acceptType?: string;
  formikProps?: any;
}
