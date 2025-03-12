import { chohan } from "./chohan";

jest.mock('./seed', ()=> {
  return {
    seed: jest.fn().mockReturnValueOnce(2).mockReturnValueOnce(1)
  }
})

describe('chohan', () => {
  it('returns 丁 when seed returns an even number like 2', () => {
    expect(chohan()).toBe('丁')
  })
  it('returns 半 when seed returns an odd number like 1', () => {
    expect(chohan()).toBe('半')
  })
})