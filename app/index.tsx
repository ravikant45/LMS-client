import Loader from "@/components/loader/loader";
import useUser from "@/hooks/auth/useUser";
import { Redirect } from "expo-router";

export default function Index() {
  const { loading, user } = useUser();

  if (loading) <Loader />;
  return <Redirect href={`${!user ? '/(routes)/onboarding' : '/(tabs)'}`} />;
}
