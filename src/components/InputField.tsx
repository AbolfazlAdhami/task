import React, { ReactNode } from "react";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface InputFieldProps {
  placeholder?: string;
  size: SizeType;
  prefix?: ReactNode;
  className?: string;
}

function InputField({ size, placeholder, prefix, className }: InputFieldProps) {
  return <Input size={size} className="px-2" placeholder={placeholder} prefix={prefix} />;
}

export default InputField;
