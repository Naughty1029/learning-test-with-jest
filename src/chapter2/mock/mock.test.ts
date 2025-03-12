describe('jest.fn()',()=>{
  test('mock object specification',()=>{
    const mockFunction = jest.fn();
    expect(mockFunction('foo','bar')).toBeUndefined();
    // mockプロパティを持っている
    expect(mockFunction).toHaveProperty('mock');
    // mockにはcallsプロパティを持っている
    expect(mockFunction.mock).toHaveProperty('calls');
    //1回目の呼び出しの引数
    expect(mockFunction.mock.calls).toHaveLength(1);
    // 1回呼び出された際に、引数は'foo'と'bar'だった
    expect(mockFunction.mock.calls[0]).toEqual(['foo', 'bar'])
    // mockにはresultsプロパティを持っている
    expect(mockFunction.mock).toHaveProperty('results')
    // 1回呼び出された
    expect(mockFunction.mock.results).toHaveLength(1)
    // 1回目の返り値はundefinedである
    expect(mockFunction.mock.results[0].value).toBe(undefined)
    // 1回目の呼び出しが正常終了した
    expect(mockFunction.mock.results[0].type).toBe('return')
  })

  test('return `Hello`',()=> {
    const mockFunction01 = jest.fn(()=> 'Hello');
    expect(mockFunction01()).toBe('Hello');
    const mockFunction02 = jest.fn();
    mockFunction02.mockReturnValue('Hello');
    expect(mockFunction02()).toBe('Hello');
  })

  test('return `Hello` once then it returns `Goodbye`',()=>{
    const mockFunction = jest.fn()
    mockFunction.mockReturnValueOnce('Hello').mockReturnValueOnce('Goodbye');
    expect(mockFunction()).toBe('Hello');
    expect(mockFunction()).toBe('Goodbye');
    expect(mockFunction()).toBe(undefined);
  })
})