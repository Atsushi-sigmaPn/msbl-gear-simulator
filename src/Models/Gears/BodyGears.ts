import { Gear, Part } from "./Gear"

const NoGear: Gear = {
    part: Part.Body,
    name: "ギアなし",
    status: {
        strength:    0,
        speed:       0,
        shooting:    0,
        passing:     0,
        technique:   0,
    }
}

const MascleChest: Gear = {
    part: Part.Body,
    name: "マッスルチェスト",
    status: {
        strength:   +2,
        speed:       0,
        shooting:   -2,
        passing:     0,
        technique:   0,
    }
}

const TurboPad: Gear = {
    part: Part.Body,
    name: "ターボパッド",
    status: {
        strength:    0,
        speed:      +2,
        shooting:    0,
        passing:    -2,
        technique:   0,
    }
}

const CannonPlate: Gear = {
    part: Part.Body,
    name: "キャノンプレート",
    status: {
        strength:   -2,
        speed:       0,
        shooting:   +2,
        passing:     0,
        technique:   0,
    }
}

const ChainPlate: Gear = {
    part: Part.Body,
    name: "チェーンプレート",
    status: {
        strength:    0,
        speed:       0,
        shooting:    0,
        passing:    +2,
        technique:  -2,
    }
}

const TrickPad: Gear = {
    part: Part.Body,
    name: "トリックパッド",
    status: {
        strength:   -2,
        speed:       0,
        shooting:    0,
        passing:     0,
        technique:  +2,
    }
}

const BushidoArmor: Gear = {
    part: Part.Body,
    name: "ムネアテ",
    status: {
        strength:   +4,
        speed:      -1,
        shooting:   -1,
        passing:    -1,
        technique:  -1,
    }
}

const KnightPlate: Gear = {
    part: Part.Body,
    name: "ナイトプレート",
    status: {
        strength:   +2,
        speed:      -2,
        shooting:   +1,
        passing:    -2,
        technique:  +1,
    }
}

export const BodyGears: Gear[] = [
    NoGear,
    MascleChest,
    TurboPad,
    CannonPlate,
    ChainPlate,
    TrickPad,
    BushidoArmor,
    KnightPlate
]