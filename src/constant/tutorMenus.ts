export interface TutorMenuItems {
  name: string;
  type: 'available' | 'recommend' | 'marked';
}

export const TUTOR_MENUS: TutorMenuItems[] = [
  {
    name: '예약 가능',
    type: 'available',
  },
  {
    name: '추천 튜터',
    type: 'recommend',
  },
  {
    name: '찜한 튜터',
    type: 'marked',
  },
];
