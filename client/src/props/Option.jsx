// eslint-disable-next-line react/prop-types
export default function Option({ id, name }) {
  return (
    <option value={name} key={id}>
      {name}
    </option>
  );
}
