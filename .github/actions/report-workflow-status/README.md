# report-workflow-status

Report workflow status.

## Usage

### Inputs

#### `status`

**Required** The state of the status. Can be one of: `"error"`, `"failure"`, `"pending"`, or `"success"`.

### Environment Variables

#### `GITHUB_TOKEN`

**Optional** The GitHub Actions-provided [`GITHUB_TOKEN`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#about-the-github_token-secret) with `statuses: write` [`permissions`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). The token is read from context (`github.token`), so it’s optional to provide it via `env.GITHUB_TOKEN`.

### Example workflow

```YAML
name: My Workflow
on:
  workflow_dispatch:

jobs:
  workflow_start:
    name: Workflow start
    runs-on: ubuntu-latest
    permissions:
      statuses: write
    steps:
      - uses: actions/checkout@v3
      - uses: ./.github/actions/report-workflow-status
        with:
          status: pending

  main:
    name: Main
    runs-on: ubuntu-latest
    needs: [workflow_start]
    steps:
      - run: echo "Hello, world!"

  workflow_complete:
    name: Workflow complete
    runs-on: ubuntu-latest
    if: ${{ always() }}
    needs: [main]
    permissions:
      statuses: write
    steps:
      - uses: actions/checkout@v3
      - if: ${{success()}}
        uses: ./.github/actions/report-workflow-status
        with:
          status: success
      - if: ${{failure()}}
        uses: ./.github/actions/report-workflow-status
        with:
          status: failure
      - if: ${{ !success() && !failure() }}
        uses: ./.github/actions/report-workflow-status
        with:
          status: error
```
