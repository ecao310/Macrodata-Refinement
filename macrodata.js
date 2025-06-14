// TODO: add more file names
const files = [
  'Welcome JiXin C.'
];

const emptyBins = [
  {WO: 0, FC: 0, DR: 0, MA: 0},
  {WO: 0, FC: 0, DR: 0, MA: 0},
  {WO: 0, FC: 0, DR: 0, MA: 0},
  {WO: 0, FC: 0, DR: 0, MA: 0},
  {WO: 0, FC: 0, DR: 0, MA: 0}
 ];

class MacrodataFile {
  constructor() {
    this.localStorageKey = 'macrodata';
    const file = JSON.parse(localStorage.getItem(this.localStorageKey)) ?? this.assignFile();
    this.fileName = file.fileName;
    this.storedBins = file.storedBins;
    this.coordinates = file.coordinates;
  }

  assignFile() {
    const fileName = files[Math.floor(Math.random() * files.length)];
    const coordinates = this.#generateCoordinates();
    console.log('assigning', fileName);
    const macrodata = {
      fileName,
      storedBins: emptyBins,
      coordinates
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(macrodata));
    return macrodata;
  }

  updateProgress(bins) {
    const updatedFile = {
      fileName: this.fileName,
      storedBins: bins,
      coordinates: this.coordinates
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedFile));
  }

  resetFile() {
    localStorage.removeItem(this.localStorageKey);
    const file = this.assignFile();
    this.fileName = file.fileName;
    this.storedBins = file.storedBins;
    this.coordinates = file.coordinates;
  }

  // private member fn to pick coordinates
  #generateCoordinates() {
    function randHex() {
      return floor(random(0, 256)).toString(16).toUpperCase();
    }
    let x = randHex() + randHex() + randHex();
    let y = randHex() + randHex() + randHex();
    
    return `0x${x} : 0x${y}`;
  }
}
