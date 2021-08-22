const actions_info = require("./actions_info")
// @ponicode
describe("actions_info.fetchInfo", () => {
    test("0", () => {
        let callFunction = () => {
            actions_info.fetchInfo()
        }
    
        expect(callFunction).not.toThrow()
    })
})
