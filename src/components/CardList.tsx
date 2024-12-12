import { useQuery } from '@tanstack/react-query';
import { fetcherWithFetch } from '../lib/fetcherWithFetch';
import { UserCard } from './UserCard';

import { RiLoader2Fill } from 'react-icons/ri';

export type User = {
  id: number;
  name: string;
  email: string;
  imageUrl: string; // Added imageUrl to the User type
};

const CardList = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () =>
      fetcherWithFetch(
        'https://jsonplaceholder.typicode.com/users?_limit=10'
      ),
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div className="max-w-4xl mx-auto">
      {error && (
        <div className="text-red-700">{`Error fetching post data: ${error}`}</div>
      )}

      <h2 className="text-2xl mb-6 px-2">Users</h2>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 px-2">
        {isLoading && (
          <div className="min-h-[300px] justify-items-center content-center">
            <RiLoader2Fill className="size-6 animate-spin " />
          </div>
        )}

        {users?.map((user) => (
          <UserCard
            user={{
              ...user,
              imageUrl: `https://picsum.photos/seed/${user.id}/200`,
            }}
            key={user.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
