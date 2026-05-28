# Cypress Lab — Skoluppgift i testning

Detta är ett litet skolprojekt för att lära mig testning i moderna webbutvecklingsverktyg. Projektet innehåller en enkel React-applikation skriven i TypeScript och exempel på både komponent- och end-to-end-testning med Cypress.

Syfte
- Öva på att skriva automatiserade tester (E2E och komponenttester).
- Lära sig konfigurera och använda Cypress tillsammans med Vite + React + TypeScript.

Projektets innehåll
- App: Yatzy implementerad med React + TypeScript.
- Tester: Exempel på komponenttester och end-to-end-tester finns i `cypress/component` och `cypress/e2e`.

Tech stack
- Node.js + npm
- Vite (snabb utvecklingsserver och bundler)
- React
- TypeScript
- Cypress (E2E och komponenttester)

Kom igång
1. Installera beroenden:

```bash
npm install
```

2. Starta utvecklingsservern:

```bash
npm run dev
```

3. Kör Cypress (interaktivt):

```bash
npx cypress open    # öppnar Test Runner för E2E-tester
npx cypress open-ct # öppnar Cypress component testing (om konfigurerat)
```

4. Kör Cypress headless (CI / terminal):

```bash
npx cypress run      # kör E2E-tester
npx cypress run-ct   # kör component tests (om konfigurerat)
```

```
