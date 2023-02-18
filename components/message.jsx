export default function Message({
  children,
  avatar,
  username,
  description,
  id,
}) {
  return (
    <div className="bg-white p-5 border-b-2 rounded-lg my-5" key={id}>
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-8 rounded-full" />
        <h2 className="text-black">{username}</h2>
      </div>
      <div className="py-3">
        <p className="text-zinc-500 text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
}
