import { Injectable } from "@nestjs/common";
import { SettingsService } from "../settings/settings.service";
import { Gpio } from "./gpio.service";
import { SETTING } from "../settings/settings.interface";

const PIN = {
  PIN_LEFT: 7,
  PIN_RIGHT: 11,
  PIN_UP: 5,
  PIN_DOWN: 3,
  PIN_SPARK: 13,
};

const DEVICE = {
  DEVICE_ON: 0,
  DEVICE_OFF: 1,
};

@Injectable()
export class DeviceService {
  private driveLeft = null;
  private driveRight = null;
  private driveUp = null;
  private driveDown = null;
  private spark = null;
  private diod = null;

  constructor(private readonly settings: SettingsService) {
    this.driveLeft = new Gpio({ pin: PIN.PIN_LEFT });
    this.driveRight = new Gpio({ pin: PIN.PIN_RIGHT });
    this.driveUp = new Gpio({ pin: PIN.PIN_UP });
    this.driveDown = new Gpio({ pin: PIN.PIN_DOWN });
    this.spark = new Gpio({ pin: PIN.PIN_SPARK });
    this.diod = new Gpio({ pin: 15 });
  }

  private async delay(ms): Promise<any> {
    return new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        resolve();
      }, ms);
    });
  }

  private async writePin(pin, value): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const empty = () => {};
    try {
      switch (pin) {
        case PIN.PIN_LEFT:
          if (this.driveLeft) await this.driveLeft.write(value).catch(empty);
          break;
        case PIN.PIN_RIGHT:
          if (this.driveRight) this.driveRight.write(value).catch(empty);
          break;
        case PIN.PIN_UP:
          if (this.driveUp) this.driveUp.write(value).catch(empty);
          break;
        case PIN.PIN_DOWN:
          if (this.driveDown) this.driveDown.write(value).catch(empty);
          break;
        case PIN.PIN_SPARK:
          if (this.spark) this.spark.write(value).catch(empty);
          break;
      }
    } catch {}
  }

  async stopAll(): Promise<any> {
    this.writePin(PIN.PIN_LEFT, DEVICE.DEVICE_OFF);
    this.writePin(PIN.PIN_RIGHT, DEVICE.DEVICE_OFF);
    this.writePin(PIN.PIN_UP, DEVICE.DEVICE_OFF);
    this.writePin(PIN.PIN_DOWN, DEVICE.DEVICE_OFF);
    this.writePin(PIN.PIN_SPARK, DEVICE.DEVICE_OFF);
  }

  private async calculeteAngle(azimuth): Promise<any> {
    let speed = await this.settings.getById(SETTING.SETTING_AZIMUTH_SPEED);
    speed = speed.value;
    let currentAngle = await this.settings.getById(
      SETTING.SETTING_CURRENT_AZIMUTH,
    );
    currentAngle = currentAngle.value;
    const different = azimuth - currentAngle;
    return different / speed;
  }

  private async calculeteSlope(slope): Promise<any> {
    let speed = await this.settings.getById(SETTING.SETTING_SLOPE_SPEED);
    speed = speed.value;
    let currentSlope = await this.settings.getById(
      SETTING.SETTING_CURRENT_SLOPE,
    );
    currentSlope = currentSlope.value;
    const different = slope - currentSlope;
    return different / speed;
  }

  async setAzimuth(value): Promise<any> {
    let time = await this.calculeteAngle(value);
    const direction = time < 0 ? PIN.PIN_RIGHT : PIN.PIN_LEFT;
    time = Math.abs(time * 1000);

    if (time === 0) return;
    this.writePin(direction, DEVICE.DEVICE_ON);
    await this.delay(time);
    this.writePin(direction, DEVICE.DEVICE_OFF);

    const azimuth = await this.settings.getById(
      SETTING.SETTING_CURRENT_AZIMUTH,
    );
    azimuth.value = value;
    this.settings.update(SETTING.SETTING_CURRENT_AZIMUTH, azimuth);
  }

  async setSlop(value): Promise<any> {
    let time = await this.calculeteSlope(value);
    const direction = time < 0 ? PIN.PIN_UP : PIN.PIN_DOWN;
    time = Math.abs(time * 1000);

    if (time === 0) return;
    this.writePin(direction, DEVICE.DEVICE_ON);
    await this.delay(time);
    this.writePin(direction, DEVICE.DEVICE_OFF);

    const slope = await this.settings.getById(SETTING.SETTING_CURRENT_SLOPE);
    slope.value = value;
    this.settings.update(SETTING.SETTING_CURRENT_SLOPE, slope);
  }

  async setWait(value): Promise<any> {
    await this.delay(value * 1000);
  }

  async setSpark(value): Promise<any> {
    console.log("spark ", value);
    this.writePin(PIN.PIN_SPARK, DEVICE.DEVICE_ON);
    await this.delay(value * 1000);
    this.writePin(PIN.PIN_SPARK, DEVICE.DEVICE_OFF);
  }
}
