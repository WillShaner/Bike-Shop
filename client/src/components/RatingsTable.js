import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function RatingsTable() {
  const randomNum = () => {
    const num = Math.ceil(Math.random() * 5);
    return num;
  };

  const i = randomNum();
  return (
    <div className="ratings-table w-100 ps-5 mb-5">
      <h4>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <span style={{ color: 'black' }}>({120 - i})</span>
      </h4>

      <h4>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <span style={{ color: 'black' }}>({70 - i})</span>
      </h4>

      <h4>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <span style={{ color: 'black' }}>({30 - i})</span>
      </h4>

      <h4>
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <span style={{ color: 'black' }}>({7 - i})</span>
      </h4>

      <h4>
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <span style={{ color: 'black' }}>({6 - i})</span>
      </h4>

      <h4>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <span style={{ color: 'black' }}>(0)</span>
      </h4>
    </div>
  );
}
