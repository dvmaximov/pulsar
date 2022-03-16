import { useMemo } from "react";
import { dictonary } from "../store";

export const useStatusBgColor = (status, initValue = "#f1f1f1") => {
  const color = useMemo(() => {
    switch (status.id) {
      case dictonary.STATUS.STATUS_RUN:
        return "#ffffe6";
        break;
      case dictonary.STATUS.STATUS_DONE:
        return "#e8ffe6";
        break;
      default:
        return initValue;
    }
  }, [status]);

  return color;
};
