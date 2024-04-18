import { HajaItem } from "@/models/haja";

const List = ({ haja }: { haja: HajaItem[] }) => {
  return (
    <div>
      <h2>하자 목록</h2>
      {haja?.map((h, i) => (
        <div key={i}>
          <span>
            {i + 1}
            {")"}
          </span>
          <span>{h?.index} : </span>
          <span>{h?.description}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
