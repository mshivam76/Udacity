import { add, concat, divide } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    expect(()=>{ divide(5,0) }).to.throw('div by 0')
  });

});

// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
describe('concat',()=>{
  it('should concat str1 and str2',()=>{
    const result = concat("str1","str2");
    expect(result).to.equal("str1str2");
  })
  it('should concat Str1 and Str2',()=>{
    const result = concat("Str1","Str2");
    expect(result).to.equal("Str1Str2");
  })
  it('should concat str1 and null',()=>{
    const result = concat("str1",null);
    expect(result).to.equal("Empty String");
  })
  it('should concat null and str2',()=>{
    const result = concat(null,"str2");
    expect(result).to.equal("Empty String");
  })
  it('should concat null and null',()=>{
    const result = concat(null,null);
    expect(result).to.equal("Empty String");
  })
})