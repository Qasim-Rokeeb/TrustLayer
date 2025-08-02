import { Dashboard } from "@/components/dashboard";
import { Header } from "@/components/header";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container py-8">
        <Dashboard />
      </main>
    </div>
  );
}
