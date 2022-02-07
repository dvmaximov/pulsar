class TaskStaticService {
  data = [
    {
      id: 1,
      name: "Первая программа",
      description: "Краткое описание первой программы",
      actions: [
        {
          id: 1,
          type: {
            id: 1,
            name: "установка азимута",
          },
          value1: 15.9,
          value2: 0,
          value3: 0,
        },
        {
          id: 2,
          type: {
            id: 3,
            name: "ожидание",
          },
          value1: 1.3,
          value2: 0,
          value3: 0,
        },
        {
          id: 3,
          type: {
            id: 4,
            name: "разряд",
          },
          value1: 1,
          value2: 1.3,
          value3: 2.5,
        },
      ],
    },
    {
      id: 2,
      name: "Вторая программа",
      description: "Краткое описание второй программы",
      actions: [
        {
          id: 1,
          type: {
            id: 1,
            name: "установка азимута",
          },
          value1: 120.9,
          value2: 0,
          value3: 0,
        },
        {
          id: 2,
          type: {
            id: 3,
            name: "ожидание",
          },
          value1: 200,
          value2: 0,
          value3: 0,
        },
        {
          id: 3,
          type: {
            id: 4,
            name: "разряд",
          },
          value1: 3,
          value2: 2.5,
          value3: 5.0,
        },
      ],
    },
  ];

  idx = this.data.length + 1;

  async fetch() {
    return this.data;
  }

  async fetchById(id) {
    return this.data.find((item) => item.id === +id);
  }

  async create(task) {
    this.idx++;
    const newTask = { id: this.idx, ...task };
    this.data.push(newTask);
    return newTask;
  }

  async remove(id) {
    this.data = this.data.filter((item) => item.id !== id);
    return { removed: 1, error: "" };
  }

  async update(task) {
    const idx = this.data.findIndex((item) => item.id === task.id);
    this.data[idx] = { ...task };
    return task;
  }
}

export default new TaskStaticService();
