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

function SumStatus(gears: Gear[]): Status {
    let status: Status = {
        strength:   0,
        speed:      0,
        shooting:   0,
        passing:    0,
        technique:  0
    };

    gears.forEach(gear => {
        status.strength += gear.status.strength;
        status.speed += gear.status.speed;
        status.shooting += gear.status.shooting;
        status.passing += gear.status.passing;
        status.technique += gear.status.technique;
    });

    return status;
}

export { Part, SumStatus };
export type { Gear };
