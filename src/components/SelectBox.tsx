import { Select } from "antd";
import React, { ReactNode } from "react";

type SelectOption = { id: number; value: string; label: ReactNode };
interface SelectBoxProps {
  options: [SelectOption];
  onChange?: () => void;
}

function SelectBox({ onChange, options }: SelectBoxProps) {
  return <Select className="p-1" defaultValue="Order by Accending" size="large" onChange={onChange} options={options}></Select>;
}

export default SelectBox;
