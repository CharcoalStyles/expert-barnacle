import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";

export const LoginButton = () => {
  const { data: session } = useSession();

  return session ? (
    <Button onClick={() => signOut()}>Logout</Button>
  ) : (
    <Button onClick={() => signIn()}>Login</Button>
  );
};
