import { articles } from './data';
import ArticleContent from './article-content';

export function generateStaticParams() {
  return Object.keys(articles).map((id) => ({
    id: id.toString(),
  }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articleId = parseInt(params.id, 10);
  const article = articles[articleId as keyof typeof articles];
  return <ArticleContent article={article} />;
}