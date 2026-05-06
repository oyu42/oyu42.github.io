(function () {
  let currentLang = 'ja';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function attrPair(item) {
    return 'data-ja="' + escapeHtml(item.ja || '') + '" data-en="' + escapeHtml(item.en || '') + '"';
  }

  function bilingual(item) {
    return '<span ' + attrPair(item) + '>' + escapeHtml(item.ja || '') + '</span>';
  }

  // 末尾のリンクボタン。直前に Word Joiner (⁠) を挿入し、
  // モバイルでボタンだけが次行にはみ出すのを防ぐ。
  function linkBtn(url, label) {
    if (!url) return '';
    return '⁠<a class="link-btn" href="' + escapeHtml(url) +
      '" target="_blank" rel="noopener" aria-label="' + escapeHtml(label || 'link') + '"></a>';
  }

  function renderHeader() {
    const nameEl = document.getElementById('name');
    nameEl.setAttribute('data-ja', data.name.ja);
    nameEl.setAttribute('data-en', data.name.en);
    nameEl.textContent = data.name.ja;

    document.getElementById('affiliation').innerHTML = data.affiliation.map(function (a) {
      return '<p class="affil">' + bilingual(a) + linkBtn(a.url) + '</p>';
    }).join('');
  }

  function renderAbout() {
    let html = data.about.map(function (p) {
      return '<p>' + bilingual(p) + linkBtn(p.url) + '</p>';
    }).join('');
    if (data.keywords && data.keywords.length) {
      html += '<p class="keywords"><span class="label">Keywords</span>' +
        escapeHtml(data.keywords.join(', ')) + '</p>';
    }
    document.getElementById('about-content').innerHTML = html;
  }

  function renderList(targetId, items) {
    const el = document.getElementById(targetId);
    if (!items || items.length === 0) {
      el.innerHTML = '<p class="empty" data-ja="準備中" data-en="Coming soon">準備中</p>';
      return;
    }
    el.innerHTML = '<ul class="list">' + items.map(function (item) {
      return '<li>' +
        '<span class="date">' + escapeHtml(item.date || '') + '</span>' +
        '<span class="body">' + bilingual(item) + linkBtn(item.url) + '</span>' +
        '</li>';
    }).join('') + '</ul>';
  }

  function renderContact() {
    document.getElementById('contact-content').innerHTML =
      '<ul class="contact-list">' + data.contact.map(function (c) {
        return '<li><span class="label">' + escapeHtml(c.label) + '</span>' +
          escapeHtml(c.value) + '</li>';
      }).join('') + '</ul>';
  }

  function render() {
    renderHeader();
    renderAbout();
    renderList('news-content', data.news);
    renderList('education-content', data.education);
    renderList('publications-content', data.publications);
    renderContact();
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ja][data-en]').forEach(function (el) {
      const text = el.getAttribute('data-' + lang);
      if (text !== null) el.textContent = text;
    });
  }

  function setLang(lang) {
    currentLang = lang;
    applyLang(lang);
    if (history.replaceState) {
      const hash = lang === 'en' ? '#en' : '';
      history.replaceState(null, '', window.location.pathname + window.location.search + hash);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof data === 'undefined') {
      console.error('data.js not loaded');
      return;
    }
    if (window.location.hash === '#en') currentLang = 'en';
    render();
    applyLang(currentLang);

    document.getElementById('langToggle').addEventListener('click', function () {
      setLang(currentLang === 'ja' ? 'en' : 'ja');
    });
  });
})();
