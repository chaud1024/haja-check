import { HajaItem } from "@/models/haja";

const List = ({ haja }: { haja: HajaItem[] }) => {
  return (
    <div>
      <h2>하자 목록</h2>
      {haja?.map((h, index) => (
        <div key={index}>
          <span>
            {index + 1}
            {")"}
          </span>
          <span>{h?.cate} : </span>
          <span>{h?.description}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
