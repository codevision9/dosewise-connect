import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  UserPlus, 
  Calendar, 
  Phone, 
  Shield, 
  Settings,
  Pill,
  Activity
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Add Patient", url: "/onboarding", icon: UserPlus },
  { title: "Reminders", url: "/reminders", icon: Calendar },
  { title: "Live Operations", url: "/operations", icon: Phone },
  { title: "Compliance", url: "/compliance", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClass = (isActive: boolean) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive 
        ? "bg-primary text-primary-foreground" 
        : "hover:bg-accent text-foreground"
    }`;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-bold text-xl text-primary">Dosewise</h1>
              <p className="text-xs text-muted-foreground">Hospital Platform</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status indicator */}
        {!collapsed && (
          <div className="mt-auto p-3 bg-success-soft rounded-lg">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-success" />
              <span className="text-sm text-success font-medium">System Online</span>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}