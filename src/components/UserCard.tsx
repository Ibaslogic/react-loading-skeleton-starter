import { NavLink } from 'react-router-dom';
import { User } from './CardList';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <li className="border-b border-gray-100 text-sm sm:text-base">
      <NavLink
        className={({ isActive }) => {
          const baseClasses =
            'flex items-center gap-4 p-4 hover:bg-gray-100';
          return isActive
            ? `${baseClasses} bg-gray-100`
            : baseClasses;
        }}
        to={`/posts/${user.id}`}
      >
        <div className="w-12 h-12 relative">
          <img
            src={user.imageUrl}
            alt={`${user.name}'s profile`}
            className={`w-12 h-12 rounded-full object-cover`}
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{user.name}</h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
      </NavLink>
    </li>
  );
};
