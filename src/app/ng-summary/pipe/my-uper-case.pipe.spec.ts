import { MyUperCasePipe } from './my-uper-case.pipe';

describe('MyUperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyUperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
