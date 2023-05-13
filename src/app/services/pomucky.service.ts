import { Injectable } from '@angular/core';
import { Pomucka } from '../types'

const polePomucek: Array<Pomucka> = [
  {
    nazev: "hacek",
    title: "Háček",
    videoURL: "XL4ze9vLC3s",
    kroky: [
      {
        popis: "Existuje široká škála velikostí.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Háčky se dělají z různých materiálů.",
        obrazek: "hacek",
        exist: true,
      },
      {
        popis: "Mohou být zdobeny rukojeťmi, ergonomickými úchyty a podobně.",
        obrazek: "okrasny-hacek",
        exist: true,
      },
    ]
  },

  {
    nazev: "prize",
    title: "Příze",
    videoURL: "XL4ze9vLC3s",
    kroky: [
      {
        popis: "Dnes můžeme najít obrovské množství značek a materiálů (akrylové, bavlněné, směsové).",
        obrazek: "prize",
        exist: true,
      },
      {
        popis: "Na přebalu klubíčka bývá napsáno, kolik metrů obsahuje a na jak velký háček (popř. jehlice) je dělaná.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Samozřejmě můžete využít více velikostí na jeden typ příze (např.: Dolphin Baby se dá háčkovat s háčkem velikosti 4, 4.5 nebo 5 mm), ovlivňuje se tím však velikost oček.",
        obrazek: null,
        exist: false,
      },
    ]
  },

  {
    nazev: "znackovac",
    title: "Značkovač",
    videoURL: "XL4ze9vLC3s",
    kroky: [
      {
        popis: "Slouží nám k označení počátku řady, ale dá se použít i jiný kousek příze.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Značkovač je příjemná pomůcka, která se na trhu objevuje ve více variantách. Spirála je vhodnější pro silnější příze.",
        obrazek: "znackovac-spirala",
        exist: true,
      },
      {
        popis: "Tento má výhodu v tom, že se dá zavřít a je vhodný pro všechny typy příze.",
        obrazek: "znackovac",
        exist: true,
      },
    ]
  },

  {
    nazev: "jehla",
    title: "Jehla",
    videoURL: null,
    kroky: [
      {
        popis: "Na přišívání jednotlivých dílů, zapošívání nitě. Upřednostňované plastové jehly se více hodí, pokud děláte se silnějším typem příze.",
        obrazek: "jehla",
        exist: true,
      },
    ]
  },

  {
    nazev: "nuzky",
    title: "Nůžky",
    videoURL: null,
    kroky: [
      {
        popis: "Nůžky asi už někdy používal každý z nás a u háčkování to není nějak zvlášť jiné.",
        obrazek: "nuzky",
        exist: true,
      },
      {
        popis: "Klasické nůžky na papír nejsou na některé příze vhodné, protože potom ji přestříháváme na několikrát a akorát se nám konec třepí.",
        obrazek: "zdobneNuzky",
        exist: true,
      },
      {
        popis: "Můžete si pořídit nůžky na látku, nebo různé speciálně zdobené, tvarované.",
        obrazek: null,
        exist: false,
      },
    ]
  },

  {
    nazev: "bezpecnostni-oci-a-nos",
    title: "Bezpečnostní oči a nos",
    videoURL: null,
    kroky: [
      {
        popis: "Dnes se dá pořídit spousta tvarů, velikostí a barev očí a nosů s bezpečnostní pojistkou.",
        obrazek: "bezpecnostni-nos",
        exist: true,
      },
      {
        popis: "Uzavírají se jednoduše. Na závit se postupně nasouvá pojistka, která jde zaklapnout tolikrát, kolik má očko závitů.",
        obrazek: "zavit-a-pojistka",
        exist: true,
      },
      {
        popis: "Čím pevněji oko uzavřeme tím hezčí, nebo ošklivější efekt můžeme vytvořit. Je to kus od kusu, výrobek od výrobku.",
        obrazek: "bezpecnostni-oko",
        exist: true,
      },
    ]
  },

  {
    nazev: "chrastitko",
    title: "Chrastítko",
    videoURL: null,
    kroky: [
      {
        popis: "Pokud chcete svůj výrobek nějak ozvláštnit pro dítě, nebo třeba domácího mazlíčka, můžete dovnitř přidat chrastítko.",
        obrazek: "chrastitko",
        exist: true,
      },
      {
        popis: "Ty se dnes vyrábí v různých velikostech, tvarech a každé chrastí jinou intenzitou.",
        obrazek: "chrastitko-kulate",
        exist: true,
      },
    ]
  },

  {
    nazev: "pocitadlo",
    title: "Počítadlo",
    videoURL: null,
    kroky: [
      {
        popis: "Existuje počítadlo manuální a digitální. Obě mají stejný účel. Počítat řady, co jsme dosud vytvořili.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Manuální může vypadat jako válec a každá jeho strana se dá otáčet. Měníme tak číslovky od 0 do 9. Některá se dají připojit na háček, jiná musíte stále brát a pokládat bokem.",
        obrazek: "manualni",
        exist: true,
      },
      {
        popis: "Mnohem pohodlnější je z tohoto důvodu počítadlo digitální, které se dá připevnit na palec a pouhým mačkáním tlačítek buď posouváte číslo o , nebo celý proces resetujete. Existují i taková počítadla, která umí displej rozsvítit.",
        obrazek: "digitalni",
        exist: true,
      },
    ]
  },

  {
    nazev: "navijec-prize",
    title: "Navíječ příze",
    videoURL: null,
    kroky: [
      {
        popis: "Když se vám klubíčko zasukuje tak, že ho musíte celé rozplést, nebo se vám rozkutálí, tak je navíječ pomocník pro vás. Jedná se o nástroj, který dělá z kusu provázku opět klubíčko. Jednoduše upevníte jeden konec na horní otáčecí válec, přízi napnete a pak už jen točíte kličkou. Navíječ vytvoří klubíčko",
        obrazek: "navijec-prize",
        exist: true,
      },
    ]
  },

  {
    nazev: "vypln",
    title: "Výplň",
    videoURL: null,
    kroky: [
      {
        popis: "Pokud vytváříte něco prostorového (zvířátka, hračky, atd...), tak se vám bude hodit nějaká výplň. Tu může tvořit vata, nebo duté vlákno. Po delší době háčkování můžete použít i zbytky přízí z minulého tvoření. Je to taková recyklace, kterou já uplatňuji třeba u jehelníčků",
        obrazek: "vypln",
        exist: false,
      },
    ]
  }
];


@Injectable({
  providedIn: 'root'
})
export class PomuckyService {

  pomucky: Map<string, Pomucka>;

  constructor() {
    this.initMap();
  }

  public getPomuckaByName(name: string): Pomucka {
    return this.pomucky.get(name);
  }

  private initMap() {
    this.pomucky = new Map();
    polePomucek.forEach(pomucka => {
      this.pomucky.set(pomucka.nazev, pomucka);
    });
  }
}
