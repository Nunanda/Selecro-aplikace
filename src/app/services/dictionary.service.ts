import { Injectable } from '@angular/core';
import { Styl } from '../types'

const poleStylu: Array<Styl> = [
  {
    nazev: "retizkove-oko",
    title: "Řetízkové oko",
    zkratka: "Řo",
    popis: "Vytvoříme si jednoduchý uzlík, který upevníme přímo na háček. Utahujeme pouze tak, aby prošla další příze. Naberu na háček a přitáhnu vytvořeným okem. Opakováním tohoto tahu vytvářím řetěz."
  },
  {
    nazev: "pevne-oko",
    title: "Pevné oko",
    zkratka: "Po",
    popis: "Ve vytvořené řadě výrobku si mohu udělat pevná oka. Pomáhají tvarovat záhyby, lokty, kolena nebo zakončují výrobek. To oka zajedu háčkem a přitáhnu přízi na druhou stranu, ale tentokrát narozdíl od ks tu druhou přízi přitáhnu tou první. Čím více budu utahovat, tím hůř se do něj pak dostanu. Pokud zakončujete, tak se v tomto bodě už jen ustřihne dostatečně dlouhá část příze na přišití a protáhnete konec vytvořeným okem na háčku."
  },
  {
    nazev: "kratky-sloupek",
    title: "Krátký sloupek",
    zkratka: "Ks",
    popis: "Do vytvořené řady řo najdu první oko. Do oka zajedu háčkem a protáhnu přízí na druhou stranu. Na háčku se mi nyní objeví 2 nahozené provázky, znovu naberu přízi na háček a provleču ji těma dvěma, co už tam čekaly."
  },
  {
    nazev: "dlouhy-sloupek",
    title: "Dlouhý sloupek",
    zkratka: "Ds",
    popis: "Nabereme přízi na háček a teprve potom zajedeme do vytvořeného oka. Máme 3 příze na háčku. Naberu a protahuju po dvou. Takže první dvojicí protáhnu první nahození, pak zase naberu a protáhnu zbylými dvěma"
  },
  {
    nazev: "polodlouhy-sloupek",
    title: "Polodlouhý sloupek",
    zkratka: "Pds",
    popis: "Nabereme přízi na háček a teprve potom zajedeme do vytvořeného oka. Protáhnu a na háčku mám nyní 3krát ovinutou přízi. Naberu na háček a tuto přízi protáhnu všemi třemi."
  },
  {
    nazev: "rozhackovani",
    title: "Rozháčkování",
    zkratka: "V",
    popis: "Krátký sloupek tak, jak ho známe, ale uděláme ho dvakrát v jednom bodě"
  },
  {
    nazev: "shackovani",
    title: "Sháčkování",
    zkratka: "A",
    popis: "Jde to dvěma různými způsoby.</p> <p>1) Protáhnu přízi dvěma po sobě následujícími oky. Držím tedy na háčku 3 provázky příze. Jednou nahodím a přitáhnu všemitřemi najednou.</p><p>2) Zasunu háček za přední nic a hned jdu to toho dalšího, kde taky vezmu jen přední nit. Nahodím a protahuju po dvojicích.</p> <p>U druhého způsobu se docílí toho, že nevznikají mezery mezi oky, což je ne vždy vidět a jde i o to, jak moc člověk utahuje. Každopádně nevýhodou je menší stahování, které se dožene šitím."
  },
  {
    nazev: "magicky-krouzek",
    title: "Magický kroužek",
    zkratka: "Mk",
    popis: "Dostatečný kus příze si položím mezi prostředníček a ukazováček levé ruky (pokud jsem pravák). Omotám kolem vnější strany ukazováčku, celého palce a vracím se zpět tam, kde začíná příze. Mezi prostředníček a ukazováček. Vytvořím tak „znak nekonečna“.</p><p>Vezmu si háček a podeberu vnitřní u palce, vnější přízi za křížem a vnější před křížem. Pravým ukazováčkem si pak tyto tři přehozené části podržím a naberu si přízi na levou ruku, jako bych chtěla začít háčkovat. Pak naberu na háček a protáhnu všemi třemi oky, při tom levým palcem a prostředníčkem držím vznikající kruh.</p><p>V tomto okamžiku se dostáváme do pevného bodu. Máme kruh a máme volný „špagátek“. Háčkujeme směrem doleva, tedy v protisměru hodinových ručiček. Háčkem nabereme kruh tím, že půjdeme zevnitř ven. Společně s kruhem budeme nabírat i svěšený provázek, díky kterému nakonec kruh utáhneme, aby byl opravdu kruhem."
  },
];

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {
  }

  public getStylByName(name: string): Styl {
    return poleStylu.find(element => element.nazev == name);
  }
}
