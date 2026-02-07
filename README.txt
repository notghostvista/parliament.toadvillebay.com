Parliament Website Template (ToadVille Bay)

How to run locally:
- Just open index.html in your browser.
- For best results (and to avoid any browser restrictions), run a simple local server:
  - VS Code: install "Live Server" and click "Go Live"
  - Or Python: python -m http.server 8000, then open http://localhost:8000

Pages:
- index.html (home)
- seating.html (interactive seating chart; click a seat for modal + profile link)
- members.html (members list)
- member.html (member profile via query string ?id=1)
- parties.html (party totals)

To customize names/districts:
- Edit assets/js/seating.js and assets/js/members.js
- Replace placeholder generation with real member objects if you want.
