import React, { ReactNode } from "react";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface InputFieldProps {
  placeholder?: string;
  size: SizeType;
  prefix?: ReactNode;
}

function InputField({ size, placeholder, prefix }: InputFieldProps) {
  return <Input size={size} placeholder={placeholder} prefix={prefix} />;
}

export default InputField;
