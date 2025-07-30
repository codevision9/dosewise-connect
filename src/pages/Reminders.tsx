import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Clock,
  Pill,
  Calendar,
  User,
  Save,
  Play,
  Edit,
  Trash2,
  Volume2,
  Settings
} from "lucide-react";

const Reminders = () => {
  const [selectedPatient, setSelectedPatient] = useState("");
  
  const patients = [
    { id: 1, name: "John Doe", medications: 3 },
    { id: 2, name: "Mary Smith", medications: 2 },
    { id: 3, name: "Robert Johnson", medications: 4 },
    { id: 4, name: "Alice Brown", medications: 2 }
  ];

  const schedules = [
    {
      id: 1,
      patient: "John Doe",
      medication: "Metformin 500mg",
      times: ["08:00", "20:00"],
      frequency: "Twice daily",
      active: true,
      nextCall: "Today 8:00 PM"
    },
    {
      id: 2,
      patient: "John Doe",
      medication: "Lisinopril 10mg",
      times: ["08:00"],
      frequency: "Once daily",
      active: true,
      nextCall: "Tomorrow 8:00 AM"
    },
    {
      id: 3,
      patient: "Mary Smith",
      medication: "Aspirin 81mg",
      times: ["20:00"],
      frequency: "Once daily",
      active: false,
      nextCall: "Paused"
    }
  ];

  const voicePreview = "Hello John, this is a reminder from City Hospital to take your evening medication: Metformin 500mg. Please confirm when you have taken it by pressing 1.";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reminder Engine</h1>
          <p className="text-muted-foreground">Manage automated medication reminder schedules</p>
        </div>
        <Button className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Create Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Schedule Configuration */}
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Schedule Configuration
            </CardTitle>
            <CardDescription>Set up medication reminder times and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patient">Select Patient</Label>
                <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a patient" />
                  </SelectTrigger>
                  <SelectContent>
                    {patients.map((patient) => (
                      <SelectItem key={patient.id} value={patient.name}>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{patient.name}</span>
                          <Badge variant="secondary" className="ml-2">
                            {patient.medications} meds
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="medication">Medication</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medication" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metformin">Metformin 500mg</SelectItem>
                    <SelectItem value="lisinopril">Lisinopril 10mg</SelectItem>
                    <SelectItem value="aspirin">Aspirin 81mg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Reminder Times</Label>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🌅</div>
                  <Label className="text-sm">Morning</Label>
                  <Input
                    type="time"
                    defaultValue="08:00"
                    className="mt-2"
                  />
                  <div className="flex items-center justify-center mt-2">
                    <Switch id="morning" />
                  </div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">☀️</div>
                  <Label className="text-sm">Afternoon</Label>
                  <Input
                    type="time"
                    defaultValue="14:00"
                    className="mt-2"
                  />
                  <div className="flex items-center justify-center mt-2">
                    <Switch id="afternoon" />
                  </div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🌙</div>
                  <Label className="text-sm">Evening</Label>
                  <Input
                    type="time"
                    defaultValue="20:00"
                    className="mt-2"
                  />
                  <div className="flex items-center justify-center mt-2">
                    <Switch id="evening" defaultChecked />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Schedule
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Test Call
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Voice Preview */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Voice Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-accent rounded-lg">
              <p className="text-sm italic mb-3">"{voicePreview}"</p>
              <Button size="sm" className="w-full flex items-center gap-2">
                <Play className="w-4 h-4" />
                Play Sample
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Language:</span>
                <Badge variant="secondary">English</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Voice Type:</span>
                <Badge variant="secondary">Female</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Duration:</span>
                <Badge variant="secondary">~30 seconds</Badge>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              Customize Voice
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Active Schedules */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Active Schedules
          </CardTitle>
          <CardDescription>Currently configured medication reminder schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-soft rounded-full">
                    <Pill className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{schedule.patient}</p>
                    <p className="text-sm text-muted-foreground">{schedule.medication}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {schedule.times.map((time, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {time}
                        </Badge>
                      ))}
                      <span className="text-xs text-muted-foreground">• {schedule.frequency}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right hidden md:block">
                    <p className="text-sm">Next Call</p>
                    <p className="text-xs text-muted-foreground">{schedule.nextCall}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch checked={schedule.active} />
                    <span className="text-sm">
                      {schedule.active ? "Active" : "Paused"}
                    </span>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reminders;