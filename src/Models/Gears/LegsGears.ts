import { Gear, Part } from "./Gear"

const NoGear: Gear = {
    part: Part.Legs,
    name: "ギアなし",
    status: {
        strength:    0,
        speed:       0,
        shooting:    0,
        passing:     0,
        technique:   0,
    }
}

const MascleBoots: Gear = {
    part: Part.Legs,
    name: "マッスルブーツ",
    status: {
        strength:   +2,
        speed:      -2,
        shooting:    0,
        passing:     0,
        technique:   0,
    }
}

const TurboBoots: Gear = {
    part: Part.Legs,
    name: "ターボブーツ",
    status: {
        strength:    0,
        speed:      +2,
        shooting:   -2,
        passing:     0,
        technique:   0,
    }
}

const CannonBoots: Gear = {
    part: Part.Legs,
    name: "キャノンブーツ",
    status: {
        strength:    0,
        speed:       0,
        shooting:   +2,
        passing:    -2,
        technique:   0,
    }
}

const ChainBoots: Gear = {
    part: Part.Legs,
    name: "チェーンブーツ",
    status: {
        strength:   -2,
        speed:       0,
        shooting:    0,
        passing:    +2,
        technique:   0,
    }
}

const TrickBoots: Gear = {
    part: Part.Legs,
    name: "トリックブーツ",
    status: {
        strength:    0,
        speed:       0,
        shooting:   -2,
        passing:     0,
        technique:  +2,
    }
}

const BushidoSandals: Gear = {
    part: Part.Legs,
    name: "ワラジ",
    status: {
        strength:   -1,
        speed:      +4,
        shooting:   -1,
        passing:    -1,
        technique:  -1,
    }
}

const KnightBoots: Gear = {
    part: Part.Legs,
    name: "ナイトブーツ",
    status: {
        strength:   +2,
        speed:      -2,
        shooting:   +2,
        passing:    -1,
        technique:  -1,
    }
}

const BarrelBoots: Gear = {
    part: Part.Legs,
    name: "バレルブーツ",
    status: {
        strength:   +1,
        speed:      -2,
        shooting:   +2,
        passing:    +1,
        technique:  -2,
    }
}

export const LegsGears: Gear[] = [
    NoGear,
    MascleBoots,
    TurboBoots,
    CannonBoots,
    ChainBoots,
    TrickBoots,
    BushidoSandals,
    KnightBoots,
    BarrelBoots,
]