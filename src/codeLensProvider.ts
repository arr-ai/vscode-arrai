import {
    CodeLensProvider,
    TextDocument,
    CodeLens,
    Range,
  } from "vscode";
  
  class MyCodeLensProvider implements CodeLensProvider {
    async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
      let topOfDocument = new Range(0, 0, 0, 0);
  
      let codeLens = new CodeLens(topOfDocument, {
        command: "extension.addConsoleLog",
        title: "Insert console.log"
      });
  
      return [codeLens];
    }
  }
  
  export default MyCodeLensProvider;