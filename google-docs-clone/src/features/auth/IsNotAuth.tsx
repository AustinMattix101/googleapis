import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IsNotAuthProps { }

const IsNotAuth: React.FC<IsNotAuthProps> = ({ children }: { children: React.ReactNode; }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  return <>{children}</>;
};

export default IsNotAuth;
