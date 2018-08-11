const assert = require("assert")
const index = require("../index")

describe("Basic test", function() {
    it("Man basic", function() {
        assert(index.man, "index.man exists")
    })
    it("Man basic", function() {
        let man = index.man
        assert(man.name, "man.name exists")
    })
    it("Man basic", function() {
        let man = index.man
        assert(man.surname, "man.surname exists")
    })
    it("Man basic", function() {
        let man = index.man
        assert(man.fullName() == `${man.surname} ${man.name}`, "man.fullName() returns surname + ' ' + name")
    })
    it("Man basic", function() {
        let man = index.man
        man.name = "serge"
        man.surname = "belyaev"
        assert(man.fullName() == `${man.surname} ${man.name}`, "Fullname function works correctly")
    })
    it("Class basic", function() {
        assert(index.Room, "index.Room exists")
    })
    it("Class basic", function() {
        let room = new index.Room()
        assert(room.windows > 0, "room.windows is number and more than 0")
    })
    it("Class basic", function() {
        let room = new index.Room()
        assert(room.owner, "room.owner exists")
    })
})
