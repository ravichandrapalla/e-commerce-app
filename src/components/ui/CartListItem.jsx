export default function CartListItem({ item }) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <span className="text-lg font-bold">${item.price ?? "0"}</span>
    </div>
  );
}
