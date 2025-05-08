/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Alert, Drawer } from "antd";
import InputField from "./InputField";
import CoustomButton from "./Button";
import { useDispatch } from "react-redux";
import { addDomain } from "../redux/reducer/domainSlice";
import { isValidDomain } from "../utils/domainValidation";
import { AppDispatch } from "../redux/store";

interface DrawerCustomProps {
  open: boolean;
  onClose: () => void;
}

const DrawerCustom = ({ onClose, open }: DrawerCustomProps) => {
  const [value, setValue] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const addDomainHandler = () => {
    if (isValidDomain(value)) {
      setErr(false);
      const domain = { createdDate: new Date(), domain: value, status: "new status", isActive: true };
      dispatch(addDomain(domain));
      onClose();
      return;
    }
    setErr(true);
  };

  return (
    <Drawer title="Add domain" closable={{ "aria-label": "Close Button" }} onClose={onClose} open={open}>
      <div className="w-full h-full flex flex-col justify-between gap-2">
        <>
          <InputField required size="large" value={value} onChange={(e: any) => setValue(e.target.value)} placeholder="EX: https://......" />
          {err && <Alert message="Check Value Not Empty and Validate as Doamin" type="error" showIcon />}
        </>
        <div className="flex justify-end gap-2 mt-auto">
          <CoustomButton onClick={onClose} size="large" type="default">
            <h1 className="p-2">Cansel</h1>
          </CoustomButton>
          <CoustomButton onClick={() => addDomainHandler()} size="large" type="primary">
            <h1 className="p-2">Add</h1>
          </CoustomButton>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerCustom;
