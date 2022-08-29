const createClamped = <T>(content: string, n: number, constructor: (content: string) => T) => {
  const clamped = content.substring(0, 100) + '...';
  return constructor(clamped);
}

export class String50 {
  readonly content: string;

  private constructor(content: string) {
    this.content = content;
  }

  static createClamped(content: string) {
    return createClamped<String100>(content, 50, c => new String50(c));
  }
}


export class String100 {
  readonly content: string;

  private constructor(content: string) {
    this.content = content;
  }

  static createClamped(content: string) {
    return createClamped<String100>(content, 100, c => new String100(c));
  }
}
