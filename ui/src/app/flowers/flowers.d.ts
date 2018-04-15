export interface Flower {
    _id: string,
    identifier: string,
    strain: string,
    grow?: string,

    planted?: string,
    harvested?: string,
    yield?: string,

    genetics?: Array<string>,
    breeder: string,

    mother?: boolean,
    children: Array<string>,

    clone?: boolean,
    cloneStart?: string,

    history: Array<Notes>,
}

interface Notes {
    _id: string,
    note: string,
    date: string,
    nutrients: Array<Nute>,
    transplanted: boolean,
    defeciencys: string,
    flushed: boolean,
    watered: boolean,
    ph: InOut,
    ppm: InOut,
    height: string,
    rate: string,
    timing: string,
    amount: string,
    flowered: boolean
}

interface Nute {
    name: string,
    amount: string
}

interface InOut {
    in: number,
    out: number
}