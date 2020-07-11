import addStrings from './addStrings';

describe('addStrings', () => {
  it('works', () => {
    expect(addStrings('123', '456')).toEqual('579');
  });

  it('also works', () => {
    expect(addStrings('7', '4')).toEqual('11');
  });

  it('also also works', () => {
    expect(addStrings('12', '7')).toEqual('19');
  });

  it('also also also works', () => {
    expect(addStrings('140', '270')).toEqual('410');
  });

  it('also also also also works', () => {
    expect(addStrings('999', '999')).toEqual('1998');
  });

  it('really works', () => {
    expect(addStrings('584', '18')).toEqual('602');
  });

  it('really really works', () => {
    expect(addStrings('99', '9')).toEqual('108');
  });
});
