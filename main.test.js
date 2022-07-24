const validateBrackets = require("./main");

test('Simple pairing', () => {expect(validateBrackets("{}")).toBe(true)})
test('Seeded Brackets', () => {expect(validateBrackets("{{}}")).toBe(true)})
test('Seeded Bracket Pairs', () => {expect(validateBrackets("{{}{}}")).toBe(true)})
test('Bracket Pairs', () => {expect(validateBrackets("{}{}")).toBe(true)})
test('Open First', () => {expect(validateBrackets("}{")).toBe(false)})
test('Lopsided Stack', () => {expect(validateBrackets("{}}")).toBe(false)})
test("No Brackets",() => {expect(validateBrackets("")).toBe(true)})
test("No Brackets 2: Electric Boogaloo",() => {expect(validateBrackets("abcdefg")).toBe(true)})
test("Bracket has content", () => {expect(validateBrackets("{Content}")).toBe(true)})
test("Too many brackets", () => {expect(validateBrackets("{ {} } { {} { {} } }")).toBe(true)})