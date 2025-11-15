✅ 1. Criar tags (marcações de versão)

As tags servem para marcar pontos específicos da história do repositório, normalmente versões.
Como criar uma tag pelo Git:
git tag -a v1.0.0 -m "Primeira versão"
git push origin v1.0.0


Depois disso ela aparece no GitHub em
Releases → Tags, e pode ser baixada como .zip ou .tar.gz.

✅ 2. Criar uma Release no GitHub

As Releases ficam disponíveis em uma página própria e são ideais para distribuir versões estáveis.
Como criar:
Vá no repositório → Releases (menu lateral ou aba "Code").
Clique em Draft a new release.
Escolha uma tag existente ou crie uma nova.
Dê nome / descrição à versão.
Clique em Publish Release.

Isso gera um pacote pronto para download.