/* Defendant Portal — frontend logic.
   Talks to /api/portal/* same-origin. Cookies are HttpOnly and managed by
   the server; the JS just makes fetch calls with credentials: 'include'. */

(function () {
  'use strict';

  function getCaseId() {
    const meta = document.querySelector('meta[name="portal-case-id"]');
    return (meta && meta.content && meta.content !== '26cv03898') ? meta.content : null;
  }

  function fmtDate(s) {
    if (!s) return '—';
    // s is ISO 'YYYY-MM-DD' or full ISO
    try {
      const d = new Date(s);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
      }
    } catch (e) { /* fall through */ }
    return String(s);
  }

  // ---------- Login page ----------
  function bindLogin() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    const btn = document.getElementById('submitBtn');
    const err = document.getElementById('errorMsg');
    const caseId = getCaseId();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      err.textContent = '';
      btn.disabled = true;
      btn.textContent = 'Signing in…';

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      try {
        const res = await fetch('/api/portal/login', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ caseId, email, password }),
        });

        if (res.ok) {
          window.location.href = './dashboard.html';
          return;
        }
        if (res.status === 429) {
          err.textContent = 'Too many sign-in attempts. Please try again later.';
        } else if (res.status === 401) {
          err.textContent = 'Email or password not recognized. If you received a notice from this firm, your email and the case password are exactly as printed there.';
        } else {
          err.textContent = 'Something went wrong. Please try again, or email nslee@nslegal-ip.com.';
        }
      } catch (ex) {
        err.textContent = 'Network error. Please try again.';
      } finally {
        btn.disabled = false;
        btn.textContent = 'Sign in';
      }
    });
  }

  // ---------- Dashboard page ----------
  async function bindDashboard() {
    const caption = document.getElementById('caseCaption');

    let data;
    try {
      const res = await fetch('/api/portal/data', { credentials: 'include' });
      if (res.status === 401) {
        window.location.href = './';
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      data = await res.json();
    } catch (ex) {
      caption.textContent = 'Unable to load case data';
      console.error(ex);
      return;
    }

    // Case header
    const c = data.case || {};
    caption.textContent = c.case_caption || c.name || 'Case';
    document.getElementById('caseNumber').textContent = c.case_number || '—';
    document.getElementById('caseJudge').textContent = c.judge || '—';
    document.getElementById('caseFiled').textContent = fmtDate(c.filed_date);

    // Defendant row (this defendant only)
    const def = data.defendant;
    if (def) {
      document.getElementById('defendantCard').hidden = false;
      document.getElementById('defNo').textContent = def.schedule_a_no != null ? `#${def.schedule_a_no}` : '—';
      document.getElementById('defMerchant').textContent = def.merchant_name || '—';
      const status = (def.status || 'served').toLowerCase();
      const statusEl = document.getElementById('defStatus');
      statusEl.textContent = status;
      statusEl.classList.add(status);
      if (def.last_action_date) {
        document.getElementById('defLastActionRow').hidden = false;
        document.getElementById('defLastAction').textContent = fmtDate(def.last_action_date);
      }
      if (def.latest_event_summary) {
        document.getElementById('defLatestSummary').textContent = def.latest_event_summary;
      }
    }

    // Docket table
    const tbl = document.getElementById('docketTable');
    tbl.innerHTML = '';
    const dockets = data.dockets || [];
    if (dockets.length === 0) {
      tbl.innerHTML = '<p class="subtle">No filings yet.</p>';
    }
    dockets.forEach((d) => {
      const row = document.createElement('div');
      row.className = 'docket-row';
      const entryLabel = d.sub_no ? `${String(d.entry_no).padStart(2, '0')}-${String(d.sub_no).padStart(2, '0')}` : String(d.entry_no);
      const action = d.is_public && d.doc_key
        ? `<a href="/api/portal/download?doc=${encodeURIComponent(d.doc_key)}" data-doc-key="${encodeURIComponent(d.doc_key)}" data-track="download">Download PDF</a>`
        : '<span class="no-doc">no document attached</span>';
      row.innerHTML = `
        <div class="col-entry">Dkt ${entryLabel}</div>
        <div class="col-date">${fmtDate(d.filing_date)}</div>
        <div class="col-title">${escapeHTML(d.title || d.type || '—')}</div>
        <div class="col-action">${action}</div>
      `;
      tbl.appendChild(row);
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      try {
        await fetch('/api/portal/logout', { method: 'POST', credentials: 'include' });
      } finally {
        window.location.href = './';
      }
    });
  }

  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Public namespace (referenced by the HTML pages)
  window.Portal = { bindLogin, bindDashboard };
})();
