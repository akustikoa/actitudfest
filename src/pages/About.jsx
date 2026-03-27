import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const archiveData = `1	19/02/2002	Camping(Granollers) + No time to Think (Granollers)
2	31/05/2022	Love Of Lesbian (Bcn)
3	22/06/2022	Bad Mongos (Palafrugell) + Yuyus( La Bisbal d'Empordà)
4	28/06/2022	12Twelve(Bcn)
5	18/04/2003	Aghast(Fr) + Tekken(Fr)
6	13/05/2003	Lo mueso(maresme) + Nisei (Bcn)
7	28/06/2003	Dr. Explosion(Giojón) + No more lies(SFG)
8	22/11/2003	Memorikol (Vidreres)
9	26/11/2003	The Nederbietles(Holanda) + Overside(Girona)
10	19/12/2003	Henry(Cádiz) + Airun(Banyoles)
11	27/12/2003	Audience(País Basc) + Allegro Andante(Cassà de la Selva)
12	14/02/2004	Death Knell of Gaia(Bcn) + Outbreak(Vidreres)
13	26/02/2004	Imply in all(Fr) + Bollichaos
14	12/03/2004	Tuesday Afernoon(Bcn) + Jellifish skies(Girona)
15	07/04/2004	Twelve(Bcn)
16	23/04/2004	Maple(Bcn)
17	05/06/2004	Hopeful(Sfg) + Based on a lie(Torelló) + Realising hate
18	20/06/2004	Trasto(Bcn) + Dj Jaume(Caldes de Malavella)
19	26/06/2004	Callahans(Palafrugell) + Two Stones(Bcn) + Thee Suckin dicks(Madrid) + Holliwood sinners(Toledo)
20	05/09/2004	Dr. Explosion(Gijón)+ Rock -a-Hulas(Galicia)+ The Capaces(Bcn)
21	14/09/2004	Facedown in shit (Usa) + Outbreak(Vidreres) + Bikini Summer(Girona)
22	04/12/2004	Supersucker(Usa) + Callahans(Palafrugell)
23	13/06/2005	Borderline'66 dj (Vidreres)
24	18/06/2005	Texas Terri (Usa) + The Masons(Usa) + Copache(Tossa de Mar)
25	06/07/2005	Syncopated blue dj(Vidreres)
26	10/07/2005	Kids Frnçoise(Uk) + El Chico con la espina en el costado(Girona)
27	15/07/2005	Callahans(Palafrugell) +  Frednoise dj (Vidreres)
28	20/07/2005	Voice of people dj(Vidreres)
29	27/07/2005	Frednoise dj(Vidrers()
30	05/09/2005	Hoods(Usa) + Awaken (Fr) + Death knell of gaia(Bcn)
31	13/10/2005	The Movement (Dinamarca) 
32	29/10/2005	Pale Man made (Uk) 
33	11/11/2005	(lo:muêso)(Maresme) + Biscuit(Vilanova) + No more lies(Sfg)
34	12/11/2005	Josep Tero (L'Escala)
35	05/01/2006	Illinoise(Vidreres) + Human ashtray(Vidreres) + Craitures fastigoses(Vidreres) + dj Pauk(Caldes de Malavella)
36	27/01/2006	Jalea Real + Missing Dog Head
37	06/03/2006	The Briefs (Usa)
38	30/04/2006	Muletrain(Madrid) + Clarice(Sfg)
39	17/06/2006	Lula(Valencia) + Las Perras del infierno(Madrid) + Thee Girlfriends(Madrid) dj blue moon + las perras djs
40	31/08/2006	Two Dead Cats(Girona) + illinoise(Vidreres) + Rebel Girl dj(Vidreres)
41	25/09/2006	Valina( Austria)+ frednoise dj
42	08/10/2006	September Malevolence (Suècia) + Meltselectors djs
43	23/10/2006	The Montesas (alemania) + Black Knights (Alemania)
44	17/11/2006	Tulsa (Madrid)
45	22/11/2006	Dick Dale(Usa) + Los Tiki Phantoms(Bcn)
46	24/11/2006	The Saints (Australia) + Supercràpules(Vidreres)
47	05/03/2007	Supersuckers(Usa) 
48	08/03/2007	Bob Log III (Usa) + Frednoise dj
49	10/03/2007	Four crazy horses(Maçanet de la Selva)
50	13/04/2007	Souvaris(Uk) + Gareth Hardwick(Uk) + Meltselectors djs
51	14/04/2007	The Chealsea Smiles(Usa) 
52	07/05/2007	The Morlocks(Usa) + Tito and the Brainsuckers(Itàlia)
53	19/05/2007	Monochrome(Alemania) + No moe lies(Sfg) + Half foot outside(Pamplona) + illinoise(Vidreres) + rebel dj
54	09/06/2007	The Kids(Bélgica) + Hollywood sinners(Toledo) + Tokio sex destruction(Bcn)+ paul portobello dj + Blow up dj
55	15/06/2007	Ultra Dolphins( Ussa)+We can't be lovers(Sfg)
56	21/07/2007	Beast of burbon(Australia) + La Banda del Yuyu(Girona)
57	30/08/2007	Triángulo de Amor Bizarro(Galicia) + Bullitt(Sfg)+ New Day rising( + Atzavara girls djs
58	09/11/2007	Haram (Usa) + The Mistake(Canaries)
59	01/12/2007	The Warlocks(Usa) + Memorikol(Vidreres)
60	13/03/2008	Bloodlights (Noruega) + Electric Wasted(Bcn)
61	17/05/2008	Subsonics(Usa) + Tiger Tiger (Usa) + Almandino quite deluxe(Itàlia) + The Educators(Palafrugell)
62	22/05/2008	The Black Halos (Canada) + Travis Bickle(Bcn)
63	05/06/2008	Super 400 (Usa) 
64	07/06/2008	Spraydog(Escocia) + Nueva Vulcano(Bcn) + Two dead Cats(Girona) +illinoise(Vidreres)
65	03/09/2008	Lazy Juo (Sfg)
66	04/09/2008	Kitsch(Banyoles) + Madee(Premià)
67	14/11/2008	Subterranean Kids(Bcn) + Willis Drummond (Fr) + Nan roig(Bcn)
68	15/11/2008	Willis Drummond (Fr) + illinoise(Vidreres)
69	10/12/2008	Fucked Up (Canada) + Fractured(Girona)
70	05/01/2009	Holliwood Sinners(Toledo) + Dj blow up
71	31/01/2009	(lo:muêso) (Maresme) + frednoise dj
72	14/02/2009	Bullitt(Sfg) + Dj Waiem
73	13/03/2009	Do:Rüdiguer (País Basc)
74	27/03/2009	Los Tiki Phantoms(Bcn)
75	28/03/2009	Songstore(Bcn)
76	18/04/2009	Subterranean Kids(Bcn) + Fills de picciotto djs
77	16/05/2009	Jim Jones Revue(Uk) + The deadly vibes(Usa) + Old Wilson(Bcn) + Blue Moon dj
78	27/05/2009	Sisterhood Issue (Fr) + Rebel Girl dj
79	06/06/2009	Half Foot outside(Pamplona) + lo mueso(Maresme) + Capsula(País Basc) + Hot Gossip(itàlia) + Hurricäde(Girona)
80	12/07/2009	Soulfly(Brasil) + Human Ashtray
81	03/09/2009	Memorikol(Vidreres) + Las Víctimas(Girona)
82	05/09/2009	SA(País Basc)
83	09/10/2009	TV Buddhas(Israel) 
84	13/11/2009	Marvins revolt(Dinamarca)+ DjPeixito
85	14/11/2009	The Lizards(Bcn) + Dj Waiem
86	27/11/2009	Nueva Vulcano(Bcn) + Vistalegre(Sfg)
87	28/11/2009	Cortona(Fr) + MGZ dj
88	07/12/2009	Carusella(Israel) + Rebel girl dj
89	31/12/2009	Soroll djs
90	13/02/2010	Chuck Violence(Brasil) + Thee Teenage monlight borderliners (Fr) + Monkeybrain'66 dj + Blue Moon dj
91	20/02/2010	The Mistake(Canaries) + Meltselectors djs
92	25/02/2010	Willis Drummond(Fr) + Deline(Bcn)
93	25/02/2010	Willis Drummond  (Fr)
94	27/02/2010	Triángulo de Amor Bizarro(Galicia) + (lo:muêso)(Maresme)
95	09/04/2010	Monegre(Girona) + Cohira(Girona)
96	01/05/2010	Flying Over (Fr) 
97	10/06/2010	I Actitud Fest 12 grups
98	08/10/2010	Mostros(Mallorca) + The Educators(Palafrugell)
99	17/10/2010	Willis Drummond(Fr) + Hurricäde(Girona) + illinoise(Vidreres)
100	23/10/2010	Hurricäde(Girona) + Fills de picciotto djs
101	25/10/2010	Gareth Dickson( UK)
102	12/11/2010	Memorikol(Vidreres) + La banda del nervio(Bcn)
103	13/11/2010	Action Beat(Uk) + Frednoise dj
104	20/11/2010	Truman Waters(Usa) + Aliment(Girona) + Dj Waiem
105	08/01/2011	illinoise(Vidreres)+ dj sisset
106	14/01/2011	Caroline and the Treats(Noruega)
107	11/02/2011	Flying Over (Fr)  + The Lizards(Bcn)
108	19/02/2011	The Capaces(Bcn)
109	26/02/2011	Go Chic(Taiwan)
110	04/03/2011	illinoise(Vidreres)
111	11/03/2011	Milenrama(Sarrià de Ter) + Fi-asko(Sarrià de Ter)
112	19/03/2011	Golden Helmets (Alemania)
113	03/06/2011	Cobra(País Basc) + illinoise(Vidreres)
114	10/06/2011	II Actitud fest 15 grups
115	11/06/2011	Hard-ons(Australia)
116	23/06/2011	Adolescents (Usa) + Godfarts(Bcn)
117	10/09/2011	Bastards Assault(Bcn)
118	22/09/2011	FP(Vic) + Goliath( Vallès Oriental)
119	21/10/2011	The Afganistan Yeye's(La roca) + Extensity(Vic) + Fanxicore dj
120	06/11/2011	Lac la Belle(Usa) + Ask the dust(sfg)
121	12/11/2011	Joseba Irazoki(País Basc)
122	02/12/2011	Suzy y los Quattro(Bcn)
123	14/01/2012	The Brontes(Galicia) + Frednoise dj
124	21/01/2012	Eric fuentes y el mal menor(Bcn)
125	04/02/2012	Her only Presence(Bcn) + Dj Ecualizador
126	18/02/2012	(lo:muêso)(Maresme)
127	01/03/2012	Last Days of April(Suècia) + Bullitt(Sfg)
128	25/03/2012	Leatherface (Uk) + Turnstile(Manlleu) + Trïopical Iceland(torelló)
129	12/05/2012	Betunizer(València) + Dj Brotx
130	07/06/2012	III Actitud Fest 17 grups
131	29/06/2012	Human Ashtray(Vidreres)+ Criatures Fastigoses(Vidreres)
132	30/08/2012	Human Ashtray(Vidreres) + Klan Fukushima(Banyoles) + Trempant(Riudarenes)
133	10/11/2012	Joan Colomo(Sant Celoni) + Eric Fuentes y el mal menor(Bcn) + Lazy juo(Sfg)
134	16/11/2012	Hurricäde(Girona) + Aliment(Girona) + The Lizards(Bcn) +Please Wait(Sfg)
135	20/12/2012	Duncan redmnonds(Uk) + The missing Leech(Sant joan de Vilatorrada)
136	22/12/2012	Burning Bus(Vidreres) + The dealers + Human Ashtray + El secreto de dorothy malone + illinoise
137	03/04/2013	Willis Drummond(Fr) + Tröpical Iceland(Torelló)
138	11/04/2013	Willis Drummnod(Fr)
139	12/04/2013	Willis Drummond(Fr) + illinoise(Vidreres)
140	06/06/2013	IV Actitud fest : 16 grups
141	03/08/2013	Tempant(Riudarenes) + Benzine(Blanes) + illinoise(Vidreres)
142	29/08/2013	Please Wait(Sfg) + Craitures Fastigoses(Vidreres) + I'M(Manlleu)
143	11/10/2013	Bitch Queens( Suissa) + Impúdics(Palafrugell)
144	20/12/2013	Festa aniversari 10 anys: 10 grups
145	18/01/2014	Sed non satiata(Fr) + Hurricäde+ illinoise + the luju dj
146	24/01/2014	The Holybuttons(Bcn) + Impúdics
147	29/01/2014	Willis Drummond(fr) + frednoise Dj
148	22/02/2014	Esperit(sant Celoni) + Ask the dust(Sfg)
149	22/03/2014	Go Popitas(Hospitalet) + The Crazies(Palafrugell)
150	12/04/2014	Savage Riposte(Fr) + storm dj
151	26/04/2014	Romanes(Bcn) + El Secreto de dorothy malone(Vidreres)
152	07/06/2014	Crim(Tarragona) + Rot(Empordà)
153	12/07/2014	Hidden Cabins(Usa) + Siren and Shelter(Uk)
154	15/07/2014	V Actitud fest: 23 grups
155	03/10/2014	Feed me more(itàlia) + Himura(saragossa) + Criatures Fastigoses(Vidreres)
156	17/10/2014	Rvivr(Usa) + Anchord(Sarrià de ter)
157	28/11/2014	TCN(Sant Feliu de Codines) + FP(Vic)
158	12/12/2014	Autodestrucció(Hostalric) + Rot(Empordà)
159	18/12/2014	Viva Belgrado(Córdoba)
160	20/12/2014	Rouille(saragossa) +Enze(Torelló)
161	21/02/2015	La Tosca Brava(Girona) + Frednoise dj
162	29/03/2015	Trono de sangre(Madrid) + Rebuig(Bcn)
163	10/04/2015	Betunize(València) + Frednoise dj
164	11/04/2015	Navratilova(Sfg)
165	12/04/2015	FOD (Bélgica) + How to fuck it(Anglès)
166	24/04/2015	Territori under: Hurricäde + Anchord + Navratilova + Trave cigar box
167	09/05/2015	No more lies + Hurricäde +Descubriendo a Mr. Mime + Frednoise dj
168	15/05/2015	The Gamits(usa) + Dwayne(usa)
169	27/05/2015	No//Sé (Usa) + Kathon(Cassà de la Selva)
170	29/05/2015	Human Ashtray(Vidreres) + Heresic Synopsis(Fr)
171	31/07/2015	VI Actitud Fest : 21 grups
172	24/09/2015	Peter Black (Austalia) + Forest Pooky (Fr)
173	10/10/2015	Rvivr(Usa) + Molly G(Torrelles de Llobregat)
174	13/11/2015	(lo:muêso)(Maresme) + Cala Vento(Empordà) + frednoise dj
175	04/12/2015	Shut up twist again(Fr) + Bruts(Vidreres)
176	05/12/2015	Mike noegraf(Fr) + Joan Colomo(Sant Celoni) + Navratilova(Sfg)
177	06/12/2015	Joana Serrat(Vic) + The Lake Poets(Uk)
178	27/12/2015	The Smudjas (Itàlia) + Tano! (Girona)
179	28/03/2016	The Capaces + Disaster jacks
180	09/04/2016	Za(Bcn) + Ekiza(País basc)+Cala vento(Empordà) + Matagalls(Montseny)
181	17/04/2016	Mike noegraf(Fr)    
182	20/05/2016	Wild animals(Madrid) + Síctor Valdaña and check this outs(Bcn)
183	17/06/2016	Not Scientists(Fr) + Bullitt(Sfg)
184	29/07/2016	VII Actitud Fest: 22 grups
185	09/09/2016	Bitpart(Fr) + Crows an Wra (Uk)
186	08/10/2016	Western Settings(Usa) + Fòbia(Manlleu)
187	17/10/2016	Viva Belgrado(Córdoba) + Nucli(Aiguafreda) + Dra. Golsfoot dj!
188	30/10/2016	Not On tour(israel) + Duncan Redmonds(Uk) + How to fuck it(Anglès)
189	12/11/2016	Galgo(Elche) + Mendra(Sfg)
190	25/11/2016	Señor No(País Basc) + Drinkin brothers djs(Girona)
191	08/12/2016	Paul Fuster(Usa-cat) + Xavier Calvet(Sfg)
192	09/12/2016	Cálido home(Bcn) + Les cruet(Sant Celoni) + Hugo Race(Autralia)
193	10/12/2016	Sr. Chinarro(Sevilla) + Cala vento(Empordà)
194	27/01/2017	Human ashtray + Billi idiot + 
195	24/02/2017	Tokio sex destruction(Vilanova) + Bad mongos(Palafrugell)
196	07/04/2017	Rollercoaster kills(Madrid) + Cruise(Girona)
197	26/05/2017	Clorox Boy dj + Kim jong punk dj + Unclu garrot dj Bar la Pedra-Girona
198	27/05/2017	Caves(Uk) + Bullitt(SFG) + Dj Batrans
199	28/07/2017	Actitud Fest 2017
200	21/10/2017	Jamie 4 President(Malaga) + Llacuna(Girona) + Topsy turvy's(França)
201	11/11/2017	Tim Vantol(Holanda) + Tim Van Doorn(Belgica) IV Folkyou
202	12/11/2017	Matthew Mcdaid(Belfast) IV Folkyou 2017
203	02/12/2017	Lawine(Holanda) + Panellet (Terrassa) + Dj Morlac
204	26/01/2018	Ekiza(Baiona) Al Casal el Forn de Girona
205	28/01/2018	Ekiza(Baiona) Bar la Piscina
206	16/02/2018	Tunic(Canadà) + Mas Squad(Bcn)
207	29/04/2018	Xavier Calvet (Sant Feliu de guíxols) Bar la Piscina
208	01/05/2018	Heavy Heart(França) + Morgan Cash(Llançà) Bar la piscina
209	18/05/2018	Aina(Bcn) + Vistalegre(SFG) + Les Cruet (Montseny) Bar la Piscina
210	25/05/2018	Cuello (València) + Aldrin y Collins(Bcn) Bar la Piscina
211	27/07/2018	Actitud Fest 2018
212	08/12/2018	Not Scientists(Fr) + Serpent(Bcn)
213	01/02/2019	Anteros(Bcn) + Runa(Bcn)
214	16/02/2019	illinoise(Vidreres) + Ansiä(Hospitalet) + Bonestorm(Vic)
215	04/05/2019	Dave Smalley&Bandoleros(Usa) + Sictor Valdaña(Bcn) 
216	18/07/2019	Actitud Fest 2019
217	10/11/2019	Alba(EH)
218	23/11/2019	Salina(Bcn) + Secondbest(Bcn) + Bomba de humo djs
219	01/12/2019	Eric Fuentes (Bcn)
220	24/01/2020	The Blackjaw(Madrid) + Llacuna (Girona)
221	07/02/2020	The Overjoyed(Grècia) + Fetus (La Bisbal d'Empordà)
222	15/02/2020	Kugo (Madrid) + Copdemar (Girona)
223	08/03/2020	Xavier Calvet (Sant Feliu de guíxols) + banda  Bar la Piscina
224	08/09/2022	Actitud Fest 2022
225	28/01/2023	Johnny Mafia (França) + Sonic Beast (Sant Feliu Guíxols) Sala Vol-Bcn
226	29/01/2023	Johnny Mafia (França) + Sonic Beast (Sant Feliu Guíxols) Atzavara-SFG
227	16/06/2023	Bullitt(SFG) + Secondbest(Bcn) Sala Vol-Bcn
228	20-21-22/7/23	Actitud Fest 2023-Vidreres
229	20/04/2024	Johnny Mafia (França) + Sonic Beast (Sfg) Gransrecords Lleida
230	21/04/2024	Johnny Mafia(França) + Sonic beast Sala ATV Sarrià de Ter
231	28-29/6/24	Actitud Fest 24 -Vidreres
232	22/09/2024	It It Anita (Bèlgica) + iou3R (Maresme) Sala ATV-Sarrià de Ter
233	01/03/2025	Las Nubes(USA) + Fajardo (Canaries)
234	09/05/2025	Aerial Salad(UK)+Flamsteed(Bcn)
235	27-28/06/2025	Actitud Fest 2025
236	20/09/2025	Polifeme (València) -Teatre Vidreres`;

const archiveEntries = archiveData.split('\n').map((line) => {
  const [number, date, ...rest] = line.split('\t');
  return {
    number,
    date,
    bands: rest.join('\t'),
  };
});

const groupedArchive = archiveEntries.reduce((acc, entry) => {
  const parts = entry.date.split('/');
  const rawYear = parts[parts.length - 1];
  const year = rawYear.length === 2 ? `20${rawYear}` : rawYear;

  if (!acc[year]) {
    acc[year] = [];
  }

  acc[year].push(entry);
  return acc;
}, {});

const archiveYears = Object.keys(groupedArchive).sort();

function About() {
  const { t } = useLanguage();

  return (
    <>
      <div className='bg-black text-white'>
        <section className='bg-[#f4f1ec] px-6 lg:py-18 py-10 pb-0 text-black sm:px-10 lg:px-16'>
          <div className='mx-auto w-full max-w-[1200px]'>
            <div className='overflow-hidden rounded-xl border border-1 border-black/10'>
              <img
                src='/about/actitud-about.jpg'
                alt='Actitud Fest'
                className='h-[220px] w-full object-cover sm:h-[280px] lg:h-[540px]'
              />
            </div>
          </div>
        </section>

        <section className='bg-[#f4f1ec] px-6 py-16 text-black sm:px-10 lg:px-16'>
          <div className='mx-auto w-full max-w-[1200px]'>
            <div className='grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'>
              <div className='max-w-sm'>
                <h1 className=' text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
                  {t('about.associacioSoroll')}
                </h1>
              </div>

              <div className='max-w-3xl space-y-5 text-sm leading-relaxed text-black/72 sm:text-[15px]'>
                <p>{t('about.about1')}</p>

                <p>{t('about.about2')}</p>

                <p>{t('about.about3')}</p>

                <p>{t('about.about4')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[#f4f1ec] px-6 py-16 text-black sm:px-10 lg:px-16'>
          <div className='mx-auto w-full max-w-[1200px]'>
            <div className='grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'>
              <div className='max-w-sm'>
                <h2 className='text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl'>
                  {t('about.arxiuConcerts')}
                </h2>
              </div>

              <div className='space-y-8'>
                {[...archiveYears].reverse().map((year) => (
                  <section
                    key={year}
                    className='border-t border-black/10 pt-5 first:border-t-0 first:pt-0'
                  >
                    <div className='sticky top-16 z-10 mb-4 w-fit rounded-full border border-black/10 bg-[#f4f1ec]/95 px-3 py-1 backdrop-blur'>
                      <p className='text-[11px] font-black uppercase tracking-[0.2em] text-black/55'>
                        {year}
                      </p>
                    </div>

                    <div className='space-y-2'>
                      {[...groupedArchive[year]].reverse().map((entry) => (
                        <article
                          key={entry.number}
                          className='grid gap-2 rounded-lg border border-black/8 bg-black/[0.02] px-4 py-3 sm:grid-cols-[72px_110px_minmax(0,1fr)] sm:items-start sm:gap-4'
                        >
                          <p className='text-[11px] font-black uppercase tracking-[0.18em] text-black/45'>
                            #{entry.number}
                          </p>
                          <p className='text-[11px] font-black uppercase tracking-[0.16em] text-black/52'>
                            {entry.date}
                          </p>
                          <p className='text-sm leading-relaxed text-black/72'>
                            {entry.bands}
                          </p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
