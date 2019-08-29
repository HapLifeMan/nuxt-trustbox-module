module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
    },
    env: {
        browser: true,
        node: true
    },
    extends: ['standard'],
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': [2, 'as-needed'],
        'no-unused-vars': 2,
        'no-unused-expressions': 0, // until false alarm on optional-chaining is fixed
        // allow async-await
        'generator-star-spacing': 0,
        'space-before-function-paren': 2,
        // allow debugger during development
        'no-debugger': 2,
        // do not allow console.logs etc...
        'no-console': 2,
        'no-var': 2,
        'no-dupe-keys': 2,
        'key-spacing': 2,
        'keyword-spacing': 2,
        'spaced-comment': [2, 'always', { block: { exceptions: ['-'] } }],
        'comma-dangle': [2, 'always-multiline'],
        'capitalized-comments': [2, 'always', { ignoreConsecutiveComments: true, ignorePattern: 'console|return|let|const|if|import|global|eslint|throw|void|try|catch|async|await|this' }],
        'multiline-comment-style': [2, 'starred-block'],
        'lines-around-comment': [2, { beforeBlockComment: true, beforeLineComment: true }],
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-trailing-spaces': 0,
        'quote-props': [2, 'as-needed'],
        'camelcase': 0,
        'no-lonely-if': 2,
        'no-empty': 2,
        'no-unreachable': 2,
        'no-cond-assign': 2,
        'multiline-ternary': [2, 'never'],
        'padded-blocks': [2, 'always', { allowSingleLineBlocks: true }],
        'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'curly': 0,
        'strict': [2, 'never'],
        'object-curly-spacing': [2, 'always'],
        'object-curly-newline': [2, { ObjectExpression: { multiline: true } }],
        'arrow-body-style': [2, 'as-needed']
    },
}
