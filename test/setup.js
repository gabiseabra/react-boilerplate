import "babel-polyfill"
import "ignore-styles"
import { JSDOM } from "jsdom"
import chai from "chai"
import chaiEnzyme from "chai-enzyme"
import enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Helmet from "react-helmet"

const dom = new JSDOM("<!doctype html><html><body></body></html>")

enzyme.configure({ adapter: new Adapter() })

global.window = dom.window
global.document = dom.window.document
global.navigator = { userAgent: "node.js" }

chai.use(chaiEnzyme())

global.should = chai.should()
global.expect = chai.expect

Helmet.canUseDom = false
