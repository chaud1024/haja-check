const House = () => {
  // const isLogin = await useUser
  return (
    <div>
      <div>
        <label htmlFor="">집 닉네임</label>
        <input type="text" placeholder="예) 우리집" />
      </div>
      <div>
        <label htmlFor="">집 닉네임</label>
        <input type="text" placeholder="예) 우리집" />
      </div>
      <div>
        <label htmlFor="">집 주소</label>
        <input type="text" placeholder="부산시 수영구 광안동" />
      </div>
      <div>
        <label htmlFor="">도면</label>
        <input type="file" />
      </div>
      <button>저장</button>
    </div>
  );
};

export default House;
