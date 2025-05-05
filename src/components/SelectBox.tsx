import { Select } from "antd";
import React, { ReactNode } from "react";

interface SelectBoxProps {
  options: [{ value: string; label: ReactNode }];
  onChange?: () => void;
}

function SelectBox({ onChange, options }: SelectBoxProps) {
  return <Select className="p-1" defaultValue="Order by Accending" size="large" onChange={onChange} options={options}></Select>;
}

export default SelectBox;
