import { useEffect } from "react";
import chevron from "../assets/chevron.svg";
import "../styles/About.css";

const About = () => {

  useEffect(() => {
    const myLabels = document.querySelectorAll(".lbl-toggle");
    Array.from(myLabels).forEach(label => {
      label.addEventListener('keydown', e => {
        // 32 === spacebar
        // 13 === enter
        if (e.which === 32 || e.which === 13) {
          e.preventDefault();
          label.click();
        };
      });
    });
  }, []);

  return (
    <div className="about-collapsible-wrap">
      <input id="collapsible1" className="toggle" type="checkbox"/>
      <label htmlFor="collapsible1" className="lbl-toggle" tabIndex="0">Vad är handledning<img src={chevron} alt="" /></label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
          Handledning erbjuder en trygg och avgränsad miljö, med tid och plats 
          för reflektion och erfarenhetsutbyte. Här kan Du och Ni få hjälp att 
          fokusera på aktuella dilemman, ostört dela erfarenheter och med stöd 
          av handledaren få syn på alternativa problemlösningar och vägar framåt.<br/> 
          Genom att tillsammans med kollegor, och en extern handledare, lyfta fram 
          och skärskåda situationer från arbetets vardag, fungerar handledning 
          som en problemlösande, enande och stressreducerande insats.<br/>
          Deltagarna bidrar med egna frågeställningar och reflektioner. Genom att 
          arbeta med, samt pröva och granska dilemman, processer och enskilda 
          situationer, kan man utmana egna beteenden och tankemönster för att 
          därigenom växa i sin yrkesroll. Man lär och inspireras av övriga i 
          gruppen, samtidigt som man ytterligare kan förstå sin egen kompetens.
          Därigenom växer var och en i sin professionella hållning.<br/>
          Tillsammans med handledaren får den enskilde, liksom gruppen, hjälp 
          att skärskåda situationer som är förknippade med osäkerhet, utmaningar
          eller problem. Handledaren kan opartiskt synliggöra och lyfta fram 
          problemställningar och dilemman för skärskådan och lösning. Härigenom
          ges den enskilde möjlighet att hitta nya infallsvinklar i förhållande 
          till problematiken. Handledning innebär alltså en konkret chans att lösa 
          knutar och tackla svårigheter, liksom att pröva och se problem ur nya perspektiv.
          </p>
        </div>
      </div>
      <input id="collapsible2" className="toggle" type="checkbox"/>
      <label htmlFor="collapsible2" className="lbl-toggle" tabIndex="0">Hur handledning går till<img src={chevron} alt="" /></label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
          Handledning ser olika ut från arbetsplats till arbetsplats och ska alltid 
          utgå från den verklighet som den aktuella arbetsgruppen arbetar och befinner 
          sig i. <br/>Handledning löper ofta mellan cirka en till sex terminer, med en 
          regelbundenhet om cirka en till två träffar i månaden. Längden för varje 
          handledningstillfälle kan variera, beroende på arbetsplatsens förutsättningar, 
          men relativt vanligt är ca två till tre timmar. En grupp brukar omfatta 
          mellan tre till tio deltagare. Variationer förekommer förstås, men det 
          viktiga är att var och en i gruppen ges utrymme och möjlighet att få 
          sin utveckling och utmaning belyst och diskuterad.<br/>Vi på handledning.se 
          arbetar alla individuellt med olika inriktningar där var och en har våra 
          olika erfarenheter och speciella kompetensområden. Är ni intresserade 
          av handledning kontaktar ni den handledare ni tror skulle passa era behov 
          och era förutsättningar bäst. När valet väl är gjort brukar handledaren 
          föreslå en träff med er arbetsgrupp, så att ni i ett kravlöst möte kan 
          stämma av era behov och önskemål, samt för att formulera uppdraget och 
          handledningens förväntningar. Om uppdraget och förtroendet finns efter
           mötet så inleder ni sen handledningen tillsammans.
          </p>
        </div>
      </div>
      <input id="collapsible3" className="toggle" type="checkbox"/>
      <label htmlFor="collapsible3" className="lbl-toggle" tabIndex="0">För vem passar handledning<img src={chevron} alt="" /></label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
          Handledning passar alla. Däremot behöver alltid innehållet och upplägg 
          anpassas efter gruppens förutsättningar, erfarenheter och sammansättning.<br/>
          Handledning är varken terapi eller ett arbetslagsmöte. De olika begreppen 
          står för olika sorters insatser, vilka kompletterar men ersätter inte varandra. 
          I terapi sätts hela individen i fokus. Terapin arbetar på många individuella 
          nivåer och kommer ofta in på ett mycket mer privat plan. Arbetsmöten, 
          å sin sida, fokuserar i huvudsak på specifika frågor inom arbetet. Här 
          finns sällan utrymme för att skapa känslomässig förståelse, istället 
          handlar det ofta rent instrumentellt om vad som behöver göras, av vem, 
          hur och när. Handledning däremot, fokuserar på deltagarnas yrkesroller, 
          yrkesidentiteter och de situationer och dilemman som uppstår inom arbetets 
          ramar. Många – för att inte säga de flesta – beslut fattas utifrån 
          känslomässiga aspekter. Genom att lyfta känslor som en viss arbetssituation 
          kan väcka, får vi lättare att urskilja och förhålla oss till mönster, system och processer.<br/>
          Handledning fungerar ofta som en naturlig och självklar del i arbetet, 
          men kan också introduceras som en tillfällig insats, under en mer 
          avgränsad tidsperiod. Kanske då under ett visst specifikt och kanske 
          mer akut skede, så som vid en omorganisation, eller vid att en ny 
          klientgrupp eller ett nytt arbetsområde introduceras.<br/>
          Vi handleder alla typer av uppdragsgivare, så som privata företag, 
          ideella organisationer och kommunala verksamheter, etc. Så oavsett om 
          ni söker handledning för ett arbetslag, en ledningsgrupp eller kanske 
          en projektgrupp så kommer ni hitta en passande handledare här på handledning.se.
          </p>
        </div>
      </div>
      <input id="collapsible4" className="toggle" type="checkbox"/>
      <label htmlFor="collapsible4" className="lbl-toggle" tabIndex="0">Handledarens roll och pris<img src={chevron} alt="" /></label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>
          Handledaren arbetar för att stärka såväl de individuella deltagarna 
          som gruppen som helhet. Hen hjälper deltagarna att fokusera på relevanta 
          frågeställningar och kan helt enkelt förtydliga och definiera aktuella 
          problem för såväl gruppen som individen. När utmaningarna ”kommer upp 
          på bordet” blir de möjliga att skärskåda och få grepp om. <br/>
          I egenskap av neutral och utifrån kommande part, är handledarens uppgift 
          även att se till och uppmuntra deltagarna att våga släppa fram och arbeta 
          med sina känslor och attityder inför t ex dilemman, normer och situationer 
          i arbetet och/eller i sitt förhållningssätt till kollegor och arbetsgrupp. 
          På så sätt kan svårigheter och möjligheter tydliggöras, varpå nya perspektiv 
          upptäcks och prövas. Ofta sker detta genom att konkreta situationer 
          presenteras och diskuteras. Händelser – känslor och företeelser som 
          upplevts som särskilt avgörande, typiska eller känslomässiga – diskuteras 
          för att deltagarna i gruppen bättre ska förstå sitt handlande och/eller de känslor som situationen väcker.<br/>
          Vi handledare har olika arvoden beroende på vår erfarenhet, hur ofta 
          och långa träffarna är, etc. Kostnaden brukar vara på mellan 1200 – 2500kr/tim. 
          Tveka inte att fråga den handledare som ni tror kan passa just er.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
