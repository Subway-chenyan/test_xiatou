export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    moralScore: number;
    actionScore: number;
  }[];
}

export interface UserInfo {
  name: string;
  gender: 'male' | 'female' | 'other';
  age: number;
}

export interface TestResult {
  moralScore: number;
  actionScore: number;
  title: string;
  description: string;
}