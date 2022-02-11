export const STATUS = {
  STATUS_WAIT: 1,
  STATUS_RUN: 2,
  STATUS_DONE: 3,
  STATUS_EXPIRED: 4,
};

export interface StatusType {
  id: number;
  name: string;
}
