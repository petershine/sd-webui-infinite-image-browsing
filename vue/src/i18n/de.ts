import type { IIBI18nMap } from '.'

export const de: Partial<IIBI18nMap> = {
  serverKeyRequired:
    'Für die weitere Nutzung ist die Eingabe eines Schlüssels erforderlich, der vom Server konfiguriert wurde.',
  removeFromSearchScanPathAndQuickMove: 'Schnellzugriff entfernen',
  addToSearchScanPathAndQuickMove: 'Schnellzugriff hinzufügen',
  openWithLocalFileBrowser: 'Im lokalen Dateimanager öffnen',
  'fuzzy-search-noResults': 'Es wurde nichts gefunden',
  'fuzzy-search-placeholder':
    'Geben Sie einen Teil der Bildinformationen oder des Dateinamens ein, um passende Ergebnisse zu finden',
  'fuzzy-search': 'Schnellsuche',
  autoUpdate: 'Erkannte Änderungen, automatische Aktualisierung wird ausgeführt',
  faq: 'FAQ',
  selectExactMatchTag: 'Wähle Tags für exakte Übereinstimmung aus',
  selectAnyMatchTag: '(Optional) Wähle Tags für beliebige Übereinstimmung aus',
  selectExcludeTag: '(Optional) Wähle Tags zum Ausschliessen aus',
  exactMatch: 'Exakte Übereinstimmung',
  anyMatch: 'Beliebige Übereinstimmung',
  exclude: 'Ausschliessen',
  'auto.refreshed': 'Automatische Aktualisierung erfolgreich durchgeführt!',
  copied: 'In die Zwischenablage kopiert!',
  'index.expired': 'Index abgelaufen, automatische Aktualisierung wird durchgeführt',
  manualExitFullScreen:
    'Du hast das letzte Bild gelöscht und musst möglicherweise manuell den Vollbild-Vorschaumodus beenden',
  'walk-mode-move-message':
    'Im Walk-Modus ist das Verschieben des Verzeichnisses nur über \'Schnellzugriff\' gestattet',
  refreshCompleted: 'Aktualisierung erfolgreich abgeschlossen',
  addedTagToImage: 'Schlagwort wurde erfolgreich diesem Bild hinzugefügt',
  removedTagFromImage: 'Schlagwort wurde von diesem Bild entfernt',
  openContextMenu: 'Öffne das Kontextmenü',
  copyPrompt: 'Kopiere Prompt-Konfiguration',
  toggleTag: '(Favorite) Schlagwort hinzufügen/entfernen',
  addCompleted: 'Hinzufügen abgeschlossen',
  removeCompleted: 'Entfernen abgeschlossen',
  existInOtherType: 'Bereits in anderem Typ vorhanden',
  alreadyExists: 'Bereits vorhanden',
  cancel: 'Abbrechen',
  submit: 'Bestätigen',
  add: 'Hinzufügen',
  custom: 'Benutzerdefiniert',
  needGenerateIdx:
    'Klicken Sie auf die Schaltfläche, um einen Index zur Bildersuche zu generieren. \n Dieser Vorgang kann einige Minuten in Anspruch nehmen.',
  search: 'Suchen',
  UpdateIndex: 'Index aktualisieren',
  generateIndexHint: 'Index für die Bildersuche generieren',
  Model: 'Modell',
  Sampler: 'Sampler',
  lora: 'LoRA',
  size: 'Grösse',
  pos: 'Positiver Prompt',
  unknownSavedDir:
    'Das Speicherverzeichnis konnte nicht gefunden werden (Einstellung für das Speicherverzeichnis in der Konfiguration)',
  errorOccurred: 'Ein Fehler ist aufgetreten',
  useThumbnailPreview: 'Verwende Miniaturansichtsvorschau',
  gridThumbnailWidth: 'Breite der Miniatur-Rasteransicht',
  start: 'Start',
  tip: 'Hinweis',
  sortByDateAscending: 'Datum aufsteigend',
  sortByDateDescending: 'Datum absteigend',
  sortByCreatedDateAscending: 'Erstellungsdatum aufsteigend',
  sortByCreatedDateDescending: 'Erstellungsdatum absteigend',
  sortByNameAscending: 'Name aufsteigend',
  sortByNameDescending: 'Name absteigend',
  sortBySizeAscending: 'Grösse aufsteigend',
  sortBySizeDescending: 'Grösse absteigend',
  inputAddressAndPressEnter: 'Geben Sie die Adresse ein und drücken Sie Enter',
  go: 'Los',
  unknownError: 'Unbekannter Fehler aufgetreten',
  loadingNextFolder: 'Lade Dateien aus dem nächsten Verzeichnis',
  moveFailedCheckPath: 'Fehler beim Verschieben. Überprüfen Sie den eingegebenen Pfad.\n',
  detailList: 'Detailübersicht',
  previewGrid: 'Vorschau-Rasteransicht',
  moveSelectedFilesTo: 'Ausgewählte Dateien verschieben nach',
  confirm: 'Bestätigen',
  download: 'Herunterladen',
  local: 'Lokal',
  sendImageFailed:
    'Fehler beim Senden des Bildes. Bitte kontaktieren Sie den Entwickler mit der Fehlermeldung aus der Konsole.',
  confirmDelete: 'Sind Sie sicher, dass Sie dies löschen möchten?',
  deleteSuccess: 'Erfolgreich gelöscht',
  doubleClickToCopy: 'Doppelklick zum Kopieren',
  root: 'Root',
  drive: ' Laufwerk',
  refresh: 'Aktualisieren',
  quickMove: 'Schnellzugriff',
  more: 'Mehr',
  viewMode: 'Ansichtsmodus',
  sortingMethod: 'Sortiermethode',
  copyPath: 'Pfad kopieren',
  deleteSelected: 'Löschen',
  previewInNewWindow: 'In neuem Fenster öffnen',
  copySourceFilePreviewLink: 'Kopiere Dateilink aus dem Verzeichnis',
  viewGenerationInfo: 'Anzeige von Generierungsinformationen (Prompt, etc.)',
  sendToTxt2img: 'Senden an Text-zu-Bild',
  sendToImg2img: 'Senden an Bild-zu-Bild',
  sendToInpaint: 'Senden an Inpaint',
  sendToExtraFeatures: 'Senden an Extras',
  sendToControlNet: 'Senden an ControlNet',
  loadNextPage: 'Nächste Seite laden',
  localFile: 'Lokale Datei',
  globalSettings: 'Globale Einstellungen',
  welcome: 'Willkommen',
  openInNewWindow: 'In neuem Fenster öffnen',
  restoreLastRecord: 'Letztes Verzeichnis wiederherstellen',
  launch: 'Ausführen',
  walkMode: 'Verwende den Walk-Modus, um Bilder zu durchsuchen',
  recent: 'Kürzlich',
  emptyStartPage: 'Leere Startseite',
  t2i: 'Text-zu-Bild',
  i2i: 'Bild-zu-Bild',
  saveButtonSavesTo: 'Speichern',
  extra: 'Extras',
  gridImage: 'Rasterbild',
  'i2i-grid': 'Bild-zu-Bild Raster',
  image: 'Bild',
  't2i-grid': 'Text-zu-Bild Raster',
  workingFolder: 'Arbeitsordner',
  lang: 'Sprache',
  langChangeReload: 'Neuladen: Einige Änderungen erfordern ein Neuladen, um wirksam zu werden',
  openOnTheRight: 'Rechts öffnen',
  openInNewTab: 'In neuem Tab öffnen',
  openWithWalkMode: 'Im Walk-Modus öffnen',
  longPressOpenContextMenu: 'Langes Rechtsklicken zur Öffnung des Kontextmenüs unterstützen',
  searchResults: 'Suchergebnisse',
  imgSearch: 'Bildsuche',
  send2savedDir: 'In den gespeicherten Ordner senden',
  promptcompare: 'Prompts vergleichen',
  'TikTok View': 'TikTok-Ansicht',
  rebuildImageIndex: 'Bildindex neu erstellen',
  tagSearchNoResultsMessage: 'Es scheint, als wären keine Ergebnisse gefunden worden. Versuchen Sie, den Index neu zu erstellen, um unbenutzte Tags zu entfernen?',
  tiktokView: 'TikTok-Ansicht',
  magicSwitchTiktokView: 'TikTok-Ansichtsmodus',
  magicSwitchTiktokViewDesc: 'Wenn aktiviert, führt das Klicken auf Bild-/Videodateien direkt in den TikTok-Ansichtsmodus',
  magicSwitchEnabled: '🎬 EIN - Klicken Sie auf Mediendateien, um die TikTok-Ansicht zu öffnen',
  magicSwitchDisabled: '📁 AUS - Klicken Sie auf Mediendateien, um sie normal zu öffnen',
  magicSwitchDetailDesc: 'Klicken Sie auf Bilder und Videos, um direkt in die TikTok-ähnliche Browsing-Erfahrung einzusteigen',
  randomImageSettings: 'Zufallsbild-Einstellungen',
  showRandomImageInStartup: 'Zufallsbild in Startseite anzeigen',
  showRandomImageInStartupDesc: 'Kontrolliert, ob die Zufallsbild-Option auf der Startseite angezeigt wird',
  randomImageSettingNotification: 'Tipp: Sie können in den globalen Einstellungen steuern, ob die Zufallsbild-Option auf der Startseite angezeigt wird'
}
