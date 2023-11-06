[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=emiliosheinz_full-cycle-ci-challenge&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=emiliosheinz_full-cycle-ci-challenge)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=emiliosheinz_full-cycle-ci-challenge&metric=coverage)](https://sonarcloud.io/summary/new_code?id=emiliosheinz_full-cycle-ci-challenge)

![278782323-be381844-db4f-412a-ae08-c4de165c3cb7](https://github.com/emiliosheinz/full-cycle-ci-challenge/assets/103655828/5415f5c6-55d6-4bb0-9dcd-3d1b71347abb)

# Full Cycle CI Challenge

In this challenge, I'm consolidating my knowledge related to creating a CI (Continuous Integration) pipeline by performing the following steps:

- Create a small, simple application in node.js
- Create unit tests for this application
- Set up a CI pipeline using GitHub Actions that does the following:
    - Installs dependencies
    - Runs the tests
    - Executes SonarCloud

## 💻 Application

The application is a simple Node.js application that exposes several math functions: sum, sub, mult, and div. Also, inside the [.github/workflows](.github/workflows) folder, you can find the GitHub Actions workflow that is responsible for running the CI pipeline that will run the tests and execute SonarCloud.


## 🔥 Used technologies

- Node.js
- Jest
- GitHub Actions
- SonarCloud
