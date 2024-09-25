import type { Metadata } from "next";
import { AdminLayout } from "./layout/adminLayout";

export const metadata: Metadata = {
  title: "Dashboard - Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
     <AdminLayout>
      {children}
     </AdminLayout>
    </div>
  );
}
