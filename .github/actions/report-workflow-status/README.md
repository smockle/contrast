# report-workflow-status

Report workflow status.

## Usage

### Inputs

#### `status`

**Required** The state of the status. Can be one of: `"error"`, `"failure"`, `"pending"`, or `"success"`.

### Environment Variables

#### `GITHUB_TOKEN`

**Required** The GitHub Actions-provided [`GITHUB_TOKEN`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#about-the-github_token-secret) with `statuses: write` [`permissions`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)

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
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

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
      - uses: ./.github/actions/report-workflow-status
        with:
          status: ${{ success() && 'success' || failure() && 'failure' || 'error' }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
