import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  links = [
    { title: 'Home', icon: 'bi-house-door', route: '/home' },
    { title: 'Dashboard', icon: 'bi-speedometer2', route: '/dashboard' },
    { title: 'Alarms', icon: 'bi-alarm', route: '/alarms' },
    { title: 'Reports', icon: 'bi-flag', route: '/reports' },
    { title: 'Settings', icon: 'bi-gear', route: '/settings' },
    { title: 'Profile', icon: 'bi-person-check', route: '/profile' },
    { title: 'Entities', icon: 'bi-house-door', route: '/home' },
    { title: 'Customers', icon: 'bi-speedometer2', route: '/dashboard' },
    { title: 'Users', icon: 'bi-alarm', route: '/alarms' },
    { title: 'Integrations', icon: 'bi-flag', route: '/reports' },
    { title: 'Management', icon: 'bi-gear', route: '/settings' },
    { title: 'Api Usage', icon: 'bi-person-check', route: '/profile' },
    { title: 'Security', icon: 'bi-speedometer2', route: '/dashboard' },
    { title: 'White Labeling', icon: 'bi-alarm', route: '/alarms' },
    { title: 'Resources', icon: 'bi-flag', route: '/reports' },
    { title: 'Features', icon: 'bi-gear', route: '/settings' },
    { title: 'Role Chains', icon: 'bi-person-check', route: '/profile' },
  ];
}