// JavaScript for Lupus in Fabula Tabellone

// Card role definitions with real game roles
const cardRoles = {
    coppe: {
        asso: {
            name: "Asso di Coppe",
            role: "Lupo",
            team: "CATTIVI",
            info: "UNA VOLTA PER NOTTE, verranno svegliati dal Narratore. Di comune accordo sceglieranno un giocatore da eliminare.",
            objective: "Il numero di <span class=\"team-evil\">LUPI</span> vivi deve essere la metà dei giocatori restanti."
        },
        4: {
            name: "Quattro di Coppe",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        5: {
            name: "Cinque di Coppe",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        7: {
            name: "Sette di Coppe",
            role: "Amante",
            team: "BUONI",
            info: "Ruolo di coppia (idenarin coppia con il 7 di denari). La prima notte entrambi gli amanti si sveglieranno per conoscersi.<br><br>• Se uno dei due amanti VIENE ELIMINATO TRAMITE VOTAZIONI, il secondo amante morirà la notte successiva;<br><br>• Se uno dei due amanti VIENE UCCISO DI NOTTE, all'altro amante verrà indicato l'uccisore, dopodiché giocherà come CONTADINO mantenendo tuttavia il ruolo di AMANTE",
            objective: "A fine partita, ENTRAMBI gli amanti devono essere in vita."
        },
        9: {
            name: "Nove di Coppe",
            role: "Giullare",
            team: "NEUTRI",
            info: "Non ha poteri.",
            objective: "Deve farsi eliminare tramite VOTAZIONE dagli altri giocatori."
        },
        10: {
            name: "Dieci di Coppe",
            role: "Il Matto",
            team: "NESSUNO",
            info: "Questo ruolo è considerato come <span class=\"team-neutral\">NEUTRO</span>.<br><br>Quando viene eliminato si attiverà casualmente uno di questi effetti:<br><br>1. Nessun effetto;<br>2. Ruba la carta di un giocatore casuale;<br>3. Ruba la carta di un giocatore a scelta;<br>4. Sceglie una carta dal mazzo degli eliminati;<br>5. Inverte <span class=\"team-good\">CONTADINI</span> e <span class=\"team-evil\">LUPI</span>;<br>6. Il giocatore sopravvive e tutte le carte ruolo (ad eccezione de <span class=\"team-grey\">IL MATTO</span>) vengono riconsegnate, mescolate e ridistribuite ai giocatori ancora vivi.",
            objective: "Essere mattissimo"
        }
    },
    denari: {
        asso: {
            name: "Asso di Denari",
            role: "Lupo",
            team: "CATTIVI",
            info: "UNA VOLTA PER NOTTE, verranno svegliati dal Narratore. Di comune accordo sceglieranno un giocatore da eliminare.",
            objective: "Il numero di <span class=\"team-evil\">LUPI</span> vivi deve essere la metà dei giocatori restanti."
        },
        2: {
            name: "Due di Denari",
            role: "Vigilante",
            team: "BUONI",
            info: "UNA VOLTA A PARTITA, durante le VOTAZIONI può rivelarsi girando la carta. A questo punto il giocatore sceglierà una persona che sarà eliminata direttamente:<br><br>• Se la persona eliminata ha un ruolo <span class=\"team-evil\">CATTIVO</span> o <span class=\"team-neutral\">NEUTRO</span>, il vigilante sopravviverà e giocherà come CONTADINO;<br><br>• Se la persona eliminata ha un ruolo <span class=\"team-good\">BUONO</span>, il vigilante morirà il giorno successivo.<br><br>Il giocatore ucciso dal vigilante è considerato come VOTATO FUORI.",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        4: {
            name: "Quattro di Denari",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        5: {
            name: "Cinque di Denari",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        6: {
            name: "Sei di Denari",
            role: "Dealbraker",
            team: "BUONI",
            info: "Il suo voto vale 1.1, eliminando le situazioni di parità. Il voto verrà aggiunto segretamente dal Narratore, quindi il giocatore NON dovrà rivelare il suo ruolo.",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        7: {
            name: "Sette di Denari",
            role: "Amante",
            team: "BUONI",
            info: "Ruolo di coppia (in coppia con il 7 di coppe). La prima notte entrambi gli amanti si sveglieranno per conoscersi.<br><br>• Se uno dei due amanti VIENE ELIMINATO TRAMITE VOTAZIONI, il secondo amante morirà la notte successiva;<br><br>• Se uno dei due amanti VIENE UCCISO DI NOTTE, all'altro amante verrà indicato l'uccisore, dopodiché giocherà come CONTADINO mantenendo tuttavia il ruolo di AMANTE",
            objective: "A fine partita, ENTRAMBI gli amanti devono essere in vita."
        },
        8: {
            name: "Otto di Denari",
            role: "Veggente",
            team: "BUONI",
            info: "UNA VOLTA PER NOTTE, verrà chiamato dal Narratore. Il giocatore sceglierà un bersaglio:<br><br>• Se il bersaglio ha un ruolo <span class=\"team-evil\">CATTIVO</span> o <span class=\"team-neutral\">NEUTRO</span>, il Narratore farà un cenno POSITIVO;<br><br>• Se il bersaglio ha un ruolo <span class=\"team-good\">BUONO</span>, il Narratore farà un cenno NEGATIVO.",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        9: {
            name: "Nove di Denari",
            role: "Detective",
            team: "BUONI",
            info: "UNA VOLTA PER DISCUSSIONE, fino ad un massimo di 2 VOLTE A PARTITA potrà dichiararsi girando la carta e scegliere 2 bersagli (escluso se stesso). Il Narratore dirà se i bersagli appartengono alla stessa categoria (<span class=\"team-good\">BUONO</span>, <span class=\"team-evil\">CATTIVO</span> o <span class=\"team-neutral\">NEUTRO</span>).",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        10: {
            name: "Dieci di Denari",
            role: "Guardia",
            team: "BUONI",
            info: "UNA VOLTA PER NOTTE, verrà chiamato dal Narratore. Il giocatore sceglierà un bersaglio (compreso se stesso). Per quella notte, il suo bersaglio non potrà essere ucciso. La guardia NON può proteggere la stessa persona due notti di fila.",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        }
        
    },
    bastoni: {
        asso: {
            name: "Asso di Bastoni",
            role: "Lupo",
            team: "CATTIVI",
            info: "UNA VOLTA PER NOTTE, verranno svegliati dal Narratore. Di comune accordo sceglieranno un giocatore da eliminare.",
            objective: "Il numero di <span class=\"team-evil\">LUPI</span> vivi deve essere la metà dei giocatori restanti."
        },
        2: {
            name: "Due di Bastoni",
            role: "Lupo Solitario",
            team: "NEUTRI",
            info: "Una volta OGNI 2 NOTTI, a partire dalla seconda notte, può scegliere un bersaglio che verrà ucciso. Il lupo solitario IGNORA eventuali scudi.",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>."
        },
        4: {
            name: "Quattro di Bastoni",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        5: {
            name: "Cinque di Bastoni",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        8: {
            name: "Otto di Bastoni",
            role: "Appestato",
            team: "NEUTRI",
            info: "Quando un giocatore sceglie L'APPESTATO come bersaglio, verrà infettato e a sua volta potrà infettare gli altri giocatori con cui interagirà. Nel caso dei <span class=\"team-evil\">LUPI</span>, solo uno di questi verrà infettato secondo un criterio a scelta del Narratore (es. altezza, ordine alfabetico, ecc.)<br><br>Inoltre, la prima notte potrà indicare un giocatore da infettare.",
            objective: "Infettare tutti i giocatori rimasti in vita, anche se L'APPESTATO è morto."
        },
        10: {
            name: "Dieci di Bastoni",
            role: "Profeta",
            team: "NEUTRI",
            info: "UNA VOLTA durante la discussione, può mandare un messaggio al Narratore indicando il nome di 3 giocatori (anche se morti) a cui viene associato un ruolo.<br><br>NON si può associare lo stesso ruolo a due giocatori diversi (es. si potrà associare il ruolo del <span class=\"team-evil\">LUPO</span> solo una volta a tentativo).",
            objective: "Associare correttamente il ruolo di tutti e 3 i giocatori contemporaneamente.",
            hasEasterEgg: true
        }
    },
    spade: {
        asso: {
            name: "Asso di Spade",
            role: "Lupo",
            team: "CATTIVI",
            info: "UNA VOLTA PER NOTTE, verranno svegliati dal Narratore. Di comune accordo sceglieranno un giocatore da eliminare.",
            objective: "Il numero di <span class=\"team-evil\">LUPI</span> vivi deve essere la metà dei giocatori restanti."
        },
        2: {
            name: "Due di Spade",
            role: "Sceriffo",
            team: "BUONI",
            info: "UNA VOLTA PER NOTTE, a partire dalla seconda, verrà chiamato dal Narratore. Il giocatore POTRÀ decidere se sparare o meno ad un bersaglio. Se decide di sparare:<br><br>•Se il bersaglio ha un ruolo <span class=\"team-evil\">CATTIVO</span> o <span class=\"team-neutral\">NEUTRO</span>, il bersaglio viene eliminato. <br><br>•Se il bersaglio ha un ruolo <span class=\"team-good\">BUONO</span>, lo sceriffo viene eliminato. <br><br> Si applicano eventuali scudi dati dalla GUARDIA.",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        3: {
            name: "Tre di Spade",
            role: "Pezzo Grosso",
            team: "BUONI",
            info: "Per essere ucciso deve essere scelto come bersaglio 2 volte.<br><br>OGNI DUE NOTTI riceverà tramite messaggio delle informazioni da parte del Narratore (es. quanti <span class=\"team-evil\">CATTIVI</span> sono ancora in vita, dove si trova un lupo, ecc).",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        4: {
            name: "Quattro di Spade",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        5: {
            name: "Cinque di Spade",
            role: "Contadino",
            team: "BUONI",
            info: "Non hanno alcun potere",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        6: {
            name: "Sei di Spade",
            role: "Ricattatore",
            team: "CATTIVI",
            info: "Ogni volta che un <span class=\"team-evil\">LUPO</span> muore, sceglierà un bersaglio al quale bloccherà i poteri per una notte. Il bersaglio NON saprà di questo potere.<br><br>Il RICATTATORE verrà avvisato della morte di un lupo durante la notte tramite un messaggio da parte del Narratore.",
            objective: "Vince insieme ai <span class=\"team-evil\">LUPI</span>."
        },
        8: {
            name: "Otto di Spade",
            role: "Becchino",
            team: "BUONI",
            info: "UNA VOLTA PER DISCUSSIONE, fino ad un massimo di 2 VOLTE A PARTITA potrà dichiararsi girando la carta. Il Narratore gli consegnerà casualmente la metà delle carte dei giocatori eliminati nei turni precedenti.",
            objective: "Eliminare tutti i <span class=\"team-evil\">LUPI</span>"
        },
        9: {
            name: "Nove di Spade",
            role: "Boia",
            team: "NEUTRI",
            info: "La prima notte verrà svegliato dal Narratore il quale indicherà una VITTIMA.<br><br>Se la VITTIMA viene uccisa durante la notte, il <span class=\"team-neutral\">BOIA</span> diventa un <span class=\"team-neutral\">GIULLARE</span>.",
            objective: "Deve far eliminare tramite VOTAZIONE la VITTIMA indicata."
        },
        10: {
            name: "Dieci di Spade",
            role: "Sandro",
            team: "CATTIVI",
            info: "I <span class=\"team-evil\">LUPI</span> conoscono la sua identità ma non viceversa.<br><br>Se SANDRO viene scelto come bersaglio, ucciderà chiunque l'abbia scelto.<br><br>Se viene votato fuori, i <span class=\"team-evil\">LUPI</span> non potranno usare i loro poteri nella notte successiva.<br><br>Se viene scelto come bersaglio dallo <span class=\"team-good\">SCERIFFO</span>, i <span class=\"team-evil\">LUPI</span> PERDONO LA PARTITA.",
            objective: "Vince insieme ai <span class=\"team-evil\">LUPI</span>."
        }
    }
};

function showCard(suit, value) {
    // Check if the card has a role
    if (!cardRoles[suit] || !cardRoles[suit][value]) {
        // Card has no role, don't show overlay
        return;
    }
    
    const card = cardRoles[suit][value];
    
    // Determine team classes with new color scheme
    let teamClass, roleClass;
    if (card.team === 'CATTIVI') {
        teamClass = 'team-evil';
        roleClass = 'role-evil';
    } else if (card.team === 'NEUTRI') {
        teamClass = 'team-neutral';
        roleClass = 'role-neutral';
    } else if (card.team === 'BUONI') {
        teamClass = 'team-good';
        roleClass = 'role-good';
    } else if (card.team === 'NESSUNO') {
        teamClass = 'team-grey';
        roleClass = 'role-grey';
    }
    
    // Create overlay HTML with new structure
    const overlayHTML = `
        <div class="role-overlay" id="roleOverlay" onclick="closeRoleCard()">
            <div class="role-card ${teamClass}" onclick="event.stopPropagation()">
                <div class="card-name">${card.name}</div>
                <div class="role-name ${roleClass}">${card.role}</div>
                <div class="team-badge ${teamClass}">Squadra: ${card.team}</div>
                
                <div class="role-section">
                    <h3 class="section-title">📋 Informazioni</h3>
                    <div class="section-content">${card.info}</div>
                </div>
                
                <div class="role-section">
                    <h3 class="section-title">🎯 Obiettivo</h3>
                    <div class="section-content">${card.objective}</div>
                </div>
                
                ${card.hasEasterEgg ? `
                <button class="easter-egg-button" onclick="showEasterEgg(event)">
                    Ma dov'è il profeta?
                </button>
                ` : ''}
                
                <button class="back-button" onclick="closeRoleCard()">
                    ← Torna al Tabellone
                </button>
            </div>
        </div>
    `;
    
    // Add overlay to the page
    document.body.insertAdjacentHTML('beforeend', overlayHTML);
    
    // Prevent scrolling on the main page
    document.body.style.overflow = 'hidden';
}

function closeRoleCard() {
    const overlay = document.getElementById('roleOverlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = '';
    }
}

function showEasterEgg(event) {
    event.stopPropagation();
    
    // Create easter egg overlay
    const easterEggHTML = `
        <div class="role-overlay" id="easterEggOverlay" onclick="closeEasterEgg()">
            <div class="role-card team-neutral" onclick="event.stopPropagation()"> 
                <div class="role-section">
                    <div class="section-content" style="text-align: center; font-size: 1.5em; font-weight: bold; color: #f39c12;">
                        MA PERCHÉ NON AIUTA?
                    </div>
                </div>
                
                <button class="back-button" onclick="closeEasterEgg()">
                    Chiudi
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', easterEggHTML);
}

function closeEasterEgg() {
    const overlay = document.getElementById('easterEggOverlay');
    if (overlay) {
        overlay.remove();
    }
}

// Add some visual feedback when cards are clicked
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    // Add role classes to cards based on their roles
    cards.forEach(card => {
        const suit = card.getAttribute('data-suit');
        const value = card.getAttribute('data-value');
        
        // Check if this card has a role
        if (cardRoles[suit] && cardRoles[suit][value]) {
            const roleData = cardRoles[suit][value];
            if (roleData.team === 'BUONI') {
                card.classList.add('role-good');
            } else if (roleData.team === 'CATTIVI') {
                card.classList.add('role-evil');
            } else if (roleData.team === 'NEUTRI') {
                card.classList.add('role-neutral');
            } else if (roleData.team === 'NESSUNO') {
                card.classList.add('role-grey');
            }
        }
        
        card.addEventListener('click', function() {
            // Add a visual effect when clicked
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Close overlay when clicking outside or pressing escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeRoleCard();
        }
    });
});
