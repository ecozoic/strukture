/**
 * @class A utility class for comparing arbitrary values
 */
export default class Comparator<T> {
  /**
   * Default comparison using ===, >, and < operators
   * @param a First value to compare
   * @param b Second value to compare
   * @return 0 if equal, -1 if a < b, 1 if a > b
   * @static
   */
  static defaultCompareFunction<T>(a: T, b: T): number {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Compare function
   * @member
   * @private
   */
  private compare: CompareFunction<T>;

  /**
   * Creates a new comparator
   * @param compare Compare function to use for comparisons
   * @constructor
   */
  constructor(compare: CompareFunction<T>) {
    this.compare = compare || Comparator.defaultCompareFunction;
  }

  /**
   * Check if two values are equal
   * @param a First value
   * @param b Second value
   * @return True if equal, false otherwise
   */
  equal(a: T, b: T): boolean {
    return this.compare(a, b) === 0;
  }

  /**
   * Check if a is less than b
   * @param a First value
   * @param b Second value
   * @return True if a is less than b, false otherwise
   */
  lessThan(a: T, b: T): boolean {
    return this.compare(a, b) < 0;
  }

  /**
   * Check if a is greater than b
   * @param a First value
   * @param b Second value
   * @return True if a is greater than b, false otherwise
   */
  greaterThan(a: T, b: T): boolean {
    return this.compare(a, b) > 0;
  }

  /**
   * Check if a is less than or equal to b
   * @param a First value
   * @param b Second value
   * @return True if a is less than or equal to b, false otherwise
   */
  lessThanOrEqual(a: T, b: T): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Check if a is greater than or equal to b
   * @param a First value
   * @param b Second value
   * @return True if a is greater than or equal to b, false otherwise
   */
  greaterThanOrEqual(a: T, b: T): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}

export type CompareFunction<T> = (a: T, b: T) => number;
