export interface Strain {
    name: string,
    breeder: string,
    genetics?: string,
    source?: string,
    notes?: Notes[]
}

interface Notes {
    date: string,
    note?: string,
    grow?: string
}
