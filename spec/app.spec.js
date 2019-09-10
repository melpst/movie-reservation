import server from '../src/app'

describe("Server", () => {
	it("isn't null", () => {
		expect(server).not.toBeNull()
	})

	it("is defined", ()=> {
		expect(server).toBeDefined()
	})
})