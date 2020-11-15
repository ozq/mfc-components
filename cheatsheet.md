**PUBLISH NEW VERSION**  
1. Выполнить команду `npm version [patch|minor|major]` [в результате выполнится scripts.preversion >> в package.json обновится версия >> создастся коммит с package.json и версией в названии >> на этот коммит поставится тег версии >> выполнится scripts.version (который, в свою очередь, инициирует `npm publish`)]
2. Убедиться, что версия обновлена на https://www.npmjs.com/

**PUBLISH LOCAL VERSION**  
1. Выполнить команду `yalc publish --push` [в результате во всех проектах, где был ранее сделан `yalc add @mfc/components`, обновится пакет @mfc/components]