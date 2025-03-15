/**
* @jest-environment node
*/

import { JSDOM, DOMWindow } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('simple ui test', ()=> {
  let document: Document;
  let window: DOMWindow;

  beforeEach(() => {
    const dom = new JSDOM(html, {
      runScripts: 'dangerously',
      resources: 'usable'
    });
    window = dom.window;
    document = window.document;
  });

  // ボタンがクリック迂されていない場合には、messageが表示されていないこと
  test("ボタンがクリック迂されていない場合には、messageが表示されていないこと", ()=> {
    const message = document.querySelector('#message > p');
    expect(message).toBeNull();
  })

  // ボタンがクリックされた場合には、messageが表示されること
  test('ボタンがクリックされた場合には、messageが表示されること', () => {
    const button = document.querySelector('#showMessage') // showMessageボタンの要素を取得
    const click = new window.MouseEvent('click')
    button?.dispatchEvent(click) // buttonをクリックする
    const message = document.querySelector('#message > p') //message配下のpタグ要素を取得
    expect(message?.textContent).toBe('You Passed!!!')
  })

  // ボタンが2回クリックされても、「You Passed!!!」が1つしか表示されないこと
  test("ボタンが2回クリックされても、「You Passed!!!」が1つしか表示されないこと", ()=> {
    const button = document.querySelector('#showMessage');
    const click = new window.MouseEvent('click');
    button?.dispatchEvent(click);
    button?.dispatchEvent(click);
    const messages = document.querySelectorAll('#message > p');
    expect(messages?.length).toBe(1);
  })
});