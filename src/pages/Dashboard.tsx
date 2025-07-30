import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  TrendingUp,
  AlertTriangle,
  Phone,
  Calendar,
  Activity,
  FileText,
  Plus
} from "lucide-react";

const Dashboard = () => {
  const statsCards = [
    {
      title: "Total Patients",
      value: "1,234",
      description: "Active in system",
      icon: Users,
      trend: "+12%",
      color: "primary"
    },
    {
      title: "Adherence Rate",
      value: "87.5%",
      description: "This month",
      icon: TrendingUp,
      trend: "+5.2%",
      color: "success"
    },
    {
      title: "Critical Alerts",
      value: "23",
      description: "Requiring attention",
      icon: AlertTriangle,
      trend: "-8%",
      color: "warning"
    },
    {
      title: "Voice Calls Today",
      value: "456",
      description: "Reminders sent",
      icon: Phone,
      trend: "+15%",
      color: "primary"
    }
  ];

  const recentPatients = [
    { name: "John Doe", age: 68, status: "On Track", adherence: 95, lastCall: "2 hours ago" },
    { name: "Mary Smith", age: 72, status: "Warning", adherence: 65, lastCall: "5 hours ago" },
    { name: "Robert Johnson", age: 55, status: "Critical", adherence: 45, lastCall: "1 day ago" },
    { name: "Alice Brown", age: 78, status: "On Track", adherence: 92, lastCall: "1 hour ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track": return "success";
      case "Warning": return "warning";
      case "Critical": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hospital Dashboard</h1>
          <p className="text-muted-foreground">Monitor patient medication adherence and system performance</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="shadow-card border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {stat.trend}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Patients */}
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Patient Activity
            </CardTitle>
            <CardDescription>Patients requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">Age {patient.age} • {patient.adherence}% adherence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{patient.lastCall}</span>
                    <Badge variant={getStatusColor(patient.status) as any}>
                      {patient.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Patients
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Users className="w-4 h-4" />
              Add New Patient
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Reminders
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Phone className="w-4 h-4" />
              View Call Logs
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <FileText className="w-4 h-4" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            System Health
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-success-soft rounded-lg">
              <div className="text-2xl font-bold text-success">99.9%</div>
              <div className="text-sm text-success">Uptime</div>
            </div>
            <div className="text-center p-4 bg-primary-soft rounded-lg">
              <div className="text-2xl font-bold text-primary">2.3s</div>
              <div className="text-sm text-primary">Avg Response</div>
            </div>
            <div className="text-center p-4 bg-success-soft rounded-lg">
              <div className="text-2xl font-bold text-success">98.5%</div>
              <div className="text-sm text-success">Call Success</div>
            </div>
            <div className="text-center p-4 bg-warning-soft rounded-lg">
              <div className="text-2xl font-bold text-warning">5</div>
              <div className="text-sm text-warning">Pending Issues</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;