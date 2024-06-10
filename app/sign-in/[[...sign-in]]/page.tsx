import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid place-items-center pt-4">
      <SignIn
      // signUpFallbackRedirectUrl={"/sync-user"}
      // signUpForceRedirectUrl={"/sync-user"}
      // fallbackRedirectUrl={"/sync-user"}
      // forceRedirectUrl={"/sync-user"}
      />
    </main>
  );
}
