import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      User Dashboard Sidebar
      {children}
    </div>
  );
}
