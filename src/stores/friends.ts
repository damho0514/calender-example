import { atom, selector, selectorFamily } from 'recoil';
import { IFriend } from '../interfaces/IFriend';

const initialState: IFriend[] = [
  {
    userId: 'user1',
    name: '담호',
    profileImage: '',
    statusMessage: 'FE',
  },
  {
    userId: 'user2',
    name: '테스트',
    profileImage: 'https://i.ibb.co/MgmDcz1/1021805078815985664.webp',
    statusMessage: '테스트',
  },
];

export const friendsState = atom<IFriend[]>({
  key: 'friends',
  default: initialState,
});

export const selectUserById = selectorFamily<IFriend[], string>({
  key: 'selectUserById',
  get:
    (userId: string) =>
    ({ get }) =>
      get(friendsState).filter((friend) => friend.userId === userId),
});
