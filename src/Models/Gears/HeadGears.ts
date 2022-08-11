import { Gear, Part } from "./Gear"

const NoGear: Gear = {
    part: Part.Head,
    name: "ギアなし",
    status: {
        strength:    0,
        speed:       0,
        shooting:    0,
        passing:     0,
        technique:   0,
    }
}

const MascleHelmet: Gear = {
    part: Part.Head,
    name: "マッスルヘルメット",
    status: {
        strength:   +2,
        speed:       0,
        shooting:    0,
        passing:     0,
        technique:  -2,
    }
}

const TurboHelmet: Gear = {
    part: Part.Head,
    name: "ターボヘルメット",
    status: {
        strength:    0,
        speed:      +2,
        shooting:    0,
        passing:     0,
        technique:  -2,
    }
}

const CannonVisor: Gear = {
    part: Part.Head,
    name: "キャノンバイザー",
    status: {
        strength:    0,
        speed:       0,
        shooting:   +2,
        passing:     0,
        technique:  -2,
    }
}

const ChainHelmet: Gear = {
    part: Part.Head,
    name: "チェーンヘルメット",
    status: {
        strength:    0,
        speed:      -2,
        shooting:    0,
        passing:    +2,
        technique:   0,
    }
}

const TrickHelmet: Gear = {
    part: Part.Head,
    name: "トリックヘルメット",
    status: {
        strength:    0,
        speed:       0,
        shooting:    0,
        passing:    -2,
        technique:  +2,
    }
}

const BushidoHelmet: Gear = {
    part: Part.Head,
    name: "カブト",
    status: {
        strength:   -1,
        speed:      -1,
        shooting:   -1,
        passing:    +4,
        technique:  -1,
    }
}

const KnightHelmet: Gear = {
    part: Part.Head,
    name: "ナイトヘルメット",
    status: {
        strength:   +2,
        speed:      -2,
        shooting:   +1,
        passing:    +1,
        technique:  -2,
    }
}

export const HeadGears: Gear[] = [
    NoGear,
    MascleHelmet,
    TurboHelmet,
    CannonVisor,
    ChainHelmet,
    TrickHelmet,
    BushidoHelmet,
    KnightHelmet,
]