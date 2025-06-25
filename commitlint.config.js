// commitlint.config.cjs
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // allowed types
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test'],
    ],
    // enforce subject length
    'subject-max-length': [2, 'always', 72],

    // body must not be empty
    'body-empty': [2, 'never'],

    // footer must not be empty
    'footer-empty': [1, 'never'],

    // enforce minimum body length
    'body-min-length': [2, 'always', 20],

    // ✅ one blank line before body
    'body-leading-blank': [2, 'always'],

    // ✅ one blank line before footer
    'footer-leading-blank': [2, 'always'],
  },
};

// feat(auth): add JWT token generation

// Implemented JWT middleware for user validation and token expiration handling.

// Closes #101
