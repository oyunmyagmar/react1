export const Nav = (props) => {
  return (
    <div className="flex place-content-between py-4 px-12">
      <h5 className="font-bold text-lg">{props.name}</h5>
      <div className="flex gap-6 text-sm">
        <a href="https://www.google.com/">{props.home}</a>
        <a href="https://www.google.com/">{props.about}</a>
        <a href="https://www.google.com/">{props.contact}</a>
      </div>
    </div>
  );
};
