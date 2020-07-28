import { commands, ExtensionContext, languages } from "vscode";
import MyCodeLensProvider from "./codeLensProvider";
import { addConsoleLog } from "./commands";

export function activate(context: ExtensionContext) {
  let commandDisposable = commands.registerCommand(
    "extension.addConsoleLog",
    addConsoleLog
  );

  let codeLensProviderDisposable = languages.registerCodeLensProvider(
    {
      language: "arrai",
      scheme: "file"
    },
    new MyCodeLensProvider()
  );

  context.subscriptions.push(commandDisposable);
  context.subscriptions.push(codeLensProviderDisposable);
}

export function deactivate() {}
