export const PostCard = (props) => {
  return (
    <div className="w-[350px] h-[505px] bg-black/5 rounded-xl ring-1 ring-gray-200">
      <img className="w-full h-[220px] pt-5" src={props.image} alt=""></img>
      <div className="p-5">
        <p className="text-sm">{props.date}</p>
        <h3 className="mt-3 text-lg font-bold">{props.title}</h3>
        <p className="mt-3 text-base">{props.description}</p>
        <button className="mt-4 bg-blue-500 w-full text-white rounded-sm text-sm py-1.5">
          {props.btnText}
        </button>
      </div>
    </div>
  );
};
