import { ProfileJPEG } from 'src/assets';

export interface TutorInterface {
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
    available?: boolean;
    recommend?: boolean;
    marked?: boolean;
  };
  accent: string;
}

export const TUTORS: TutorInterface[] = [
  {
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
      available: true,
      marked: true,
    },
    accent: 'British',
  },
  {
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
      available: true,
    },
    accent: 'American',
  },
  {
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
      available: true,
      marked: true,
    },
    accent: 'American',
  },
  {
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
    accent: 'American',
  },
  {
    name: 'Elijah',
    profile: ProfileJPEG,
    college: 'Harvard University',
    major: 'Biology',
    acceptPercentage: 90,
    lesson: {
      duration: 20,
      number: 10,
    },
    tags: ['Science'],
    accent: 'American',
  },
  {
    name: 'Ava',
    profile: ProfileJPEG,
    college: 'Massachusetts Institute of Technology',
    major: 'Engineering',
    acceptPercentage: 95,
    lesson: {
      duration: 40,
      number: 8,
    },
    tags: ['STEM', 'Tutor'],
    type: {
      recommend: true,
    },
    accent: 'australian',
  },
  {
    name: 'Mason',
    profile: ProfileJPEG,
    college: 'University of California, Berkeley',
    major: 'Psychology',
    acceptPercentage: 85,
    lesson: {
      duration: 40,
      number: 12,
    },
    tags: ['Psychology'],
    accent: 'australian',
  },
  {
    name: 'Luna',
    profile: ProfileJPEG,
    college: 'Columbia University',
    major: 'Literature',
    acceptPercentage: 75,
    lesson: {
      duration: 40,
      number: 7,
    },
    tags: ['Literature', 'Tutor'],
    type: {
      available: true,
      marked: true,
    },
    accent: 'canadian',
  },
  {
    name: 'Liam',
    profile: ProfileJPEG,
    college: 'Princeton University',
    major: 'Mathematics',
    acceptPercentage: 85,
    lesson: {
      duration: 40,
      number: 10,
    },
    type: {
      available: true,
    },
    tags: ['STEM'],
    accent: 'canadian',
  },
  {
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
      available: true,
      marked: true,
    },
    accent: 'canadian',
  },
];
