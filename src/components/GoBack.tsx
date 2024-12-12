import { FaArrowLeftLong } from 'react-icons/fa6';

import { Link } from 'react-router-dom';

const GoBack = () => {
  return (
    <Link to="/">
      <span className="flex items-center gap-2 mb-4">
        <FaArrowLeftLong />
        <span>back</span>
      </span>
    </Link>
  );
};

export default GoBack;
