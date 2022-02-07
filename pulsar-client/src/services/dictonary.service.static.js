class DictonaryStaticService {
  data = [
    {
      id: 1,
      name: "установка азимута",
      value1: {
        label: "азимут (град)",
        max: 350,
        min: 0,
        step: 0.1,
      },
      value2: {
        label: "",
        max: 0,
        min: 0,
        step: 1,
      },
      value3: {
        label: "",
        max: 0,
        min: 0,
        step: 1,
      },
    },
    {
      id: 2,
      name: "установка наклона",
      value1: {
        label: "наклон (град)",
        max: 10,
        min: 0,
        step: 1,
      },
      value2: {
        label: "",
        max: 0,
        min: 0,
        step: 1,
      },
      value3: {
        label: "",
        max: 0,
        min: 0,
        step: 1,
      },
    },
    {
      id: 3,
      name: "ожидание",
      value1: {
        label: "время (сек)",
        max: 10000,
        min: 0,
        step: 1,
      },
      value2: {
        label: "",
        max: 0,
        min: 0,
        step: 1,
      },
      value3: {
        label: "",
        max: 0,
        min: 0,
        step: 1,
      },
    },
    {
      id: 4,
      name: "разряд",
      value1: {
        label: "количество",
        max: 1000,
        min: 1,
        step: 1,
      },
      value2: {
        label: "время (сек)",
        max: 10000,
        min: 0,
        step: 0.1,
      },

      value3: {
        label: "интервал (сек)",
        max: 1000,
        min: 0,
        step: 0.1,
      },
    },
  ];

  async fetch() {
    return this.data;
  }
}

export default new DictonaryStaticService();
