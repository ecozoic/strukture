import { quickSort, mergeSort } from './sort';
import { CompareFunction } from '../structures/Comparator';

type User = { age: number; name: string };

describe('quickSort', () => {
  it('works', () => {
    const notSortedUserList: Array<User> = [
      { age: 20, name: 'Kate' },
      { age: 42, name: 'Ben' },
      { age: 50, name: 'Jane' },
      { age: 60, name: 'Julia' },
      { age: 20, name: 'Tom' },
      { age: 24, name: 'Cary' },
      { age: 37, name: 'Mike' },
      { age: 18, name: 'Bill' },
    ];

    const userComparator: CompareFunction<User> = (user1, user2) => {
      if (user1.age === user2.age) {
        return 0;
      }

      return user1.age > user2.age ? 1 : -1;
    };

    const sortedUserList = quickSort(notSortedUserList, userComparator);

    console.log(sortedUserList);
  });
});

describe('mergeSort', () => {
  it('works', () => {
    const notSortedUserList: Array<User> = [
      { age: 20, name: 'Kate' },
      { age: 42, name: 'Ben' },
      { age: 50, name: 'Jane' },
      { age: 60, name: 'Julia' },
      { age: 20, name: 'Tom' },
      { age: 24, name: 'Cary' },
      { age: 37, name: 'Mike' },
      { age: 18, name: 'Bill' },
    ];

    const userComparator: CompareFunction<User> = (user1, user2) => {
      if (user1.age === user2.age) {
        return 0;
      }

      return user1.age > user2.age ? 1 : -1;
    };

    const sortedUserList = mergeSort(notSortedUserList, userComparator);

    console.log(sortedUserList);
  });
});
