test("testを利用してテストケースを作成する",()=> {
  const result = true;
  const expected = true;
  expect(result).toBe(expected);
})

it("itを利用してテストケースを作成する",()=> {
  const result = true;
  const expected = true;
  expect(result).toBe(expected);
})

//プリミティブな値の比較
const numberValue = 0;
const stringValue = "文字列";
const booleanValue = true;

test("toBeでプリミティブな値を比較する",()=> {
  expect(numberValue).toBe(0);
  expect(stringValue).toBe("文字列");
  expect(booleanValue).toBe(true);
})

test("toEqualでプリミティブな値を比較する",()=> {
  expect(numberValue).toEqual(0);
  expect(stringValue).toEqual("文字列");
  expect(booleanValue).toEqual(true);
})

test("toStrictEqualでプリミティブな値を比較する",()=> { 
  expect(numberValue).toStrictEqual(0);
  expect(stringValue).toStrictEqual("文字列");
  expect(booleanValue).toStrictEqual(true);
})