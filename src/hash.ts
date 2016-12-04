export const additive = (input: string): number => {
    return input.split('').map(c => c.charCodeAt(0)).reduce((a, b) => a + b, 0);
};

export const folding = (input: string): number => {

};