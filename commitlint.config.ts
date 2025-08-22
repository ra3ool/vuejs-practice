export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) => commit === '',
    (commit) => commit.startsWith('Merge branch'),
  ],
  defaultIgnores: true,
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  rules: {
    // Disable subject case enforcement (allows any case)
    'subject-case': [0, 'never'],
  },
};
