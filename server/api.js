const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const os = require('os');
const disk = require('node-disk-info');

// Middleware pour activer les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api/node-version', (req, res) => {
  res.json({ version: process.version });
  console.log("Requested node version: " + process.version);
});

app.get('/api/npm-version', (req, res) => {
  const { exec } = require('child_process');
  exec('npm -v', (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.send({ version: stdout.trim() });
    }
  });
});
app.get('/api/system-info', (req, res) => {
  const systemInfo = {
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    uptime: os.uptime(),
    loadAverage: os.loadavg(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces(),
    model: os.cpus()[0].model, // modèle de CPU
    ram: (os.totalmem() / (1024 * 1024)).toFixed(2) + " MB", // RAM installée en Mo
    storage: {
      total: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB", // espace total de stockage en Go
      free: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB" // espace libre de stockage en Go
    }
  };
  res.json(systemInfo);
});

app.get('/api/angular-version', (req, res) => {
  const packageJson = require('../package.json');
  res.send({ version: packageJson.dependencies['@angular/core'] });
});

app.get('/api/folders', (req, res) => {
  const disks = disk.getDiskInfoSync();
  const disk0 = disks[0];
  let totalSpaceInGigabytes = 0;
  let freeSpaceInGigabytes = 0
  let diskName = ""
  if (disks.length > 0) {
    totalSpaceInGigabytes = (disk0.blocks / (1024 * 1024 * 1024)).toFixed(2);
    freeSpaceInGigabytes = (disk0.available / (1024 * 1024 * 1024)).toFixed(2);
  }
  const websiteFolderPath = "C:\\Users\\mandi\\Pictures\\website";

  const websiteFolderSizeInBytes = folderSize(websiteFolderPath);
  const websiteFolderSizeInMegabytes = websiteFolderSizeInBytes / (1024 * 1024);
  const websiteFolderSizeInGigabytes = websiteFolderSizeInMegabytes / 1024;
  const directories = largeDirectories(websiteFolderPath);
  res.json({
    totalSizeInBytes: websiteFolderSizeInBytes,
    totalSizeInMegabytes: websiteFolderSizeInMegabytes,
    totalSizeInGigabytes: websiteFolderSizeInGigabytes,
    directories: directories,
    diskName: disk0.mounted,
    diskCapacity: totalSpaceInGigabytes,
    freeSpace: freeSpaceInGigabytes
  });

  // Fonction pour calculer la taille d'un dossier
  function folderSize(folderPath) {
    let totalSize = 0;
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isFile()) {
        totalSize += stats.size;
      } else if (stats.isDirectory() && !/(^|\/)\.[^\/\.]/g.test(filePath)) { // ne pas inclure les dossiers cachés
        totalSize += folderSize(filePath);
      }
    }
    return totalSize;
  }

  // Fonction pour trouver les dossiers "gros"
  function largeDirectories(folderPath) {
    const directories = [];
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory() && !/(^|\/)\.[^\/\.]/g.test(filePath)) { // ne pas inclure les dossiers cachés
        const dirSize = folderSize(filePath);
        if (dirSize > 0) {
          directories.push({ name: file, size: dirSize });
        }
      }
    }
    return directories.sort((a, b) => b.size - a.size);
  }
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
