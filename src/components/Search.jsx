import { useHistory } from "react-router-dom";

const Search = ({ data, evento }) => {
  let history = useHistory();

  //console.log(data)

  function onClick(id) {
    history.push(`/sobre/${id}`);
  }

  function search(p) {
    return p.booktitle.toLowerCase().includes(evento.toLowerCase());
  }

  const result = data && data.filter(search);

  return (
    <div className="searchresult">
      {evento != "" && result && result.length > 0
        ? result.map((b) => {
            return (
              <li onClick={() => onClick(b.id)} className="searchitem">
                {b.booktitle}{" "}
              </li>
            );
          })
        : null}
    </div>
  );
};

export default Search;
