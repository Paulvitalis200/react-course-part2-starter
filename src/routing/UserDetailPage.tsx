import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // useSearchParams allows us to access and update quuery string params
  // query string params, second function ffor updating

  // We shouuld use this function only inside event handlers or an effect. This is bbecause it has a side effect. Our components sshould be  pure. They shouldn't have a sidefect

  console.log(params);
  console.log(searchParams.toString());
  console.log(searchParams.get("name"));

  const location = useLocation();

  console.log(location);

  return <p>User {params.id}</p>;
};

export default UserDetailPage;
