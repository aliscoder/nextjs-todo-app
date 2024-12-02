export function numericParam(param: string | null | undefined) {
    return param === null || param === undefined ? 1 : Number(param)
}