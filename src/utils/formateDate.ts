export const formateDate = (date: Date | string) => new Date(date).toLocaleDateString("en-US", { dateStyle: "medium" });
