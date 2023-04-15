import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nodeVersion = "unknown"; // Valeur par défaut
  npmVersion = "unknown"; //
  angularVersion = "unknown"; // Valeur par défaut
  hostname = '';
  type = '';
  platform = '';
  arch = '';
  release = '';
  uptime = 0;
  loadAverage = '';
  totalMemory = ""
  diskCapacity = 0
  diskName= "unknown"
  freeMemory = ""
  freeSpace = 0
  totalSpaceInBytes = 0;
  totalSpaceInGigabytes = 0;
  freeSpaceInBytes = 0;
  freeSpaceInGigabytes = 0;
  diskDiff = 0
  totalRAMInBytes = 0;
  totalRAMInGigabytes = 0;
  freeRAMInBytes = 0;
  freeRAMInGigabytes = 0;
  model=""
  websiteFolderSizeInBytes = 0; // Ajout de la propriété pour stocker la taille du dossier en bytes
  websiteFolderSizeInMegabytes = 0;
  websiteFolderSizeInGigabytes = 0;
  directories: any[] = []; // Initialisation de la propriété directories à un tableau vide

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    try {
      this.http.get('http://localhost:3000/api/node-version').subscribe((response: any) => {
        this.nodeVersion = response.version;
      });
      this.http.get('http://localhost:3000/api/npm-version').subscribe((response: any) => {
        this.npmVersion = response.version;
      });
      this.http.get('http://localhost:3000/api/angular-version').subscribe((response: any) => {
        this.angularVersion = response.version;
      });
      this.http.get('http://localhost:3000/api/folders').subscribe((response: any) => {
        // this.websiteFolderSizeInBytes = response.totalSizeInBytes;
        this.websiteFolderSizeInMegabytes = response.totalSizeInMegabytes
        this.diskName = response.diskName;
        this.diskCapacity = response.diskCapacity;
        this.freeSpace = response.freeSpace;
        this.websiteFolderSizeInGigabytes = response.totalSizeInGigabytes
        this.diskDiff = (response.totalSizeInGigabytes / response.diskCapacity) *100
        this.directories = response.directories.filter((dir: any) => dir.size > 0).sort((a: any, b: any) => b.size - a.size);
      });
      this.http.get('http://localhost:3000/api/system-info').subscribe((info: any) => {
        this.hostname = info.hostname;
        this.type = info.type;
        this.platform = info.platform;
        this.arch = info.arch;
        this.release = info.release;
        this.uptime = info.uptime;
        this.model = info.model;
        this.loadAverage = info.loadAverage.join(', ');
        this.totalMemory = (parseInt(info.totalMemory) / (1024 * 1024 * 1024)).toFixed(2);
        this.freeMemory = (parseInt(info.freeMemory) / (1024 * 1024 * 1024)).toFixed(2);
        // this.totalSpaceInBytes = parseFloat(info.storage.total);
        // this.totalSpaceInGigabytes = (this.totalSpaceInBytes / (1024 * 1024 * 1024)).toFixed(2);
        // this.freeSpaceInBytes = parseFloat(info.storage.free);
        // this.freeSpaceInGigabytes = (this.freeSpaceInBytes / (1024 * 1024 * 1024)).toFixed(2);
        // this.totalRAMInBytes = parseFloat(info.ram.total);
        // this.totalRAMInGigabytes = (this.totalRAMInBytes / (1024 * 1024 * 1024)).toFixed(2);
        // this.freeRAMInBytes = parseFloat(info.ram.free);
        // this.freeRAMInGigabytes = (this.freeRAMInBytes / (1024 * 1024 * 1024)).toFixed(2);
      });
      
    } catch (error) {
      console.error(error);
    }
  }
}
