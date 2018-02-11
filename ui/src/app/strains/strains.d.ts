export interface Strain {
    name: string,
    breeder: string,
    genetics?: string,
    source?: string,
    notes?: Notes[],
    _id: string
}

interface Notes {
    date: string,
    note?: string,
    grow?: string
}
