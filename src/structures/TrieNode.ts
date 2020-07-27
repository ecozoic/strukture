export default class TrieNode {
  public word: boolean;
  public children: Map<string, TrieNode>;

  constructor() {
    this.word = false;
    this.children = new Map<string, TrieNode>();
  }
}

export class Dictionary {
  private trie: TrieNode;

  constructor() {
    this.trie = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.trie;

    for (let c = 0; c < word.length; c++) {
      if (!node.children.has(word[c])) {
        node.children.set(word[c], new TrieNode());
      }
      node = node.children.get(word[c]) as TrieNode;
    }

    node.word = true;
  }

  search(word: string): boolean {
    return this.searchInNode(word, this.trie);
  }

  private searchInNode(word: string, node: TrieNode): boolean {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!node.children.has(char)) {
        // if character is '.' wildcard, check all possible nodes at this level
        if (char === '.') {
          for (const [, child] of node.children) {
            if (this.searchInNode(word.slice(i + 1), child)) {
              return true;
            }
          }
        }

        // no match
        return false;
      } else {
        // character found, go down a level
        node = node.children.get(char) as TrieNode;
      }
    }
    return node.word;
  }
}
