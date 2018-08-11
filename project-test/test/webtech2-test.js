const assert = require("assert")
const index = require("../index")

describe("Basic test", function() {
    it("Man basic", function() {
        assert(index.man, "index.man exists")
        let man = index.man
        assert(man.name, "man.name exists")
        assert(man.surname, "man.surname exists")
        assert(man.fullName() == `${man.surname} ${man.name}`, "man.fullName() returns surname + ' ' + name")
    })
    it("Man basic", function() {
        assert(index.man, "Man exists")
        let man = index.man
        man.name = "serge"
        man.surname = "belyaev"
        assert(man.fullName() == `${man.surname} ${man.name}`, "Fullname function works correctly")
    })
    it("Class basic", function() {
        assert(index.Room, "index.Room exists")
        let room = new index.Room()
        assert(room.windows > 0, "room.windows is number and more than 0")
        assert(room.owner, "room.owner exists")
    })
})
