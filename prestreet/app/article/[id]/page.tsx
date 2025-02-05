import { articles } from './data';
import ArticleContent from './article-content';

export function generateStaticParams() {
  return Object.keys(articles).map((id) => ({
    id: id.toString(),
  }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles];
  return <ArticleContent article={article} />;
}