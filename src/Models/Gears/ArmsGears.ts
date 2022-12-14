import { Gear, Part } from "./Gear"

const NoGear: Gear = {
    part: Part.Arms,
    name: "ギアなし",
    status: {
        strength:    0,
        speed:       0,
        shooting:    0,
        passing:     0,
        technique:   0,
    }
}

const MascleGauntlets: Gear = {
    part: Part.Arms,
    name: "マッスルガントレット",
    status: {
        strength:   +2,
        speed:       0,
        shooting:    0,
        passing:    -2,
        technique:   0,
    }
}

const TurboGloves: Gear = {
    part: Part.Arms,
    name: "ターボグローブ",
    status: {
        strength:   -2,
        speed:      +2,
        shooting:    0,
        passing:     0,
        technique:   0,
    }
}

const CannonGloves: Gear = {
    part: Part.Arms,
    name: "キャノングローブ",
    status: {
        strength:    0,
        speed:      -2,
        shooting:   +2,
        passing:     0,
        technique:   0,
    }
}

const ChainGauntlets: Gear = {
    part: Part.Arms,
    name: "チェーンガントレット",
    status: {
        strength:    0,
        speed:       0,
        shooting:   -2,
        passing:    +2,
        technique:   0,
    }
}

const TrickGloves: Gear = {
    part: Part.Arms,
    name: "トリックグローブ",
    status: {
        strength:    0,
        speed:      -2,
        shooting:    0,
        passing:     0,
        technique:  +2,
    }
}

const BushidoBracers: Gear = {
    part: Part.Arms,
    name: "コテ",
    status: {
        strength:   -1,
        speed:      -1,
        shooting:   -1,
        passing:    -1,
        technique:  +4,
    }
}

const KnightGauntlets: Gear = {
    part: Part.Arms,
    name: "ナイトガントレット",
    status: {
        strength:   +2,
        speed:      +1,
        shooting:   +1,
        passing:    -2,
        technique:  -2,
    }
}

const BarrelGauntlets: Gear = {
    part: Part.Arms,
    name: "バレルガントレット",
    status: {
        strength:   -2,
        speed:      -2,
        shooting:   +2,
        passing:    +1,
        technique:  +1,
    }
}

const ShellGauntlets: Gear = {
    part: Part.Arms,
    name: "シェルガントレット",
    status: {
        strength:   +1,
        speed:      +2,
        shooting:   -2,
        passing:    -2,
        technique:  +1,
    }
}

export const ArmsGears: Gear[] = [
    NoGear,
    MascleGauntlets,
    TurboGloves,
    CannonGloves,
    ChainGauntlets,
    TrickGloves,
    BushidoBracers,
    KnightGauntlets,
    BarrelGauntlets,
    ShellGauntlets,
]