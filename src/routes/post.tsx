import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetcherWithFetch } from '../lib/fetcherWithFetch';

import GoBack from '../components/GoBack';

export default function Post() {
  const { userId } = useParams();

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts', userId],
    queryFn: () =>
      fetcherWithFetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      ),
    staleTime: 1000 * 60 * 10, // cache for 10 minutes
  });

  const post = posts?.[0];

  return (
    <div className="max-w-4xl mx-auto">
      <GoBack />
      {isLoading && (
        <div className="text-xl font-medium">A moment please...</div>
      )}
      {error && (
        <div className="text-red-700">{`Error fetching post data: ${error}`}</div>
      )}
      <article>
        <h1 className="text-xl md:text-2xl font-medium mb-6">
          {post?.title}
        </h1>
        <p>{post?.body}</p>
      </article>
    </div>
  );
}
