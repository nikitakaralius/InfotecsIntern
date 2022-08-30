const createClamped = <T>(content: string, symbols: number, constructor: (_: string) => T) => {
  return content.length <= symbols
    ? constructor(content)
    : constructor(content.substring(0, symbols - 3) + '...');
};

class String100 {
  readonly content: string;

  private constructor(content: string) {
    this.content = content;
  }

  static createClamped(content: string) {
    return createClamped(content, 100, c => new String100(c));
  }
}

class String250 {
  readonly content: string;

  private constructor(content: string) {
    this.content = content;
  }

  static createClamped(content: string) {
    return createClamped(content, 250, c => new String250(c));
  }
}

export {createClamped};
