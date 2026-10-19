# Satisfactory Logistics Planner v10.4.1 — Automatic power recovery

## Fix
- Stromnetze starten nach einem Generatorausfall automatisch wieder, sobald ein Generator wieder Strom liefert und die verfügbare Leistung den Netzbedarf deckt.
- Maschinen laufen danach automatisch weiter, ohne dass „Restart grid“ manuell gedrückt werden muss.
- Absichtlich manuell pausierte Maschinen, global pausierte Maschinen und Maschinen mit erreichtem Ausgabelimit bleiben weiterhin pausiert. Die automatische Wiederherstellung setzt diese unabhängigen Pausen nicht zurück.

## Tests
- Regressionstest: Generatorausfall löst Netzabschaltung aus.
- Regressionstest: Wieder verfügbare ausreichende Generatorleistung setzt den Netz-Trip automatisch zurück.
- Regressionstest: Manuelle Maschinenpause bleibt nach der Stromwiederkehr bestehen.
