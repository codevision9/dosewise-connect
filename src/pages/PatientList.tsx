import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  Filter,
  User,
  Phone,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Plus,
  Edit,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [adherenceFilter, setAdherenceFilter] = useState("all");

  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 68,
      phone: "+91 9876543210",
      medications: 3,
      adherence: 95,
      status: "active",
      lastContact: "2 hours ago",
      nextReminder: "Today 2:00 PM",
      riskLevel: "low"
    },
    {
      id: 2,
      name: "Mary Smith",
      age: 72,
      phone: "+91 9876543211",
      medications: 2,
      adherence: 65,
      status: "warning",
      lastContact: "5 hours ago",
      nextReminder: "Today 6:00 PM",
      riskLevel: "medium"
    },
    {
      id: 3,
      name: "Robert Johnson",
      age: 55,
      phone: "+91 9876543212",
      medications: 4,
      adherence: 45,
      status: "critical",
      lastContact: "1 day ago",
      nextReminder: "Missed",
      riskLevel: "high"
    },
    {
      id: 4,
      name: "Alice Brown",
      age: 78,
      phone: "+91 9876543213",
      medications: 2,
      adherence: 92,
      status: "active",
      lastContact: "1 hour ago",
      nextReminder: "Tomorrow 8:00 AM",
      riskLevel: "low"
    },
    {
      id: 5,
      name: "David Wilson",
      age: 63,
      phone: "+91 9876543214",
      medications: 3,
      adherence: 78,
      status: "active",
      lastContact: "3 hours ago",
      nextReminder: "Today 8:00 PM",
      riskLevel: "medium"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active": return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "warning": return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      case "critical": return <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>;
      default: return <Badge variant="secondary">Inactive</Badge>;
    }
  };

  const getAdherenceColor = (adherence: number) => {
    if (adherence >= 85) return "text-success";
    if (adherence >= 70) return "text-warning";
    return "text-destructive";
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low": return <Badge variant="outline" className="text-success border-success">Low Risk</Badge>;
      case "medium": return <Badge variant="outline" className="text-warning border-warning">Medium Risk</Badge>;
      case "high": return <Badge variant="outline" className="text-destructive border-destructive">High Risk</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter;
    const matchesAdherence = adherenceFilter === "all" || 
      (adherenceFilter === "high" && patient.adherence >= 85) ||
      (adherenceFilter === "medium" && patient.adherence >= 70 && patient.adherence < 85) ||
      (adherenceFilter === "low" && patient.adherence < 70);
    return matchesSearch && matchesStatus && matchesAdherence;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patient Management</h1>
          <p className="text-muted-foreground">Monitor and manage all patients in the system</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Patient
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Patients</p>
                <p className="text-2xl font-bold">{patients.length}</p>
              </div>
              <User className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Adherence</p>
                <p className="text-2xl font-bold text-success">
                  {patients.filter(p => p.adherence >= 85).length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Need Attention</p>
                <p className="text-2xl font-bold text-warning">
                  {patients.filter(p => p.status === "warning").length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Critical Cases</p>
                <p className="text-2xl font-bold text-destructive">
                  {patients.filter(p => p.status === "critical").length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <Select value={adherenceFilter} onValueChange={setAdherenceFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by adherence" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Adherence</SelectItem>
                <SelectItem value="high">High (≥85%)</SelectItem>
                <SelectItem value="medium">Medium (70-84%)</SelectItem>
                <SelectItem value="low">Low (&lt;70%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Patient Table */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle>Patient List</CardTitle>
          <CardDescription>Manage patient information and medication adherence</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-soft rounded-full">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-lg">{patient.name}</p>
                      {getStatusBadge(patient.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Age {patient.age}</span>
                      <span>{patient.phone}</span>
                      <span>{patient.medications} medications</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center hidden md:block">
                    <p className="text-sm text-muted-foreground">Adherence</p>
                    <p className={`text-lg font-bold ${getAdherenceColor(patient.adherence)}`}>
                      {patient.adherence}%
                    </p>
                  </div>
                  
                  <div className="text-center hidden lg:block">
                    <p className="text-sm text-muted-foreground">Next Reminder</p>
                    <p className="text-sm">{patient.nextReminder}</p>
                  </div>
                  
                  <div className="hidden xl:block">
                    {getRiskBadge(patient.riskLevel)}
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Patient
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="w-4 h-4 mr-2" />
                        View Schedule
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View Analytics
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPatients.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No patients found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientList;