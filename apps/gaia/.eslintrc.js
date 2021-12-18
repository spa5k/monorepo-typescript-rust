require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	extends: [
		'@spa5k/eslint-config/profile/node',
		'@spa5k/eslint-config/mixins/friendly-locals',
		'@spa5k/eslint-config/mixins/tsdoc',
	],
	parserOptions: { tsconfigRootDir: __dirname },
	rules: {
		'no-console': 'off',
	},
}
