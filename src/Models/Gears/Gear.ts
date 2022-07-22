import { Status } from "../Status";

enum Part {
    Head,
    Arms,
    Body,
    Legs
}

type Gear = {
    part: Part;
    name: string;
    status: Status;
}

export { Part };
export type { Gear };
