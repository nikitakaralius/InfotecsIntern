const createClamped = <T>(content: string, n: number, constructor: (content: string) => T) => {
  return content.length <= n
    ? constructor(content)
    : constructor(content.substring(0, n - 3) + '...');
};

export class String80 {
  readonly content: string;

  private constructor(content: string) {
    this.content = content;
  }

  static createClamped(content: string) {
    return createClamped<String100>(content, 80, c => new String80(c));
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

export type ConnectionStatus = 'Success' | 'Failure';

export interface NetworkError {
  message: unknown;
}

export type FetchError = null | NetworkError | 'Unknown RSS dialect';
