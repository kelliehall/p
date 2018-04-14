export interface Grow {
    _id: string,
    name: string,
    flowers?: Array<string>,
    cycle?: string,
    start: string,
    harvested?: string,
    nutrients?: Array<string>,
    notes?: Notes[],
    status?: string
}

interface Notes {
    date: string,
    observation: string
}