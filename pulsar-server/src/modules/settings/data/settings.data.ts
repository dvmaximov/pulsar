import { Setting, SETTING } from "../settings.interface";
export const defaultSettings: Setting[] = [
  {
    id: SETTING.SETTING_AZIMUTH_SPEED,
    name: "скорость вращения стола",
    value: 6.0,
  },
  {
    id: SETTING.SETTING_SLOPE_SPEED,
    name: "скорость наклона стола",
    value: 0,
  },
  {
    id: SETTING.SETTING_CURRENT_AZIMUTH,
    name: "текущий азимут стола",
    value: 0,
  },
  {
    id: SETTING.SETTING_CURRENT_SLOPE,
    name: "текущий наклон стола",
    value: 0,
  },
];