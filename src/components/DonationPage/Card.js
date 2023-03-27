import React from 'react';

function Card({ fullName, item, quantity, location, img, email, user, onDelete, onUpdate, onTake }) {
  const isOwnedByCurrentUser = user && email === user.email;

  return (
    <div className="card">
      <img src={img} alt={item} />
      <h2>{fullName}</h2>
      <p>{item}</p>
      <p>{quantity}</p>
      <p>{location}</p>
      {isOwnedByCurrentUser ? (
        <div>
          <button onClick={onUpdate}>Update</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      ) : (
        <button onClick={onTake}>Take</button>
      )}
    </div>
  );
}

export default Card;