import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Building2,
  Phone,
  Globe,
  Users,
  Bell,
  Volume2,
  MessageSquare,
  Shield,
  Upload,
  Download,
  Save
} from "lucide-react";

const Settings = () => {
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸", available: true },
    { code: "hi", name: "Hindi", flag: "🇮🇳", available: true },
    { code: "ta", name: "Tamil", flag: "🇮🇳", available: true },
    { code: "te", name: "Telugu", flag: "🇮🇳", available: false },
    { code: "bn", name: "Bengali", flag: "🇮🇳", available: false },
    { code: "mr", name: "Marathi", flag: "🇮🇳", available: false }
  ];

  const admins = [
    { name: "Dr. Sarah Wilson", role: "Super Admin", email: "sarah@hospital.com", active: true },
    { name: "Nurse Jennifer", role: "Operator", email: "jennifer@hospital.com", active: true },
    { name: "Admin Kumar", role: "Data Manager", email: "kumar@hospital.com", active: false }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Configure hospital profile and system preferences</p>
        </div>
        <Button className="flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="hospital" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="hospital">Hospital</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="hospital" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Hospital Profile
              </CardTitle>
              <CardDescription>Configure hospital branding and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hospitalName">Hospital Name</Label>
                  <Input id="hospitalName" defaultValue="City General Hospital" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hospitalId">Hospital ID</Label>
                  <Input id="hospitalId" defaultValue="CGH-2024" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea 
                  id="address" 
                  defaultValue="123 Medical Center Drive, Healthcare District, Mumbai 400001"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Main Phone</Label>
                  <Input id="phone" defaultValue="+91 22 1234 5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency">Emergency Line</Label>
                  <Input id="emergency" defaultValue="+91 22 1234 5679" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Hospital Logo</Label>
                <div className="border-2 border-dashed border-primary rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Upload hospital logo for voice call branding</p>
                  <Button size="sm" className="mt-2">Choose File</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Hierarchy
              </CardTitle>
              <CardDescription>Configure the order and timing of patient reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Voice Call (Primary)</p>
                      <p className="text-sm text-muted-foreground">Automated voice reminder in patient's language</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">Retry: 3 times</span>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium">WhatsApp (Fallback)</p>
                      <p className="text-sm text-muted-foreground">Text message if call fails</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">Delay: 30 min</span>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium">SMS (Final)</p>
                      <p className="text-sm text-muted-foreground">Basic text reminder as last resort</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">Delay: 60 min</span>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary-soft rounded-lg">
                <h4 className="font-medium mb-2">⏰ Timing Configuration</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="callWindow">Call Window</Label>
                    <Select defaultValue="8-20">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8-20">8:00 AM - 8:00 PM</SelectItem>
                        <SelectItem value="9-21">9:00 AM - 9:00 PM</SelectItem>
                        <SelectItem value="7-19">7:00 AM - 7:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retryInterval">Retry Interval</Label>
                    <Select defaultValue="15">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="languages" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Multilingual Voice Packs
              </CardTitle>
              <CardDescription>Manage available languages for voice reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.code} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <p className="font-medium">{lang.name}</p>
                      <p className="text-sm text-muted-foreground">Voice pack for {lang.name} speakers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {lang.available ? (
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    ) : (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                    <Button 
                      size="sm" 
                      variant={lang.available ? "outline" : "default"}
                      disabled={!lang.available}
                    >
                      {lang.available ? "Test Voice" : "Request"}
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-accent rounded-lg">
                <h4 className="font-medium mb-2">🎙️ Voice Customization</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Each language pack includes male and female voice options with natural pronunciation
                </p>
                <Button size="sm" variant="outline">
                  Request New Language
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                User Management
              </CardTitle>
              <CardDescription>Manage admin users and their permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {admins.map((admin, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{admin.name}</p>
                      <p className="text-sm text-muted-foreground">{admin.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={admin.role === "Super Admin" ? "default" : "secondary"}>
                      {admin.role}
                    </Badge>
                    <Switch checked={admin.active} />
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                </div>
              ))}
              
              <Button className="w-full mt-4">
                <Users className="w-4 h-4 mr-2" />
                Add New User
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                System Configuration
              </CardTitle>
              <CardDescription>Advanced system settings and data management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Data Backup</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Automatic Backup</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Daily at 2:00 AM</span>
                      <Button size="sm" variant="outline">Configure</Button>
                    </div>
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Backup Now
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">System Logs</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Error Logging</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Debug Mode</span>
                      <Switch />
                    </div>
                    <Button size="sm" className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Logs
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-warning-soft rounded-lg border border-warning">
                <h4 className="font-medium text-warning mb-2">⚠️ Danger Zone</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  These actions cannot be undone. Please proceed with caution.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="destructive">Reset All Settings</Button>
                  <Button size="sm" variant="outline">Clear All Data</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;