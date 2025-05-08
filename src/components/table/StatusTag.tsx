import { Tag } from "antd";

interface StatusBadge {
  color: "success" | "processing" | "error" | "default" | "warning";
  text: string;
}
type Status = "pending" | "verified" | "rejected" | "Verified";
const StatusRecord: Record<Status, StatusBadge> = {
  pending: { color: "warning", text: "PENDING" },
  verified: { color: "success", text: "VERIFIED" },
  Verified: { color: "success", text: "VERIFIED" },
  rejected: { color: "error", text: "REJECTED" },
};

function StatusTag({ status }: { status: Status }) {
  return <Tag color={StatusRecord[status] ? StatusRecord[status].color : "default"}>{StatusRecord[status] ? StatusRecord[status].text : status}</Tag>;
}

export default StatusTag;
