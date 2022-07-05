import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
<div
    style={{
      width: "full",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "48px",
    }}
  >
     user id: {userId}
  </div>
  )

};

export default User;
