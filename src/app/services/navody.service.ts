import { Injectable } from '@angular/core';
import { Navod, Obtiznost, PopisNavodu } from '../types';

const poleNavodu: Array<Navod> = [
  {
    obtiznost: Obtiznost.lehky,
    nazev: "dinosaurus",
    title: "Dinosaurus",
    zkratky: "Mk, V, Ks, A, Po, Řo",
    pomucky: "Háček (velikosti 2mm), jehla, značkovač, duté vlákno, bezpečnostní očka",
    premiove: false,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-dinosaura",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "ks (6 řad)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "nos-dinosaura",
        titulekCasti: "Nos",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "ks (3 řady)", "3ks, A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "telo-dinosaura",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "4ks, A", "ks (3 řady)", "3ks, A", "ks (1 řada)", "2ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "predni-noha-dinosaura",
        titulekCasti: "Přední noha (2x)",
        popis: ["Mk (6)", "V", "ks (7 řad)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "zadni-noha-dinosaura",
        titulekCasti: "Zadní noha (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "ks (2 řady)", "2ks, A", "4A, 10ks", "2A, 10ks", "ks (8 řad)", "A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "ocas-dinosaura",
        titulekCasti: "Ocas",
        popis: ["Mk (6)", "V", "11ks, V", "12ks, V", "13ks, V", "14ks, V", "15ks, V", "16ks, V", "17ks, V", "18ks, V", "19ks, V", "20ks, V", "21ks, V", "22ks, V", "23ks, V", "Po", ""]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "osten-dinosaura",
        titulekCasti: "Osten (6x)",
        popis: ["Mk (6)", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "Po"]
      }
    ]
  },
  {
    obtiznost: Obtiznost.stredni,
    nazev: "harold",
    title: "Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    premiove: false,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-harold",
        titulekCasti: "Hlava",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (6 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Řo, V, Po",
        nazevCasti: "chapadla-harold",
        titulekCasti: "Chapadla",
        popis: ["6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "vyplneni-harold",
        titulekCasti: "Vyplnění",
        popis: ["Nezapomeňte v tomto bodě vyplnit."]
      },
      {
        obrazek: true,
        zkratkyCasti: "A, Po",
        nazevCasti: "uzavreni-harold",
        titulekCasti: "Uzavření",
        popis: ["A", "Po na zakončení, necháme si delší kus příze na zapošití."]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "doplnky-harold",
        titulekCasti: "Doplňky",
        popis: ["Obočí a pusinku našijeme černou přízí."]
      }
    ]
  },
  {
    obtiznost: Obtiznost.tezky,
    nazev: "vodni-zelva",
    title: "Vodní želva",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    premiove: true,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-zelva",
        titulekCasti: "Hlava",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (4 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "horni-cast-krunyre-zelva",
        titulekCasti: "Horní část krunýře",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "ks (3 řady)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "spodni-cast-krunyre-zelva",
        titulekCasti: "Spodní část krunýře",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "zadni-ploutev-zelva",
        titulekCasti: "Zadní ploutev (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "predni-ploutev-zelva",
        titulekCasti: "Přední ploutev (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: false,
        zkratkyCasti: "Mk, Ks, Po",
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Ocásek",
        popis: ["Mk (4)", "ks (2 řady)", "Po"]
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  constructor() {
  }

  public getNavodyByName(name: string) {
    return poleNavodu.find(element => element.nazev == name);
  }

  public getVsechnyNavody(): Array<Navod> {
    return poleNavodu;
  }

  public getPopisy(titl: string): Array<PopisNavodu> {
    let index = poleNavodu.findIndex(x => x.title == titl);
    return poleNavodu[index].popisy;
  }
}
