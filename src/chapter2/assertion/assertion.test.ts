describe("testとitを利用してテストケースを作成する",()=>{
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
})

//プリミティブな値の比較
describe("プリミティブな値の比較",()=>{
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
})

//オブジェクトの比較
describe("オブジェクトの比較",()=>{

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
})

// 曖昧な真偽値の評価
describe("曖昧な真偽値の評価",()=>{
  test("'0'は turthy である",()=>{
    expect('0').toBeTruthy();
  })
  test("0は falsy である",()=>{
    expect(0).toBeFalsy();
  })
})

//  null、undefined の評価
describe("null、undefined の評価",()=>{
  test("nullの評価",()=>{
    expect(null).toBe(null);
    expect(null).toBeNull();
  })
  
  test("undefinedの評価",()=>{
    expect(undefined).toBe(undefined);
    expect(undefined).toBeUndefined();
  })
})

//曖昧な結果の評価
describe("曖昧な結果の評価",()=>{
  const hoge = () => (
    {
      hoge:"hogehoge",
      number: 0
    }
  )
  test("hoge関数が何かしらをリターンすることを評価する",()=>{
    // 期待値がnullやundefinedではないことを評価
    expect(hoge()).toEqual(expect.anything())
    // 期待値のプロパティhogeがString型 numberがNumber型であることを評価
    expect(hoge()).toEqual({
      hoge: expect.any(String),
      number: expect.any(Number)
    })
  })
})

//数値の評価
describe("数値の評価",()=>{
  test("0.1 + 0.2が0.3を返さないことを評価する",()=>{
    //結果は「0.30000000000000004」となる
    //IEEE 754 倍精度浮動小数点数であることが原因
    expect(0.1 + 0.2).not.toBe(0.3);
    // toBeCloseToを利用すると、第二引数に指定した数値に近いかどうかを評価する（デフォルトでは小数点以下2桁までを評価する）
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  })

  //toBeLessThan、toBeLessThanOrEqual、toBeGreaterThan、toBeGreaterThanOrEqual
  test('0.1 + 0.2 が 0.3より多いことを評価する', () => {
    expect(0.1 + 0.2).toBeGreaterThan(0.3)
  })
  test('0.1 + 0.2 が 0.3以上であることを評価する', () => {
    expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3)
    expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.30000000000000004)
  })
  test('0.1 + 0.2 が 0.4より小さいことを評価する', () => {
    expect(0.1 + 0.2).toBeLessThan(0.4)
  })
  test('0.1 + 0.2 が 0.4以下であることを評価する', () => {
    expect(0.1 + 0.2).toBeLessThanOrEqual(0.4)
    expect(0.1 + 0.2).toBeLessThanOrEqual(0.30000000000000004)
  })
})

// 文字列の部分一致（正規表現）
describe("文字列の部分一致（正規表現）",()=>{
  const log1 = '10.0.0.3 - - [30/Jan/2023:12:20:12 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'
  const log2 = '10.0.0.11 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'
  const log3 = '10.0.0.99 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'
  
  test("IPアドレス'10.0.0.3'が含まれていることを評価する",()=>{
    expect(log1).toEqual(expect.stringContaining('10.0.0.3'))
  })
  
  test(" 10.0.0.0から10.0.0.99までのIPアドレスが含まれていることを評価する",()=>{
    const expected = /^10.0.0.([1-9]?[0-9])/
    // expect.stringMatching
    expect(log1).toEqual(expect.stringMatching(expected))
    expect(log2).toEqual(expect.stringMatching(expected))
    expect(log3).toEqual(expect.stringMatching(expected))
  
    // toMatch
    expect(log1).toMatch(expected);
    expect(log2).toMatch(expected);
    expect(log3).toMatch(expected);
  
    //toBe
    const reqex =  new RegExp(expected);
    expect(reqex.test(log1)).toBe(true);
    expect(reqex.test(log2)).toBe(true);
    expect(reqex.test(log3)).toBe(true);
  })
})

//配列の部分一致
describe("配列の部分一致",()=>{
  //配列の要素がプリミティブ型の場合
  const fruitList = ['apple', 'banana', 'grape', 'orange', 'peach', 'strawberry'];
  test("appleが含まれていることを評価する",()=>{
    expect(fruitList).toContain("apple");
  })
  test("appleとbananaが含まれていることを評価する",()=>{
    expect(fruitList).toEqual(expect.arrayContaining(["apple","banana"]));
  })

  //配列の要素がオブジェクトの場合
  const itemList = [
    {
      name: 'apple',
      price: 100
    },
    {
      name: 'banana',
      price: 200
    },
    {
      name: 'grape',
      price: 300
    }
  ]

  test("appleが含まれていることを評価する",()=>{
    expect(itemList).toContainEqual({name:"apple",price:100});
  })

  test("appleとbananaが含まれていることを評価する",()=>{
    expect(itemList).toEqual(expect.arrayContaining([
      {name:"apple",price:100},
      {name:"banana",price:200}
    ]));
  })
})

//オブジェクトの部分一致
describe("オブジェクトの部分一致",()=>{
  const ciBuild = {
    number: 1,
    duration: 12000,
    state: 'success',
    triggerParameters: {
      is_scheduled: true,
    },
    type: 'scheduled_pipeline',
    actor: {
      login: 'Taka',
    },
  }

  // 1つのプロパティを検証
  test('stateプロパティのバリューがsuccessであること', ()=> {
    expect(ciBuild).toHaveProperty('state', 'success');
  })

  //ネストしたプロパティを検証
  test('actorプロパティがTakaであること',()=> {
    expect(ciBuild).toHaveProperty('actor.login','Taka');
  })

  // 複数のプロパティを検証
  test('scheduled pipelineを検証',()=> {
    expect(ciBuild).toEqual(
      expect.objectContaining({
        triggerParameters: {
          is_scheduled: true,
        },
        type: 'scheduled_pipeline',
      })
    )
  })
})