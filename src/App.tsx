/* eslint-disable @typescript-eslint/no-explicit-any */
import CoustomButton from "./components/Button";
import SelectBox from "./components/SelectBox";
import InputField from "./components/InputField";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import DrawerCustom from "./components/Drawer";
import { useState } from "react";
import TableBody from "./components/table/TableBody";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setSortOrder } from "./redux/reducer/domainSlice";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { searchText } = useSelector((state: any) => state.domain);
  return (
    <section className="min-w-screen min-h-screen p-5   bg-slate-100">
      <h1 className="text-3xl font-mono font-light ">Domains</h1>
      <div className="flex items-center  my-8  justify-between">
        <CoustomButton type="primary" size="large" onClick={() => setOpen(true)}>
          <h1 className="p-4 text-lg font-light">
            <PlusOutlined className="mx-1" />
            Add Domain
          </h1>
        </CoustomButton>
        <div className="flex items-center gap-2">
          <SelectBox
            onChange={(value: any) => dispatch(setSortOrder(value))}
            options={[
              { id: 1, value: "asc", label: <h1 className="text-lg">A to Z</h1> },
              { id: 2, value: "desc", label: <h1 className="text-lg">Z to A</h1> },
            ]}
          />
          <InputField value={searchText} onChange={(e: any) => dispatch(setSearchText(e.target.value))} className="px-2" placeholder="Search" prefix={<SearchOutlined />} size="large" />
        </div>
      </div>
      <TableBody />
      <DrawerCustom open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default App;
