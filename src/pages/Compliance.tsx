import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  FileText,
  Download,
  Eye,
  Lock,
  AlertTriangle,
  CheckCircle,
  Calendar,
  User,
  Database,
  Phone
} from "lucide-react";

const Compliance = () => {
  const consentLogs = [
    {
      patient: "John Doe",
      type: "Voice Call Consent",
      status: "granted",
      date: "2024-01-15 09:30",
      expiry: "2025-01-15",
      version: "v2.1"
    },
    {
      patient: "Mary Smith",
      type: "Data Processing Consent",
      status: "granted",
      date: "2024-01-14 14:20",
      expiry: "2025-01-14",
      version: "v2.1"
    },
    {
      patient: "Robert Johnson",
      type: "WhatsApp Communication",
      status: "pending",
      date: "2024-01-16 11:45",
      expiry: "Pending",
      version: "v2.1"
    }
  ];

  const dataAccess = [
    {
      user: "Dr. Sarah Wilson",
      action: "Patient Data Access",
      patient: "John Doe",
      timestamp: "2024-01-16 10:30",
      ip: "192.168.1.100",
      purpose: "Medication Review"
    },
    {
      user: "Nurse Jennifer",
      action: "Call Log Access",
      patient: "Mary Smith",
      timestamp: "2024-01-16 09:15",
      ip: "192.168.1.101",
      purpose: "Follow-up Call"
    },
    {
      user: "Admin Kumar",
      action: "Bulk Export",
      patient: "Multiple (25 patients)",
      timestamp: "2024-01-15 16:45",
      ip: "192.168.1.102",
      purpose: "Compliance Report"
    }
  ];

  const complianceMetrics = [
    { metric: "DPDP Act Compliance", status: "compliant", score: "98%" },
    { metric: "Data Encryption", status: "active", score: "AES-256" },
    { metric: "Consent Coverage", status: "compliant", score: "96%" },
    { metric: "Audit Trail", status: "active", score: "100%" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "granted":
      case "compliant":
      case "active":
        return <Badge className="bg-success text-success-foreground">✓ {status}</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">⏳ Pending</Badge>;
      case "expired":
        return <Badge className="bg-destructive text-destructive-foreground">⚠ Expired</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Compliance & Privacy</h1>
          <p className="text-muted-foreground">Data protection compliance and audit trails</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Audit Log
          </Button>
          <Button className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {complianceMetrics.map((metric, index) => (
          <Card key={index} className="shadow-card border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Shield className="w-5 h-5 text-primary" />
                {getStatusBadge(metric.status)}
              </div>
              <div>
                <p className="font-medium">{metric.metric}</p>
                <p className="text-2xl font-bold text-primary">{metric.score}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="consent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="consent">Consent Management</TabsTrigger>
          <TabsTrigger value="access">Access Logs</TabsTrigger>
          <TabsTrigger value="privacy">Privacy Controls</TabsTrigger>
          <TabsTrigger value="reports">Compliance Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="consent" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Patient Consent Archive
              </CardTitle>
              <CardDescription>Track and manage patient consent for data processing and communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {consentLogs.map((consent, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-soft rounded-full">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{consent.patient}</p>
                        <p className="text-sm text-muted-foreground">{consent.type}</p>
                        <p className="text-xs text-muted-foreground">Version {consent.version} • Granted on {consent.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right hidden md:block">
                        <p className="text-sm">Expires: {consent.expiry}</p>
                      </div>
                      {getStatusBadge(consent.status)}
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-soft rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-primary">DPDP Act 2023 Compliance</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      All consents are collected in accordance with the Digital Personal Data Protection Act 2023. 
                      Patients can withdraw consent at any time by contacting the Data Protection Officer.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="access" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Data Access Audit Trail
              </CardTitle>
              <CardDescription>Complete log of all data access and modifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataAccess.map((access, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-soft rounded-full">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{access.user}</p>
                        <p className="text-sm text-muted-foreground">{access.action}</p>
                        <p className="text-xs text-muted-foreground">Patient: {access.patient}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{access.timestamp}</p>
                      <p className="text-xs text-muted-foreground">{access.ip}</p>
                      <p className="text-xs text-muted-foreground">Purpose: {access.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Data Encryption
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-success-soft rounded">
                  <span>Database Encryption</span>
                  <Badge className="bg-success text-success-foreground">AES-256 ✓</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success-soft rounded">
                  <span>Data in Transit</span>
                  <Badge className="bg-success text-success-foreground">TLS 1.3 ✓</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success-soft rounded">
                  <span>Voice Recordings</span>
                  <Badge className="bg-success text-success-foreground">Encrypted ✓</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success-soft rounded">
                  <span>API Communications</span>
                  <Badge className="bg-success text-success-foreground">Secured ✓</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Data Protection Officer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Contact DPO</h4>
                  <p className="text-sm text-muted-foreground">For data protection queries and incident reporting</p>
                  <div className="mt-3 space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact DPO
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Report Incident
                    </Button>
                  </div>
                </div>
                
                <div className="p-3 bg-warning-soft rounded border">
                  <p className="text-sm">
                    <strong>Patient Rights:</strong> Patients can request data access, correction, or deletion 
                    by contacting the DPO within 30 days as per DPDP Act 2023.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Compliance Reports
              </CardTitle>
              <CardDescription>Generate detailed compliance and audit reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium">Monthly Report</h4>
                  <p className="text-sm text-muted-foreground mb-3">Comprehensive monthly compliance summary</p>
                  <Button size="sm" className="w-full">Generate</Button>
                </div>
                
                <div className="p-4 border rounded-lg text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium">Audit Trail</h4>
                  <p className="text-sm text-muted-foreground mb-3">Complete data access and modification log</p>
                  <Button size="sm" className="w-full">Download</Button>
                </div>
                
                <div className="p-4 border rounded-lg text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium">Consent Report</h4>
                  <p className="text-sm text-muted-foreground mb-3">Patient consent status and renewals</p>
                  <Button size="sm" className="w-full">Export</Button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge className="bg-success text-success-foreground">✓ GDPR</Badge>
                  <Badge className="bg-success text-success-foreground">✓ DPDP Act 2023</Badge>
                  <Badge className="bg-success text-success-foreground">✓ HIPAA Ready</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  All reports are generated in compliance with international data protection standards.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Compliance;