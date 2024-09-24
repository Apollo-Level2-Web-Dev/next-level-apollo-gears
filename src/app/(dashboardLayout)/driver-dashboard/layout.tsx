import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function DriverDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Driver Dashboard Sidebar
      {children}
    </div>
  );
}
