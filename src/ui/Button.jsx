/*eslint-disable react/prop-types */

function Button({ id, type, onClick, children }) {
  const base = 'grow py-3';
  const classes = {
    sort: base + '',
    remove: 'text-white text-sm rounded-full bg-red-600 py-2 px-4',
  };

  if (type === 'remove')
    return (
      <button className={classes[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button className={classes.sort} onClick={onClick} id={id}>
      {children}
    </button>
  );
}

export default Button;
