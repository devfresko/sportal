# Fresko Staff Portal v4.3 — Deploy Guide

## Files ready in `/artifacts`

| File | Action |
|------|--------|
| `app.js` | Replace repo `app.js` (GitHub) |
| `appconfig.js` | Replace repo `appconfig.js` (version → 4.3) |
| `index.html` | Replace repo `index.html` (progressive boot + time display) |
| `Code.gs_PATCHES_v4.3.js` | **Manual** apply into Apps Script `Code.gs` |
| `FRESKO_FIX_PACK_v4.3.md` | Full reference |

---

## Step 1 — Apps Script (Code.gs)

1. Open [script.google.com](https://script.google.com) → Fresko project
2. Open `Code.gs`
3. Open `Code.gs_PATCHES_v4.3.js` from artifacts
4. Apply in order:
   - **PATCH 1** — paste `_normalizeTime` + `_time12` right after `getISTTimestamp`
   - **PATCH 2** — replace time extraction inside `getTodayAttendanceStatus`
   - **PATCH 3** — replace `ci`/`co` lines inside `getMyAttendance` map
   - **PATCH 4** — same-day edit logic in `markTaskDone` (`markRow` + `markByOcc`)
   - **PATCH 5** (optional) — remove `myAttendance` from `getAllData` for faster login
   - **PATCH 6** — search other analytics functions for `check_in` and use `_normalizeTime`
5. Save
6. **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**
7. Confirm Web App URL is still the same as in `appconfig.js`  
   Current URL in config:
   `https://script.google.com/macros/s/AKfycbwot_aIHoNwMLfeJvywmb1xt5-iuAhLKao8836eHRHArPd_xdAECFl7NDru-P9J11C-kw/exec`

---

## Step 2 — GitHub Pages (frontend)

```bash
# From your local clone of staffPortal repo
cp artifacts/app.js ./app.js
cp artifacts/appconfig.js ./appconfig.js
cp artifacts/index.html ./index.html
git add app.js appconfig.js index.html
git commit -m "v4.3: attendance time fix, progressive boot, splash timeout, task edit rules"
git push origin main
```

GitHub Actions (`deploy.yml`) will publish to Pages in ~1–2 min.

---

## Step 3 — Verify

| Test | Expected |
|------|----------|
| Login | Dashboard in ~3–8s (fast path), no stuck logo >18s |
| Slow network | Retry screen after 18s, not infinite spinner |
| Punch card time | Matches sheet; AppSheet-old rows also correct |
| My Attendance table | `10:30 AM` style, not garbage dates |
| Mark task Done (today) | Works; Edit remark same day works |
| Mark past pending task | Completes (backend allows) |
| Already Done yesterday | Edit blocked with clear message |

---

## Rollback

- GitHub: `git revert` last commit
- GAS: Manage deployments → previous version

---

*v4.3 — 28 Sep 2026*
