export interface ActionValue {
  label: string;
  max: number;
  min: number;
  step: number;
}

export interface ActionType {
  id: number;
  name: string;
  label1: ActionValue;
  label2: ActionValue;
  label3: ActionValue;
}
