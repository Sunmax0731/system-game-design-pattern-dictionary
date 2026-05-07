const app = document.getElementById("app");
app.className = "status";
app.innerHTML = [
  ["QCDS", "S- / manual test pending"],
  ["Release", "v0.1.0-alpha.1 prerelease"],
  ["Docs ZIP", "dist/system-game-design-pattern-dictionary-docs.zip"],
  ["Manual", "docs/manual-test.md"]
].map(([label, value]) => `<div class="metric"><strong>${label}</strong><span>${value}</span></div>`).join("");
app.dataset.marker = "closed-alpha-preview";
