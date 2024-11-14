type Status = "Виконано" | "Невиконано"

interface Task {
  id: number,
  name: string,
  description: string,
  status: Status,
  file: File | null
}

export type { Status, Task };
