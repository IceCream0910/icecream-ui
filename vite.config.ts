import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

import { glob } from 'glob'

const elements = await glob('./elements/*/index.ts')

const elementEntries = Object.fromEntries(
	elements.map((path) => [path.slice(0, -3), resolve(path)]),
)

export default defineConfig({
	plugins: [
		vanillaExtractPlugin({
			unstable_mode: 'emitCss',
			identifiers(props) {
				return 'ic-' + (props.debugId?.toLowerCase() || props.hash)
			},
		}),
		dts(),
	],
	appType: 'mpa',
	build: {
		lib: {
			entry: elementEntries,
			name: 'icecream-ui',
			formats: ['es'],
		},
		sourcemap: true,
		copyPublicDir: true,
	},
})
