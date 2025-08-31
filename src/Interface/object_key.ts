const data = 'prop'
const obj: {
    'user-id': string;
    1: number;
    [data]: string;
    bar: string;
} = {
    'user-id': 'foo',
    1: 1,
    [data]: 'hello',
    bar: 'bar'
}
const userId = 'user-id'
obj[userId]