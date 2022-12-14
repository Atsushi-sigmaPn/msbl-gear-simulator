import { Status } from "./Status";

export type Character = {
    id: number;
    name: string;
    status: Status;
}

const Mario: Character = {
    id: 1,
    name: "マリオ",
    status: {
        strength:   11,
        speed:      12,
        shooting:   14,
        passing:    10,
        technique:  16,
    }
}

const Luigi: Character = {
    id: 2,
    name: "ルイージ",
    status: {
        strength:   11,
        speed:      11,
        shooting:   10,
        passing:    14,
        technique:  17,
    }    
}

const Bowser: Character = {
    id: 3,
    name: "クッパ",
    status: {
        strength:   17,
        speed:       9,
        shooting:   17,
        passing:    11,
        technique:   9,
    }    
}

const Peach: Character = {
    id: 4,
    name: "ピーチ",
    status: {
        strength:    9,
        speed:      17,
        shooting:    9,
        passing:    13,
        technique:  15,
    }    
}

const Rosalina: Character = {
    id: 5,
    name: "ロゼッタ",
    status: {
        strength:   14,
        speed:       9,
        shooting:   17,
        passing:    10,
        technique:  13,
    }    
}

const Toad: Character = {
    id: 6,
    name: "キノピオ",
    status: {
        strength:    9,
        speed:      17,
        shooting:   11,
        passing:    15,
        technique:  11,
    }
}

const Yoshi: Character = {
    id: 7,
    name: "ヨッシー",
    status: {
        strength:   10,
        speed:      10,
        shooting:   17,
        passing:    17,
        technique:   9,
    }
}

const DonkeyKong: Character = {
    id: 8,
    name: "ドンキーコング",
    status: {
        strength:   16,
        speed:       9,
        shooting:   13,
        passing:    16,
        technique:   9,
    }
}

const Wario: Character = {
    id: 9,
    name: "ワリオ",
    status: {
        strength:   17,
        speed:       9,
        shooting:   15,
        passing:    13,
        technique:   9,
    }
}

const Waluigi: Character = {
    id: 10,
    name: "ワルイージ",
    status: {
        strength:   15,
        speed:      16,
        shooting:    9,
        passing:     9,
        technique:  14,
    }    
}

const ShyGuy: Character = {
    id: 11,
    name: "ヘイホー",
    status: {
        strength:   13,
        speed:      12,
        shooting:   13,
        passing:    13,
        technique:  12,
    }    
}

const Daisy: Character = {
    id: 12,
    name: "デイジー",
    status: {
        strength:   13,
        speed:       9,
        shooting:   10,
        passing:    13,
        technique:  18,
    }    
}

const Pauline: Character = {
    id: 13,
    name: "ポリーン",
    status: {
        strength:   20,
        speed:      16,
        shooting:    9,
        passing:     9,
        technique:   9,
    }    
}

const DiddyKong: Character = {
    id: 14,
    name: "ディディーコング",
    status: {
        strength:    9,
        speed:      16,
        shooting:    9,
        passing:    16,
        technique:  13,
    }    
}

const BowserJr: Character = {
    id: 15,
    name: "クッパJr.",
    status: {
        strength:   13,
        speed:      13,
        shooting:   11,
        passing:    17,
        technique:   9,
    }    
}

const Birdo: Character = {
    id: 16,
    name: "キャサリン",
    status: {
        strength:    9,
        speed:      10,
        shooting:   18,
        passing:     9,
        technique:  17,
    }    
}

export const Characters: Character[] = [
    Mario, 
    Luigi, 
    Bowser, 
    Peach, 
    Rosalina, 
    Toad, 
    Yoshi, 
    DonkeyKong, 
    Wario, 
    Waluigi,
    ShyGuy,
    Daisy,
    Pauline,
    DiddyKong,
    BowserJr,
    Birdo,
]