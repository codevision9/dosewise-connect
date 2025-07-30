import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Upload,
  FileText,
  User,
  Phone,
  Calendar,
  Pill,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Languages,
  Camera
} from "lucide-react";

const PatientOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    emergencyContact: "",
    language: "",
    consent: false,
    prescriptionUploaded: false
  });

  const steps = [
    { id: 1, title: "Basic Information", icon: User },
    { id: 2, title: "Upload Prescription", icon: Upload },
    { id: 3, title: "Review & Confirm", icon: CheckCircle },
    { id: 4, title: "Consent & Preferences", icon: FileText }
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "ta", name: "Tamil", flag: "🇮🇳" },
    { code: "te", name: "Telugu", flag: "🇮🇳" },
    { code: "bn", name: "Bengali", flag: "🇮🇳" },
    { code: "mr", name: "Marathi", flag: "🇮🇳" }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Patient enrolled:", formData);
    // Handle enrollment logic here
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter patient's full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Age"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency">Emergency Contact</Label>
                <Input
                  id="emergency"
                  placeholder="Emergency contact number"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Preferred Language *</Label>
              <Select value={formData.language} onValueChange={(value) => setFormData({...formData, language: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred language for voice calls" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-primary rounded-lg p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Upload Prescription</h3>
                  <p className="text-muted-foreground">Upload a clear photo or PDF of the prescription</p>
                </div>
                <div className="flex gap-3">
                  <Button className="flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Upload File
                  </Button>
                </div>
              </div>
            </div>
            
            {formData.prescriptionUploaded && (
              <Card className="border border-success bg-success-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium text-success">Prescription uploaded successfully</p>
                      <p className="text-sm text-success/80">OCR processing will extract medication details</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="bg-primary-soft p-4 rounded-lg">
              <h4 className="font-medium mb-2">📋 Tips for best results:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Ensure good lighting and clear text</li>
                <li>• Include all medication names and dosages</li>
                <li>• Make sure the doctor's signature is visible</li>
                <li>• Avoid shadows or reflections</li>
              </ul>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="font-semibold mb-3">📋 Extracted Medication Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-card rounded border">
                  <div className="flex items-center gap-3">
                    <Pill className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Metformin 500mg</p>
                      <p className="text-sm text-muted-foreground">Twice daily with meals</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Morning & Evening</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card rounded border">
                  <div className="flex items-center gap-3">
                    <Pill className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Lisinopril 10mg</p>
                      <p className="text-sm text-muted-foreground">Once daily</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Morning</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card rounded border">
                  <div className="flex items-center gap-3">
                    <Pill className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Aspirin 81mg</p>
                      <p className="text-sm text-muted-foreground">Once daily with food</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Evening</Badge>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Proposed Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-primary-soft rounded-lg">
                    <div className="text-lg">🌅</div>
                    <div className="font-medium">Morning</div>
                    <div className="text-sm text-muted-foreground">8:00 AM</div>
                  </div>
                  <div className="text-center p-3 bg-primary-soft rounded-lg">
                    <div className="text-lg">☀️</div>
                    <div className="font-medium">Afternoon</div>
                    <div className="text-sm text-muted-foreground">2:00 PM</div>
                  </div>
                  <div className="text-center p-3 bg-primary-soft rounded-lg">
                    <div className="text-lg">🌙</div>
                    <div className="font-medium">Evening</div>
                    <div className="text-sm text-muted-foreground">8:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5" />
                  Voice Call Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Selected Language</Label>
                  <div className="mt-2 p-3 bg-primary-soft rounded border">
                    {languages.find(l => l.code === formData.language)?.flag} {languages.find(l => l.code === formData.language)?.name}
                  </div>
                </div>
                
                <div>
                  <Label>Voice Preview</Label>
                  <div className="mt-2 p-4 bg-accent rounded border">
                    <p className="text-sm italic">
                      "Hello {formData.name}, this is a reminder from [Hospital Name] to take your morning medication: Metformin 500mg. Please confirm when you have taken it."
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Phone className="w-4 h-4 mr-2" />
                      Play Sample
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consent & Privacy</CardTitle>
                <CardDescription>Please review and agree to the terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="consent" className="text-sm font-medium">
                      I consent to receive voice call reminders
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      I agree to receive automated voice calls for medication reminders and understand that my health data will be processed according to DPDP Act 2023 and hospital privacy policy.
                    </p>
                  </div>
                </div>
                
                <div className="p-3 bg-accent rounded border text-xs text-muted-foreground">
                  🔒 Your data is encrypted and stored securely. We comply with DPDP Act 2023 and healthcare data protection standards. You can withdraw consent at any time.
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Patient Onboarding</h1>
        <p className="text-muted-foreground">Add a new patient to the medication adherence system</p>
      </div>

      {/* Progress Steps */}
      <Card className="shadow-card border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  currentStep >= step.id 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'border-border text-muted-foreground'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <div className="ml-3 hidden md:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="ml-6 w-12 md:w-24 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle>{steps[currentStep - 1]?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>
        
        {currentStep < steps.length ? (
          <Button onClick={handleNext} className="flex items-center gap-2">
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Enroll Patient
          </Button>
        )}
      </div>
    </div>
  );
};

export default PatientOnboarding;