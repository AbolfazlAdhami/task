/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface InputFieldProps {
  placeholder?: string;
  size: SizeType;
  prefix?: ReactNode;
  className?: string;
  onChange: any;
  value?: string;
  required?: boolean;
}

function InputField({ size, placeholder, prefix, className, onChange, value, required = false }: InputFieldProps) {
  return <Input required value={value} allowClear size={size} onChange={onChange} className={className} placeholder={placeholder} prefix={prefix} />;
}

export default InputField;
