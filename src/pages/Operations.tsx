import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  Search,
  Filter,
  CheckCircle,
  AlertTriangle,
  XCircle,
  MessageSquare,
  Clock,
  User,
  Calendar,
  Download
} from "lucide-react";

const Operations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all");

  const callLogs = [
    {
      id: 1,
      patient: "John Doe",
      phone: "+91 9876543210",
      medication: "Metformin 500mg",
      time: "09:00 AM",
      status: "delivered",
      duration: "45s",
      language: "English",
      attempts: 1
    },
    {
      id: 2,
      patient: "Mary Smith",
      phone: "+91 9876543211",
      medication: "Lisinopril 10mg",
      time: "09:15 AM",
      status: "missed",
      duration: "0s",
      language: "Hindi",
      attempts: 3
    },
    {
      id: 3,
      patient: "Robert Johnson",
      phone: "+91 9876543212",
      medication: "Aspirin 81mg",
      time: "08:45 AM",
      status: "no-answer",
      duration: "0s",
      language: "English",
      attempts: 2
    },
    {
      id: 4,
      patient: "Alice Brown",
      phone: "+91 9876543213",
      medication: "Vitamin D 1000IU",
      time: "08:30 AM",
      status: "delivered",
      duration: "32s",
      language: "Tamil",
      attempts: 1
    }
  ];

  const whatsappQueue = [
    {
      patient: "Mary Smith",
      medication: "Lisinopril 10mg",
      reason: "Call failed after 3 attempts",
      time: "2 minutes ago"
    },
    {
      patient: "Robert Johnson",
      medication: "Aspirin 81mg",
      reason: "No answer",
      time: "15 minutes ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="w-4 h-4 text-success" />;
      case "missed": return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "no-answer": return <XCircle className="w-4 h-4 text-destructive" />;
      default: return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered": return <Badge variant="outline" className="text-success border-success">Delivered ✅</Badge>;
      case "missed": return <Badge variant="outline" className="text-warning border-warning">Missed ⚠️</Badge>;
      case "no-answer": return <Badge variant="outline" className="text-destructive border-destructive">No Answer ❌</Badge>;
      default: return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const filteredLogs = callLogs.filter(log => {
    const matchesSearch = log.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;
    const matchesLanguage = languageFilter === "all" || log.language.toLowerCase() === languageFilter;
    return matchesSearch && matchesStatus && matchesLanguage;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Live Operations</h1>
          <p className="text-muted-foreground">Monitor real-time call delivery and patient responses</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Logs
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Calls</p>
                <p className="text-2xl font-bold">456</p>
              </div>
              <Phone className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold text-success">87%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Failed Calls</p>
                <p className="text-2xl font-bold text-warning">34</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp Queue</p>
                <p className="text-2xl font-bold">{whatsappQueue.length}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="calls" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calls">Call Logs</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp Fallback</TabsTrigger>
          <TabsTrigger value="alerts">Critical Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="calls" className="space-y-4">
          {/* Filters */}
          <Card className="shadow-card border-0">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search by patient name or phone..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="missed">Missed</SelectItem>
                    <SelectItem value="no-answer">No Answer</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={languageFilter} onValueChange={setLanguageFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Call Logs Table */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Today's Call Log</CardTitle>
              <CardDescription>Real-time medication reminder call status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-soft rounded-full">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{log.patient}</p>
                        <p className="text-sm text-muted-foreground">{log.phone}</p>
                      </div>
                      <div className="hidden md:block">
                        <p className="text-sm font-medium">{log.medication}</p>
                        <p className="text-xs text-muted-foreground">{log.language}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden md:block">
                        <p className="text-sm">{log.time}</p>
                        <p className="text-xs text-muted-foreground">{log.duration} • {log.attempts} attempts</p>
                      </div>
                      {getStatusBadge(log.status)}
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Fallback Queue
              </CardTitle>
              <CardDescription>Patients who missed calls will receive WhatsApp messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {whatsappQueue.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-warning-soft">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-warning" />
                      <div>
                        <p className="font-medium">{item.patient}</p>
                        <p className="text-sm text-muted-foreground">{item.medication}</p>
                        <p className="text-xs text-warning">{item.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{item.time}</span>
                      <Button size="sm">Send WhatsApp</Button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 p-4 bg-accent rounded-lg">
                  <h4 className="font-medium mb-2">📱 WhatsApp Message Preview</h4>
                  <div className="bg-card p-3 rounded border text-sm">
                    <p><strong>🏥 [Hospital Name] Medication Reminder</strong></p>
                    <p>Hello Mary, you missed your call reminder. Please take your Lisinopril 10mg now.</p>
                    <p>Reply "TAKEN" when done or call us at +91-xxx-xxx-xxxx</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Critical Alerts
              </CardTitle>
              <CardDescription>Patients requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-destructive-soft">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <div>
                      <p className="font-medium">Critical: 3+ Missed Doses</p>
                      <p className="text-sm text-muted-foreground">Robert Johnson - Aspirin 81mg</p>
                      <p className="text-xs text-destructive">Last successful reminder: 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="destructive" size="sm">Contact Patient</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg bg-warning-soft">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium">Warning: Low Adherence</p>
                      <p className="text-sm text-muted-foreground">Mary Smith - 45% adherence this week</p>
                      <p className="text-xs text-warning">Requires intervention</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Schedule Call</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Operations;