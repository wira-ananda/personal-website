import Name from "./ProfileTest";
import useFetch from "./useFetch";

const Test = () => {
  const { Data: profile, error } = useFetch("http://localhost:8000/profile");

  return (
    <div>
      <div>
        {error && (
          <div className="text-center text-[2rem] font-medium">{error}</div>
        )}
        {profile && <Name profile={profile} title="Buku Nikah" />}
      </div>
    </div>
  );
};

export default Test;
