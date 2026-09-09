from pathlib import Path
import markdown

ROOT = Path(__file__).resolve().parents[1]
source = (ROOT / 'README.md').read_text(encoding='utf-8')
body = markdown.markdown(
    source,
    extensions=['extra', 'fenced_code', 'tables', 'toc', 'sane_lists'],
    output_format='html5',
)
# Make media and code blocks interactive without changing the Markdown source.
body = body.replace('<img ', '<img class="zoomable" tabindex="0" role="button" aria-label="Agrandir l’image" ')
body = body.replace('<pre>', '<pre class="zoomable" tabindex="0" role="button" aria-label="Agrandir le bloc de code">')

html = f'''<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Documentation HTML de DREADNYX, bot WhatsApp multi-appareils.">
  <title>DREADNYX — Documentation</title>
  <link rel="stylesheet" href="README.css">
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#top" aria-label="Retour au début de la documentation">DREADNYX</a>
      <a class="github-link" href="https://github.com/jeremie7u/DREADNYX" target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
    </div>
  </header>
  <main id="top" class="page-shell">
    <article class="readme-content">
      {body}
    </article>
  </main>
  <div class="zoom-hint" aria-hidden="true">Cliquez sur une image ou un bloc de code pour l’agrandir</div>
  <script src="README.js" defer></script>
</body>
</html>
'''
(ROOT / 'README.html').write_text(html, encoding='utf-8')
print('README.html généré')
