export const additive = (input: string): number => {
    return toUnicodeArray(input).reduce((a, b) => a + b, 0);
};

export const folding = (input: string): number[][] => {
    // TODO: 4 bytes to int ..., << 8, << 16, << 24
    return groupArray<number>(toUnicodeArray(input), 4);
};

function groupArray<T>(input: T[], subCollectionSize: number): T[][] {
    return input.reduce((acc, item, idx) => {
        const groupIndex = Math.floor(idx / subCollectionSize);
        acc[groupIndex] = acc[groupIndex] || [];
        acc[groupIndex].push(item);

        return acc;
    }, []);
}

function toUnicodeArray(input: string): number[] {
    return input.split('').map(c => c.charCodeAt(0));
}