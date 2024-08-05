const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        "build",
        // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        "ci",
        // Other changes that don't modify src or test files
        "chore",
        // Documentation only changes
        "docs",
        // A new feature
        "feat",
        //A bug fix
        "fix",
        // A code change that improves performance
        "perf",
        // A code change that neither fixes a bug nor adds a feature
        "refactor",
        // A commit that reverts a previous commit
        "revert",
        // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        "style",
        // Adding missing tests or correcting existing tests
        "test",
      ],
    ],
  },
}

export default config
