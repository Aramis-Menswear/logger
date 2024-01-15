# @aramis/logger

[![Build and Publish](https://github.com/Aramis-Menswear/logger/actions/workflows/publish-package.yml/badge.svg)](https://github.com/Aramis-Menswear/logger/actions/workflows/publish-package.yml)

## Instalação
```bash
$ npm i @aramis-menswear/logger@latest
```

### Configurando o Github Packages
Para executar a autenticação adicionando seu personal access token (classic) ao arquivo ~/.npmrc, edite o arquivo ~/.npmrc para que o projeto inclua a linha a seguir, substituindo TOKEN pelo seu personal access token. Crie um arquivo ~/.npmrc se ele não existir.
```bash
# ~/.npmrc
//npm.pkg.github.com/:_authToken=TOKEN
```

## Uso
```javascript
import log from '@aramis-menswear/logger';

log.info('Information.');
log.warn('Warning!');
log.error('Error!');
log.success('Success!');
```

