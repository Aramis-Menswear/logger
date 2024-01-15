# @aramis/logger

[![Build and Publish](https://github.com/Aramis-Menswear/logger/actions/workflows/publish-package.yml/badge.svg)](https://github.com/Aramis-Menswear/logger/actions/workflows/publish-package.yml)

## Instalação
```bash
$ npm i @aramis-menswear/logger@latest
```

### Configurando o Github Packages
Para se conectar ao NPN registry privado da Aramis siga os passos da [documentação na wiki](https://dev.azure.com/aramis-engenharia/Barramento/_wiki/wikis/Barramento.wiki/76/Github-Package-Registry)

## Uso
```javascript
import log from '@aramis-menswear/logger';

log.info('Information.');
log.warn('Warning!');
log.error('Error!');
log.success('Success!');
```

## Contribuindo
1. Crie uma branch
2. Adicione os testes unitários referentes à nova funcionalidade
3. Durante o commit, será necessário selecionar o nível da mudança para o versoniomente automático. Dúvidas sobre versionamento semântico, consulte a documentação oficial em https://semver.org/.
```bash
? Semantic Version? (Use arrow keys)
❯ Major
  Minor
  Patch
```
4. O commit deve seguir o padrão de [Convencional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
5. Crie um Pull Request e aguarde aprovação do time
6. A versão será publicada automaticamente. Acompanhe o build nas [Actions](https://github.com/Aramis-Menswear/logger/actions) do repositório

