/*eslint-disable react/prop-types */

function Button({ id, type, onClick, children }) {
  const base = 'grow py-3 ';
  const classes = {
    sort: base + 'hover:bg-gray-300 transition-all duration-200 ease-in',
    filter: 'py-2 px-4 border border-black',
    remove: 'text-white rounded-full bg-red-600 py-2 px-4',
    disabled: base + 'opacity-60',
  };

  if (type === 'remove') {
    return (
      <button className={classes[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  if (type === 'filter') {
    return (
      <button className={classes[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  if (type === 'disabled')
    return (
      <button className={classes[type]} disabled={true}>
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
