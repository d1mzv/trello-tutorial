import { UserButton, auth, currentUser } from "@clerk/nextjs";

const ProtectedPage = async () => {
  const user = await currentUser();
  const { userId } = auth();
  return (
    <div>
      <div>
        User: {user?.firstName}
        UserID: {userId}
      </div>
      <div>
        <UserButton
        afterSignOutUrl="/"
        />
      </div>
    </div>
  );
};

export default ProtectedPage;
