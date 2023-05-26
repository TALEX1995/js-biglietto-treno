# Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.

---

## Steps

1. Chiedere il numero di km all'utente.
1. Salvare il numero di km inseriti dall'utente in una variabile (controllare tramite console.log che venga salvata correttamente).
1. Chiedere l'età all'utente.
1. Salvare l'eta dell'utente in una variabile (controllare tramite console.log che venga salvata correttamente).
1. Creare 3 variabili per i km, lo sconto per i giovani e per gli anziani (così se in futuro dovrai cambiarli sarà più facile).
1. Calcolare il prezzo del biglietto tramite km \* prezzo al km.
1. Controllare se l'utente ha meno di 18 anni o più di 65 per applicarli lo sconto.
1. Mostrare in console il prezzo finale
