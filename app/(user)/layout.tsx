import { checkAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "@/components/dashboard/sidebar";
import MenuIcon from "@/components/dashboard/menuIcon";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex flex-row">
        <div className="flex-none">
          <Navigation />
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div className="w-full max-w-4xl">{children}</div>
        </div>
      </div>

      <Toaster richColors />
    </main>
  );
}
