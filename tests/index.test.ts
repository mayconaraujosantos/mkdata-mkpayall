describe('Name of the group', () => {
  const sum = (a: number, b: number) => a + b;
  test('should return 4 when 2 + 2', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
