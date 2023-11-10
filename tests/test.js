import solution from "../src/solution.js";

describe('Tests', () => {
    const numberFacts = 100;

    test('is not empty', async () => {
        const facts = await solution(numberFacts);
        expect(facts).not.toHaveLength(0);
    });

    test('contains more than 5 elements', async () => {
        const facts = await solution(numberFacts);
        expect(facts.length).toBeGreaterThan(5);
    });

    test('length each array element is more than 10 characters', async () => {
        const facts = await solution(numberFacts);
        expect(facts.every((fact) => fact.length >= 10)).toBeTruthy();
    });
});
