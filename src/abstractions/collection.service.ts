import { CollectionData } from '../models/data/collectionData';

import { Collection } from '../models/domain/collection';
import { TreeNode } from '../models/domain/treeNode';

import { CollectionView } from '../models/view/collectionView';

export abstract class CollectionService {
    decryptedCollectionCache: CollectionView[];

    clearCache: () => void;
    encrypt: (model: CollectionView) => Promise<Collection>;
    decryptMany: (collections: Collection[]) => Promise<CollectionView[]>;
    get: (id: string) => Promise<Collection>;
    getAll: () => Promise<Collection[]>;
    getAllDecrypted: () => Promise<CollectionView[]>;
    getAllNested: (collections?: CollectionView[]) => Promise<Array<TreeNode<CollectionView>>>;
    upsert: (collection: CollectionData | CollectionData[]) => Promise<any>;
    replace: (collections: { [id: string]: CollectionData; }) => Promise<any>;
    clear: (userId: string) => Promise<any>;
    delete: (id: string | string[]) => Promise<any>;
}
