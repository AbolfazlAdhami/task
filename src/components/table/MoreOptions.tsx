/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Typography } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteDomain, updateDomain } from "../../redux/reducer/domainSlice";
function MoreOptions({ value }: any) {
  console.log(value.id);
  const dispatch = useDispatch<AppDispatch>();

  const updateDomainHander = () => {
    const domain = {
      domain: value.domain,
      isActive: true,
    };
    dispatch(updateDomain({ _id: value.id, data: domain }));
  };

  const items: MenuProps["items"] = [
    {
      label: <Typography style={{ opacity: 0.3 }}>View Pages</Typography>,
      key: "0",
      disabled: true,
    },
    {
      label: <Typography onClick={() => updateDomainHander()}>Verify</Typography>,
      key: "1",
    },
    {
      label: <Typography style={{ opacity: 0.3 }}>Install Script</Typography>,
      key: "2",
      disabled: true,
    },
    {
      label: (
        <Typography onClick={() => dispatch(deleteDomain(value?.id))} style={{ color: "red" }}>
          Delete
        </Typography>
      ),
      key: "3",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <MoreOutlined />
    </Dropdown>
  );
}

export default MoreOptions;
