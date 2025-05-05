import { ReactNode } from "react";
import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
interface ButtonProps {
  type: "default" | "link" | "primary" | "text" | "dashed" | undefined;
  size: SizeType;
  children?: ReactNode;
  onClick: () => void;
  className?: string;
}

export default function CoustomButton({ type, size, children, onClick, className }: ButtonProps) {
  return (
    <Button type={type} size={size} onClick={onClick} className={`${className}`}>
      {children}
    </Button>
  );
}
