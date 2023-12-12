const Name = ({ title, profile }) => {
  return (
    <div className="text-black text-[3rem] font-bold text-center w-[100vw]">
      <h1>{title}</h1>
      {profile.map((profil) => {
        return (
          <div className="top-[2rem]" key={profil.id}>
            <h1 className="font-semibold">{profil.nama}</h1>
            <p className="font-medium text-[1.5rem]">{profil.profesi}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Name;
