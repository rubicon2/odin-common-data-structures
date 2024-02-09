export default function isEqual(a, b) {
  // If we have a number or string
  // But if one side of comparison is null, i.e. an object, it will skip this...
  if (typeof a !== 'object' && typeof b !== 'object') return a === b;

  // Need special case for null since it is, for some reason, of type 'object'
  if (a === null || b === null) return a === b;

  // Otherwise iterate through and see if object is the same
  const uniqueKeys = Array.from(
    new Set([...Object.keys(a), ...Object.keys(b)]),
  );

  for (let i = 0; i < uniqueKeys.length; i += 1) {
    const key = uniqueKeys[i];
    // If one object has a key and the other doesn't, they cannot be equal
    if (a[key] === undefined || b[key] === undefined) return false;
    // Recursively check the values - could have objects nested within objects
    // This method will not work with something like a doubly linked list - would incur too much recursion
    if (!isEqual(a[key], b[key])) return false;
  }

  // If nothing has already returned false, then a and b must be equal
  return true;
}
