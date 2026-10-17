const { AutoLanguageClient } = require('@savetheclocktower/atom-languageclient');

const PACKAGE_NAME = require('../package.json').name;

class ValaLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return(['source.vala']);
  }
  getLanguageName() {
    return("Vala");
  }
  getServerName() {
    return("Vala Language Server");
  }
  getPackageName() {
    return("pulsar-ide-vala");
  }
  startServerProcess(projectPath) {
    const config = atom.config.get(PACKAGE_NAME);
    return(
      super.spawn(
        config.valaLangServerCommand,
        [],
        { cwd: projectPath }
      )
    );
  }
}

module.exports = new ValaLanguageClient();

module.exports.config = {
  valaLangServerCommand: {
    type: 'string',
    title: 'Vala Language Server executable',
    description: 'Specify the location of vala-language-server if it\'s not in $PATH.',
    default: 'vala-language-server'
  }
};
