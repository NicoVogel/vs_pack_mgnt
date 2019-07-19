import { TreeDataProvider, Extension, TreeItem } from 'vscode';

export class ExtensionPackManager implements TreeDataProvider<Extension<any>> {
    onDidChangeTreeData?:
        | import('vscode').Event<Extension<any> | null | undefined>
        | undefined;
    getTreeItem(element: Extension<any>): TreeItem | Thenable<TreeItem> {
        return new TreeItem('test');
    }
    getChildren(
        element?: Extension<any> | undefined
    ): import('vscode').ProviderResult<Extension<any>[]> {
        return undefined;
    }
}

export class ExtensionPack extends TreeItem {}
