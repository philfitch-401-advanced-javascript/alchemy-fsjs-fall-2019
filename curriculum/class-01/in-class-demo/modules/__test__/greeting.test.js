const greeting = require('../lib/greeting'); 

describe('greeting', () => {

  describe('hello', () => {
    it('to supplied name', () => {
      const message = greeting.hello('pdx');
      expect(message).toBe('hello pdx');
    });
  });

  describe.only('goodbye', () => {
    it('to supplied name', () => {
      const message = greeting.goodbye('pdx');
      expect(message).toBe('goodbye pdx');
    });
    
    it('uses ttfn if name is pooh', () => {
      const message = greeting.goodbye('pooh');
      expect(message).toBe('ttfn pooh');
    });

    it('uses ttfn for pooh case insensitive', () => {
      const message = greeting.goodbye('PoOh');
      expect(message).toBe('ttfn PoOh');
    });
  });

});