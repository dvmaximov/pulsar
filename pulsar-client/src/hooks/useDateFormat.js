import { useMemo } from "react";
import format from "date-fns/format";

export const useDateFormat = (date, mask = "dd-MM-yyyy - HH:mm") => {
  const formattedDate = useMemo(() => {
    if (!date) return "";
    return format(date, mask);
  }, [date]);

  return formattedDate;
};
