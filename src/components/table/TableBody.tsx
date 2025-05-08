/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Button, Skeleton, Table, TableProps, Typography } from "antd";
import StatusTag from "./StatusTag";
import { ExportOutlined, InfoCircleOutlined, MoreOutlined } from "@ant-design/icons";
import { formateDate } from "../../utils/formateDate";
import { useDispatch, useSelector } from "react-redux";
import { fetchDomains } from "../../redux/reducer/domainSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/store";

interface DataType {
  _id: string | number;
  domain: string;
  isActive: boolean;
  status: "pending" | "verified" | "rejected" | any;
  createdDate: Date | string;
}

function TableBody() {
  const dispatch = useDispatch<AppDispatch>();
  const { filtered, status, error } = useSelector((state: RootState) => state.domain);
  useEffect(() => {
    dispatch(fetchDomains());
  }, [dispatch]);

  if (status === "loading") return <TableLoading />;
  if (error) return <Alert message="Error To fetch Data!!!" type="error" showIcon />;
  return <Table<DataType> rowKey={(record) => record.domain} pagination={{ pageSize: 15 }} columns={columns} dataSource={filtered} />;
}

export default TableBody;
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Domain URL",
    dataIndex: "domain",
    key: "domain",
    render: (record, value) => (
      <div className="flex items-center cursor-pointer hover:underline gap-1">
        {value.isActive ? <span></span> : <InfoCircleOutlined />}
        <Typography className="font-semibold text-gray-900">{record}</Typography>
        <ExportOutlined />
      </div>
    ),
  },
  {
    title: "Active Status",
    dataIndex: "isActive",
    key: "isActive",
    render: (text) => <h1 className={`font-semibold ${text ? "text-green-500" : "text-red-500"}`}>{text ? "Active" : "Not Active"}</h1>,
  },
  {
    title: "Verification Status",
    dataIndex: "status",
    key: "status",
    render: (record) => {
      return <StatusTag status={record} />;
    },
    align: "center",
  },
  { title: "Created at", dataIndex: "createdDate", render: (record) => <Typography>{formateDate(record)}</Typography> },
  {
    title: "",
    render: () => (
      <Button size="small">
        <MoreOutlined />
      </Button>
    ),
    align: "end",
  },
];

const TableLoading = () => (
  <>
    {" "}
    <Skeleton.Input block active size="large" className="p-4 bg-slate-50 rounded shadow" />
    <Skeleton.Input block active size="large" className="p-4 bg-slate-50 rounded shadow" />
    <Skeleton.Input block active size="large" className="p-4 bg-slate-50 rounded shadow" />
    <Skeleton.Input block active size="large" className="p-4 bg-slate-50 rounded shadow" />
  </>
);
