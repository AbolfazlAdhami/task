import { Button, Table, TableProps, Typography } from "antd";
import StatusTag from "./StatusTag";
import { ExportOutlined, InfoCircleOutlined, MoreOutlined } from "@ant-design/icons";
import { useGetDomainsQuery } from "../../redux/slice/domainSlice";

interface DataType {
  _id: string | number;
  domain: string;
  isActive: boolean;
  status: "pending" | "verified" | "rejected" | any;
  createdDate: Date | string;
}

function TableBody() {
  const { data, isLoading, error } = useGetDomainsQuery();
  //   if (isLoading) return <Spin className="block mx-auto mt-10" />;
  return <Table<DataType> rowKey={(record) => record.domain} pagination={{ pageSize: 5 }} columns={columns} dataSource={data} />;
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
      if (record == "Not Verified") return <StatusTag status={"rejected"} />;
      return <StatusTag status={record} />;
    },
    align: "center",
  },
  { title: "Created at", dataIndex: "createdDate", render: (record) => <Typography>{new Date(record).toLocaleDateString("en-US", { dateStyle: "medium" })}</Typography> },
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
