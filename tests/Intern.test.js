const Intern = require("../lib/intern");

describe("School", () => {
    it("should get school via constructor", () => {
        const schoolVal = "U of C";
        const intern = new Intern("Alicia", 3, "alicia@test.com", schoolVal);
        expect(intern.school).toBe(schoolVal);
    })
})