### script defer
- käynnistää javascriptin vasta, kun DOM on rakennettu


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


## BOM (browser object model)
- selaimen tarjoama käyttöliittymä
  - olioita, jotka selain tarjoa javascriptin käyttöön
- ei standardisoitu, eroavat selainten välillä
- olion hierarkianjuuressa Window-olio
- ``console.dir(window)``
- **BOM-metodeilla** voidaan mm. luoda dialogeja, aloittaa ja lopettaa ajastimia
- alert ja prompt ovat BOM-metodeja
  - ``window.alert()`` ja ``window.prompt()``, mutta juurioliota window ei tarvitse kirjoittaa
- document-olio käyttöliittymänä selaimeen ladattuun nettisivuun
- sisältää DOM-puun
- tarjoaa metodeja, joita voidaan käsitellä javascriptin avulla


### DOM (document object model)
- olioesitys, jonka selain rakentaa nettisivusta
  - esittää sivun elementit BOM:in kautta, jotta niitä voidaan käsitellä
- DOM-puurakenne
  - **node** = elementtejä, attribuutteja ja sisältöä
  - **parent node** = noden yläpuolella
  - **child node** = noden alapuolella
  - **sibling node** = child node, jolla sama vanhempi
- elementtien valitseminen
  - DOM tarjoaa metodeja, joilla voi hakea elementtejä
- elementtien muokkaaminen
  - elementeillä on **innerText**-ominaisuus, joka sisältää elementin sisältönä olvean tekstin
  - voi muokata JS:llä
  - elementeillä **on innerHTML** -ominaisuus


### Events ja event handlers
- tapahtumat ja käyttäjän interaktio sivun kanssa
- funktioita, jotka ajetaan, kun jokin event tapahtuu
- JS:n event on Pythonin exceptionin kaltainen, luo olion
- miksi tapahtumankäsittelijä (event handler) on takaisinkutsufunktio (callback function) -> funktio käydään läpi, ennen kuin se kutsutaan

## Frontend ja backend (taustapalvelu)

- taustapalvelun käyttäjän ei tarvitse olla selain
  - http-protokollan takia voi käyttää mistä tahansa ohjelmasta millä tahansa ohjelmointikielellä

#### Flask-kirjasto


  
## AJAX
- nettisovellus hakee asynkronisesti dataa palvelimelta, ja päivittää käyttöliittymää (html:ää)
  - historiallisesti haettiin kokonaan uusi tiedosto palvelimelta
- **asynkroninen ohjelmointi** esim kirjautumisesta:
  - 1: kysy käyttäjän nimeä -> 2. hae tiedot palvelimelta -> 3. muuta teksti käyttäjän nimeksi -> 4. etsi tärkeimmät artikkelit
    - ohjelma 'pysähtyy' jokaisen stepin jälkeen
  - 1: kysy nimeä -> 2. lähetä pyyntö tiedoista -> 2.5 vastausta odottaessa: etsi artikkelit -> 3. vastauksen saatua: muuta teksti
  - asynkroninen tidonhaku:
    - **``await``** tekee helpommaksi datan palautuksen promisen sijaan
     - JS-pyyntö
      - vastausta odottaessa tehdään jotain
- **lupaus (promise)**
  - asynkroninen operaatio palauttaa lupauksen, eli olion joka tulee sisältämään operaation tuloksen
  - sisältää tietoa operaation tilasta [[PromiseState]], [[PromiseResult]]
- **fetch**
  - fetch-metodi tekee pyynnön palvelimelle ja palauttaa lupauksen välittömästi
  - vastauksen saavuttua lupaus sisältää mm. statuskoodin vastauksen lisäksi
- **API** (ohjelmointirajapinta)
  - rajapinta, jonka ohjelma tarjoaa
     - toiset ohjelmat voivat käyttää sen toiminnallisuuksia ja dataa

``async function fetchData() { `` luodaan avainsanalla
    ``const response = await fetch(
"https://api_osoite.com",);
 }
 fetchData();
 console.log("tämä tulostetaan ennen kuin data on haettu.")

- try catch (pythonin try -> except)