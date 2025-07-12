"use client";

// Corrija os imports abaixo se necessário, verifique se os caminhos estão corretos
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Moon, User, BarChart2, TrendingUp, Users, Calendar, Smile, Timer } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  // Exemplo de dados mockados
  const user = { name: "Dra. Camila", role: "admin", clinic: "Odonto Sorriso" };
  const kpis = [
    { label: "CAC médio", value: "R$ 120", icon: <TrendingUp className="text-blue-700" />, adminOnly: true },
    { label: "LTV médio", value: "R$ 2.500", icon: <BarChart2 className="text-blue-700" />, adminOnly: true },
    { label: "Ingresso mês", value: "R$ 18.000", icon: <BarChart2 className="text-blue-700" />, adminOnly: true },
    { label: "Utilidade mês", value: "R$ 7.200", icon: <TrendingUp className="text-blue-700" />, adminOnly: true },
    { label: "Leads semana", value: "34", icon: <Users className="text-blue-700" /> },
    { label: "Citas hoje", value: "12", icon: <Calendar className="text-blue-700" /> },
    { label: "NPS atual", value: "89", icon: <Smile className="text-blue-700" /> },
    { label: "Tempo/etapa", value: "2d 4h", icon: <Timer className="text-blue-700" /> },
  ];

  // Light/Dark mode (simples)
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-slate-900 text-slate-100 min-h-screen" : "bg-[#F8F9FA] text-gray-800 min-h-screen"}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-slate-200 bg-white shadow-sm">
        <div className="font-bold text-lg">{user.clinic}</div>
        <div className="flex items-center gap-4">
          <span>Buenos días, {user.name}</span>
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button variant="outline" size="icon">
            <User />
          </Button>
        </div>
      </header>

      {/* Main */}
      <main className="p-8 flex flex-col gap-8">
        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kpis
            .filter(kpi => user.role === "admin" || !kpi.adminOnly)
            .map((kpi, i) => (
              <Card key={i} className="shadow-sm border border-[#E5E7EB] bg-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  {kpi.icon}
                  <CardTitle className="text-base">{kpi.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-2xl font-bold">{kpi.value}</span>
                </CardContent>
              </Card>
            ))}
        </section>

        {/* Aqui você pode adicionar os outros blocos: Funil, Alertas, Ações rápidas, etc. */}
        <section>
          <Card className="bg-[#EAF0F6] border-0">
            <CardContent>
              <span className="text-blue-700 font-semibold">[Mini Funil, Alertas, Ações rápidas, etc. vão aqui]</span>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}