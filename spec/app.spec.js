import server from '../src/app'
import config from 'config'

describe("Server", () => {
	it("isn't null", () => {
		expect(server).not.toBeNull()
	})

	it("is defined", ()=> {
		expect(server).toBeDefined()
	})

	it(`is running at ${config.get('port')}`, ()=> {
		expect(server.address().port).toEqual(config.get('port'))
	})
})