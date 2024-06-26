/*eslint-disable react/prop-types */

import RemoveUser from '../features/RemoveUser';

function Card({ userInfo }) {
  return (
    <div
      className="text-xs sm:text-sm border-2 border-black shadow-xl"
      key={userInfo.uid}
    >
      <div className="p-3 flex flex-col sm:flex-row items-center gap-2">
        <img className="h-12 rounded-full shadow-xl" src={userInfo.image} />
        <p className="grow">{userInfo.username}</p>
        <span className="font-semibold">{userInfo.twubric.total}</span>
      </div>
      <div className="flex text-xs flex-col md:flex-row border-black border-b border-t items-center text-center p-3">
        <div className="flex flex-row-reverse justify-evenly gap-8 md:block md:grow md:border-r md:border-black">
          <span className="md:block font-semibold">
            {userInfo.twubric.friends}
          </span>
          <p>Friends</p>
        </div>
        <div className=" flex flex-row-reverse justify-evenly gap-8 md:block md:grow md:border-r md:border-black">
          <span className="md:block font-semibold">
            {userInfo.twubric.influence}
          </span>
          <p>Influence</p>
        </div>
        <div className=" flex flex-row-reverse md:inline-block gap-8 justify-evenly md:grow">
          <span className="md:block font-semibold">
            {userInfo.twubric.chirpiness}
          </span>
          <p>Chirpiness</p>
        </div>
      </div>
      <div className="text-xs flex flex-col gap-2 sm:flex-row sm:gap-0 p-3 items-center justify-between">
        <p>
          {new Date(userInfo.join_date * 1000).toLocaleDateString('en-us', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </p>
        <RemoveUser uid={userInfo.uid} />
      </div>
    </div>
  );
}

export default Card;
