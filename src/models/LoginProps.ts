export interface ContainerProps {
  bgImage: string;
}

export interface PassWordProps {
  type: string;
  visible: boolean; 
}

export interface PasswordInputProps {
  type: string;
  placeholder: string;
  onChange: () => void;
  onToggleShowPassword: () => void;
  showPassword: boolean;
}