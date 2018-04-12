export interface Flower {
    _id: string,
    name: string,
    planted?: string,
    mother?: boolean,
    genetics?: string,
    grow?: Array<string>,
    children: Array<string>,
    clone?: boolean,
    cloneStart?: string,
    strain: string,
    history: Array<Notes>,
}

interface Notes {
    note: string,
    date: string,
    nutrients: Array<Nute>,
    transplanted: boolean,
    defeciencys: string,
    flushed: boolean,
    watered: boolean,
    ph: InOut,
    ppm: InOut,
    height: number
}

interface Nute {
    name: string,
    amount: string,
    suggested: string
}

interface InOut {
    in: number,
    out: number
}