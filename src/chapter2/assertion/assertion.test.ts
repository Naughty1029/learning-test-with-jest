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

//オブジェクトの比較
type CanType = {
  flavor: string;
  ounces: number;
}

const can1: CanType = {
 flavor: "grapefruit",
 ounces: 12 
}

const can2: CanType = {
  flavor: "grapefruit",
  ounces: 12 
 }

 const can3: CanType = can2;

 class Can {
  flavor: string;
  ounces: number;

  constructor({flavor, ounces}: CanType) {
    this.flavor = flavor;
    this.ounces = ounces;
  }
 }

 const can4 = new Can({
  flavor: "grapefruit",
  ounces: 12 
 });

 test(" can1 と can2 は厳密的に同じインスタンスでないと評価される",()=>{
    expect(can1).not.toBe(can2);
 })

 test(" can2 と can3 は厳密的に同じインスタンスである",()=>{
  expect(can2).toBe(can3);
 })

 test("can1とcan2はtoEqualで比較する",()=>{
   expect(can1).toEqual(can2);
 })

 test("can2とcan4はtoEqualで比較する",()=>{
  expect(can2).toEqual(can4);
})

test("can2とcan4はtoStrictEqualで比較する",()=>{
  expect(can2).not.toStrictEqual(can4);
})

/**
■ toBe、toEqual、toStrictEqual の使い分け
■ toBe を利用するケース
・ プリミティブ値を評価
・ 同じオブジェクトの参照を持つ変数であることを評価（例えば引数として渡したオブジェクトの変数がリターンされることを確認するなど）
■ toEqual を利用するケース
・ オブジェクトのプロパティの値の評価
■ toStrictEqual を利用するケース
・ 生成元のクラス名や undefined なプロパティ、配列内の未定義の要素と undefined の評価を含めた厳密なオブジェクトの評価
 */