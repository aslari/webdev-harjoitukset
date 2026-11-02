### JS-datatyypit
- bigint: suuret kokonaisluvut
- null: ei arvoa (vielä), käytetään tarkoituksellisesti kertomaan, että arvoa ei ole
- undefined: muuttujan arvo ei ole alustettu
- symbol: uniikki arvo

- event lister: ajetaan, kun jokin asia tapahtuu
- typeof muuttujan nimi: kertoo datatyypin, numerot ovat string
  - parseInt(muutujaInput.value); -> parse muuttaa numeroksi
- console.log(``Tulostetaan: ${muuttuja}`)

### Ohjausrakenteet
- if toimii kuten pythonissa, eri syntaksi
``if (age < 18) {
console.log("Olet alaikäinen.");
}``
- elif kirjoitetaan else if  
``if (number > 0) {
    console. log("Luku on positiivinen.")
}
else if (number < 0) {
    console.log("Luku on negatiivinen.")
}``
- toinen valintarakenne Switch
  - määritellään eri koodiblokit, joita ajetaan muuttujan tai lausekkeen arvon perusteella
  ``const cabinClass = prompt("Anna hyttiluokka A/B.");
switch (cabinClass) {
    case "A":
        console.log("Yläkannen hytti");
        break;
    case "B":
        console.log("Toinen hytti");
        break;
    default:
        console.log("virheellinen hyttiluokka");
}``
- while ja do-while:
``while (weight <= 0) {
console.log("Painon oltava yli 0kg")
}``
- kun while tarkistaa ehdon aina kierroksen alusaa, do while tarkistaa sen kierroksen lopussa
  - suorittaa koodiblokkinsa ainakin kerran
``do {
    koodiblokki
} while (ehto)``
   - ohjelma ajaa koodiblokin

- math.random arpoo liukuluvun välillä 0-1
- for
  - pythonissa for iteroi listan tai Range-olion arvot läpi
  - javascriptissä for toimii siten, että käytetään kierrosmuuttujaa  
``for (let i = 1; i <= 10; i++) {
    console.log(i);
}``
    -   i = kierrosmuuttuja, i++ tarkoittaa lisätään arvoa yksi

### Taulukot (array)

- ``sort()`` lajittelee taulukon alkiot aakkosjärjestykseen
- ``reverse()`` kääntää taulukon alkiot päinvastaiseen järjestykseen
- ``shift()`` poistaa ja palauttaa taulukon ensimmäisen alkion
- pop() poistaa ja palauttaa taulukon viimeisen alkion
- push(value) (python: append) lisää arvon taulukon loppuun (useita arvoja voi antaa pilkuilla erotettuina)
- includes(value) tarkistaa, sisältääkö taulukko annetun arvon

- array.push(value) indeksiin sijoittamiselle

- suuruusjärjestys: nimi.sort((a, b) => a - b))

### olioliteraalit (object literal)
- kuin sanakirja pythonissa
- nimi-arvo -pareja, nimet olion ominaisuuksia (property)
- ominaisuuteen viitataan pistemerkinnällä tai hakasulkeilla
  - ``olionimi.nimi`` tai ``olionimi["nimi"]``
- ominaisuuksia voi lisätä ja poistaa, vaikka muuttuja olisi määritelty ``const``-avainsanalla
  - olion muuttaminen (mutating)
- ominaisuuden arvo voi olla funktio 
  - kutsutaan metodiksi

### funktio (function)
- ``function``-lauseella kirjoitetut funktiot
- nuolifunktiot ``=>`` (uudempi ja tiiviimpi)

- ``function tervehdi() {  
    console.log("moikka!");  
    return;  
}``
- ``return``-lause päättää funktion
  - voi myös palauttaa paluuarvon
  - funktio ilman palautusarvoa, palauttaa arvon ``undefined``
- funktiota kutsutaan ``funktionimi();``
- parametrillinen funktio

### muuttujien näkyvyys
- näkyvyysalue (scope), eli missä ohjelman osissa muuttujaa voi käyttää
- lohko = aaltosulkeiden sisällä
- ``let``- ja ``const`` -avainsanat
- funktion sisällä:
  - var = paikallinen muuttuja
  -  const = lohkon paikallinen muuttuja
- ``const``= globaali muuttuja

### taulukko parametrina
- välitetään viittaus (reference) taulukkoon "kopiona"
- taulukon voi palauttaa paluuarvona viittauksena

### nuolifunktiot (lambdafunktio)
- funktion kompaktimpi muoto
- ``const quadraticSum ? (a, b) => a * a + b * b;``
- paremetri => , lausekkeen arvo/funktion paluuarvo
- jos nuolifunktio suorittaa usean lauseen, funktion runko lohkona aaltosulkeiden sisällä
  - täytyy palauttaa ``return``-lauseella