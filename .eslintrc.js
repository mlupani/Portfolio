module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
			'tsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'react/jsx-uses-react': 'off',
		'react/tsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/react-in-tsx-scope': 'off',
		'react/prop-types': 'off'
	}
}
