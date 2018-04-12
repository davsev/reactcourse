const add = (a, b) => a + b
const generateGreetitng= (name) => `Hello ${name}!!`;

test('should add two numbers', () =>{
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should say hello name', () => {
    const Hello = generateGreetitng('dave');
    expect(Hello).toBe('Hello dave!!');
});
