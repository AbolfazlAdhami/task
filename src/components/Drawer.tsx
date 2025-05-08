import { Drawer } from "antd";
interface DrawerCustomProps {
  open: boolean;
  onClose: () => void;
}

const DrawerCustom = ({ onClose, open }: DrawerCustomProps) => {
  return (
    <Drawer title="Basic Drawer" closable={{ "aria-label": "Close Button" }} onClose={onClose} open={open}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default DrawerCustom;
