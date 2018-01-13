export interface Flower {
    name: string,
    planted?: string,
    mother?: boolean,
    genetics?: string,
    grow?: Array<string>,
    children: Array<string>,
    clone?: boolean,
    cloneStart?: string,
    strain: string
}