/* eslint-disable no-console */
import fs from "fs"
import path from "path"
import http from "http"
import Express from "express"
import compression from "compression"
import favicon from "serve-favicon"
import appMiddleware from "../lib/middleware"

const HOST = process.env.HOST || "localhost"
const PORT = process.env.PORT || 80
const SSR = process.env.SSR === "true"

const app = new Express()

const server = http.Server(app)

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "../public/dist/manifest.json")))

const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../config/app.json")))

app.use(compression())

app.use(Express.static(path.join(__dirname, "../public")))

app.use(favicon(path.join(__dirname, "../public/favicon.ico")))

app.use(appMiddleware({
	rendering: SSR,
	data: config,
	manifest
}))

server.listen(PORT, (err) => {
	if(err) {
		console.error(err)
	}
	console.info("==> 💻  Server running @ http://%s:%s", HOST, PORT)
	console.info("==> Server-side rendering is %s", (SSR ? "enabled" : "disabled"))
})
