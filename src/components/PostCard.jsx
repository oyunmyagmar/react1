export const PostCard = (props) => {
  return (
    <div className="w-[350px]  bg-black/5 rounded-xl ring-1 ring-gray-200">
      <img className="w-full h-[220px] pt-5" src={props.image} alt=""></img>
      <div className="p-5">
        <p className="text-[12px]">{props.date}</p>
        <h3 className="mt-2 text-lg font-semibold">{props.title}</h3>
        <p className="mt-3.5 text-sm">{props.description}</p>
        <button className="mt-3 bg-blue-500 w-full text-white rounded-sm text-[12px] py-1">
          Read More
        </button>
      </div>
    </div>
  );
};
