export interface Article {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  tag: string;
  originalSource: string;
  readingTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}