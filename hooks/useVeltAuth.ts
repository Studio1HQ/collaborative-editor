import { useUser } from "@auth0/nextjs-auth0";
import { useIdentify } from "@veltdev/react";

export default function useVeltAuth() {
  const { user: auth0User } = useUser();

  const veltUser = auth0User
    ? {
        userId: auth0User.sub || "",
        name: auth0User.name || "",
        email: auth0User.email || "",
        photoUrl: auth0User.picture || "",
        organizationId: "collaborative-editor",
        color: "#FF0000",
        textColor: "#FFFFFF",
      }
    : null;

  useIdentify(veltUser);

  if (!auth0User) return;
}
