const Table = ({ labels = [], data = [] }) => {
  return (
    <div className="border rounded-2xl p-4 bg-white w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            {labels.map((col) => (
              <th
                key={col.key}
                className={`py-2 px-3 text-sm font-semibold ${col.width || ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="cursor-pointer hover:bg-gray-100 transition"
            >
              {labels.map((col) => (
                <td
                  key={col.key}
                  className={`py-2 px-3 border-b text-sm ${col.width || ""}`}
                >
                  {col.accion ? col.accion(item) : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
