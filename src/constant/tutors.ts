import { add, setHours, setMinutes } from 'date-fns';

import { ProfileJPEG } from 'src/assets';

export interface TutorInterface {
  id: number;
  name: string;
  profile: string;
  college: string;
  major: string;
  acceptPercentage: number;
  lesson: {
    duration: number;
    number: number;
  };
  tags?: string[];
  type?: {
    recommend?: boolean;
    marked?: boolean;
  };
  startTime: Date;
  endTime: Date;
  accent: string;
}

const today = new Date();
const tomorrow = add(today, { days: 1 });

const FIRST_AVAILABLE_START_TIME = setMinutes(setHours(tomorrow, 0), 0);
const FIRST_AVAILABLE_END_TIME = setMinutes(setHours(tomorrow, 0), 30);

const SECOND_AVAILABLE_START_TIME = setMinutes(setHours(tomorrow, 1), 0);
const SECOND_AVAILABLE_END_TIME = setMinutes(setHours(tomorrow, 1), 30);

const THIRD_AVAILABLE_START_TIME = setMinutes(setHours(tomorrow, 5), 30);
const THIRD_AVAILABLE_END_TIME = setMinutes(setHours(tomorrow, 6), 0);

const FOURTH_AVAILABLE_START_TIME = setMinutes(setHours(tomorrow, 0), 0);
const FOURTH_AVAILABLE_END_TIME = setMinutes(setHours(tomorrow, 0), 30);

export const TUTORS: TutorInterface[] = [
  {
    id: 1,
    name: 'Dominic',
    profile: ProfileJPEG,
    college: 'University of Oxford',
    major: 'Japanese and Korea Studies',
    acceptPercentage: 100,
    lesson: {
      duration: 20,
      number: 9,
    },
    type: {
      marked: true,
    },
    startTime: FIRST_AVAILABLE_START_TIME,
    endTime: FIRST_AVAILABLE_END_TIME,
    accent: 'British',
  },
  {
    id: 2,
    name: 'Bao',
    profile: ProfileJPEG,
    college: 'Yale University',
    major: 'Ethnicity, Race, and Migration',
    acceptPercentage: 100,
    lesson: {
      duration: 20,
      number: 3,
    },
    tags: ['University'],
    type: {
      recommend: true,
    },
    startTime: FIRST_AVAILABLE_START_TIME,
    endTime: FIRST_AVAILABLE_END_TIME,
    accent: 'American',
  },
  {
    id: 3,
    name: 'Aadhya',
    profile: ProfileJPEG,
    college: 'New York University',
    major: 'Finance',
    acceptPercentage: 0,
    lesson: {
      duration: 20,
      number: 19,
    },
    tags: ['Tutor'],
    type: {
      marked: true,
    },
    startTime: FIRST_AVAILABLE_START_TIME,
    endTime: FIRST_AVAILABLE_END_TIME,
    accent: 'American',
  },
  {
    id: 4,
    name: 'Sophia',
    profile: ProfileJPEG,
    college: 'Stanford University',
    major: 'Computer Science',
    acceptPercentage: 80,
    lesson: {
      duration: 20,
      number: 15,
    },
    tags: ['STEM'],
    type: {
      recommend: true,
    },
    startTime: SECOND_AVAILABLE_START_TIME,
    endTime: SECOND_AVAILABLE_END_TIME,
    accent: 'American',
  },
  {
    id: 5,
    name: 'Elijah',
    profile: ProfileJPEG,
    college: 'Harvard University',
    major: 'Biology',
    acceptPercentage: 90,
    lesson: {
      duration: 20,
      number: 10,
    },
    startTime: SECOND_AVAILABLE_START_TIME,
    endTime: SECOND_AVAILABLE_END_TIME,
    tags: ['Science'],
    accent: 'American',
  },
  {
    id: 6,
    name: 'Ava',
    profile: ProfileJPEG,
    college: 'Massachusetts Institute of Technology',
    major: 'Engineering',
    acceptPercentage: 95,
    lesson: {
      duration: 20,
      number: 8,
    },
    tags: ['STEM', 'Tutor'],
    type: {
      recommend: true,
    },
    startTime: THIRD_AVAILABLE_START_TIME,
    endTime: THIRD_AVAILABLE_END_TIME,
    accent: 'australian',
  },
  {
    id: 7,
    name: 'Mason',
    profile: ProfileJPEG,
    college: 'University of California, Berkeley',
    major: 'Psychology',
    acceptPercentage: 85,
    lesson: {
      duration: 20,
      number: 12,
    },
    startTime: THIRD_AVAILABLE_START_TIME,
    endTime: THIRD_AVAILABLE_END_TIME,
    tags: ['Psychology'],
    accent: 'australian',
  },
  {
    id: 8,
    name: 'Luna',
    profile: ProfileJPEG,
    college: 'Columbia University',
    major: 'Literature',
    acceptPercentage: 75,
    lesson: {
      duration: 20,
      number: 7,
    },
    tags: ['Literature', 'Tutor'],
    type: {
      marked: true,
    },
    startTime: THIRD_AVAILABLE_START_TIME,
    endTime: THIRD_AVAILABLE_END_TIME,
    accent: 'canadian',
  },
  {
    id: 9,
    name: 'Liam',
    profile: ProfileJPEG,
    college: 'Princeton University',
    major: 'Mathematics',
    acceptPercentage: 85,
    lesson: {
      duration: 20,
      number: 10,
    },
    startTime: THIRD_AVAILABLE_START_TIME,
    endTime: THIRD_AVAILABLE_END_TIME,
    tags: ['STEM'],
    accent: 'canadian',
  },
  {
    id: 10,
    name: 'Olivia',
    profile: ProfileJPEG,
    college: 'University of Cambridge',
    major: 'History',
    acceptPercentage: 70,
    lesson: {
      duration: 40,
      number: 8,
    },
    tags: ['History', 'Tutor'],
    type: {
      marked: true,
    },
    startTime: FOURTH_AVAILABLE_START_TIME,
    endTime: FOURTH_AVAILABLE_END_TIME,
    accent: 'canadian',
  },
  {
    id: 11,
    name: 'Emma',
    profile: ProfileJPEG,
    college: 'Harvard University',
    major: 'Computer Science',
    acceptPercentage: 90,
    lesson: {
      duration: 40,
      number: 8,
    },
    startTime: FOURTH_AVAILABLE_START_TIME,
    endTime: FOURTH_AVAILABLE_END_TIME,
    tags: ['STEM'],
    accent: 'American',
  },
  {
    id: 12,
    name: 'Ethan',
    profile: ProfileJPEG,
    college: 'Stanford University',
    major: 'Electrical Engineering',
    acceptPercentage: 80,
    lesson: {
      duration: 40,
      number: 12,
    },
    startTime: FOURTH_AVAILABLE_START_TIME,
    endTime: FOURTH_AVAILABLE_END_TIME,
    tags: ['STEM'],
    accent: 'American',
  },
  {
    id: 13,
    name: 'Sophia',
    profile: ProfileJPEG,
    college: 'Massachusetts Institute of Technology (MIT)',
    major: 'Physics',
    acceptPercentage: 95,
    lesson: {
      duration: 40,
      number: 15,
    },
    startTime: FOURTH_AVAILABLE_START_TIME,
    endTime: FOURTH_AVAILABLE_END_TIME,
    tags: ['STEM'],
    accent: 'American',
  },
];
