# External Cron Setup for Growth Pulse

This workflow is triggered by GitHub API `repository_dispatch` events with:

- `event_type`: `growth_pulse_tick`
- workflow file: `.github/workflows/growth-pulse.yml`

## 1) Create a GitHub token (MrDinged)

Create a token that can trigger repository workflows:

- Fine-grained token (recommended):
  - Repository access: `MrDinged/btc-prediction-market-sdk`
  - Permissions:
    - `Actions`: `Read and write`
    - `Contents`: `Read`
- Or classic token with `repo` scope.

## 2) Trigger endpoint

Use this endpoint:

```text
POST https://api.github.com/repos/MrDinged/btc-prediction-market-sdk/dispatches
```

Headers:

```text
Accept: application/vnd.github+json
Authorization: Bearer <GITHUB_TOKEN>
X-GitHub-Api-Version: 2022-11-28
Content-Type: application/json
```

Body:

```json
{
  "event_type": "growth_pulse_tick"
}
```

## 3) Test from terminal

```bash
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <GITHUB_TOKEN>" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/MrDinged/btc-prediction-market-sdk/dispatches \
  -d '{"event_type":"growth_pulse_tick"}'
```

Expected result: HTTP `204 No Content`.

## 4) Configure external scheduler

Use any cron service (for example `cron-job.org`) to call the same POST request every 5 minutes.

Recommended cron expression:

```text
*/5 * * * *
```
