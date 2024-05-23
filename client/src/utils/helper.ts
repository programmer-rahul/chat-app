import { format } from "date-fns";

const formatMessageDate = (dateStr: string, formatStr: string = "p") => {
  return format(new Date(dateStr), formatStr);
};

export { formatMessageDate };
