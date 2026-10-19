# Satisfactory Logistics Planner v10.4

## Neue Funktionen
- Verbindungen für Förderbänder und Rohre werden jetzt durch Ziehen vom orangefarbenen Output zum passenden blauen Input erstellt.
- Während des Ziehens wird eine Vorschau angezeigt; Escape bricht ab.
- Richtung, Ressourcentyp und konkreter Item-/Fluidtyp werden vor dem Anlegen geprüft. Bestehende Verbindungen an demselben Ausgang oder Eingang werden ersetzt.
- Power Poles gibt es als Mk.1, Mk.2 und Mk.3. Die modellierten direkten Leitungslimits sind 4, 7 und 10.
- Der Inspector zeigt die Anschlussauslastung und erlaubt das Ändern der Maststufe. Ungültige/überzählige importierte Stromverbindungen werden beim Rendern nach den Anschlusslimits normalisiert.
- Docker-Konfiguration und bestehende Planungs-/Simulationsfunktionen bleiben erhalten.

## Einschränkungen
- Die Werte für Strommast-Anschlüsse sind als Spielregeln hinterlegt; sie wurden in dieser Umgebung nicht gegen eine laufende Satisfactory-Installation verifiziert.
- Es gab keinen echten Browser-/Pointer-Test in einem gestarteten Browser und keinen Docker-Starttest in dieser Umgebung.
