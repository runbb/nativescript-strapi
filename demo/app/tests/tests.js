var Strapi = require("nativescript-strapi").Strapi;
var strapi = new Strapi();

describe("greet function", function() {
    it("exists", function() {
        expect(strapi.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(strapi.greet()).toEqual("Hello, NS");
    });
});