import React from "react"
import ReactDOM from "react-dom"
import { Router, browserHistory } from "react-router"
import Provider from "./app/Provider"
import routes from "./app/routes"

const appData = JSON.parse(document.getElementById("app").textContent)
const profile = JSON.parse(document.getElementById("data").textContent)

ReactDOM.render(
	<Provider data={appData} profile={profile}>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Provider>,
	document.getElementById("app")
)