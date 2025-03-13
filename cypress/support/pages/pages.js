import 'cypress-iframe';

class Pages{

    get cookiesPage(){
        return cy.clearAllCookies();
    }
    
    get catchScreenshot(){
        return cy.screenshot();
    }

    get urlbetterroaming(){
        return cy.visit('https://www.betterroaming.com/');
    }

    get agreePopUpCookies(){
        return cy.get('#usercentrics-root').shadow().find('[data-testid="uc-accept-all-button"]');
    }

    get betterroamingicon(){
        return cy.get('.col-span-2 > .cursor-pointer > img');
    }

    get homepageBannerText(){
        return cy.get('.text-\\[32px\\]');
    }

    get homepageSecondBannerText(){
        return cy.get('astro-island > p');
    }

    get freeSimBtn(){
        return cy.get('.desktop\\:hidden.mt-2 > astro-island > .bg-white');
    }

    get burgerMenu(){
        return cy.get('.desktop\\:hidden > img');
    }

    get currency(){
        return cy.get('.gap-x-4 > .cursor-pointer > :nth-child(2)');
    }

    get searchCurrency(){
        return cy.get('.max-w-\\[440px\\] > .flex > .w-full');
    }

    get newCurrency(){
        return cy.get('.grid > .border-2');
    }

    get currencyContainer(){
        return cy.get('.gap-x-4 > .cursor-pointer > :nth-child(2)');
    }

    get allDestinationBtn(){
        return cy.get('.py-8 > .hover\\:bg-\\[\\#0E21C6\\]');
    }

    get searchCountry(){
        return cy.contains('Thailand');
    }

    get thailandDisclaimer1(){
        return cy.get('.py-\\[80px\\] > .relative > .text-\\[20px\\]');
    }

    get thailandDisclaimer2(){
        return cy.get('h3.text-white');
    }

    get planthree(){
        return cy.get(':nth-child(2) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > .rounded-full');
    }

    get countries(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > .pb-2 > .flex');
    }

    get countriesExpected(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > .pb-2 > .underline');
    }

    get data(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > :nth-child(2) > .flex');
    }

    get dataExpected(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > :nth-child(2) > .bg-\\[\\#F8F8FF\\]');
    }

    get valid(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > :nth-child(3) > .flex');
    }

    get validExpected(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > :nth-child(3) > .bg-\\[\\#F8F8FF\\]');
    }

    get planType(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > .pb-3 > .flex');
    }

    get planTypeExpected(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > .pb-3 > p');
    }

    get price(){
        return cy.get(':nth-child(3) > .bg-white > .border-\\[\\#DBF879\\] > .flex-col > .text-\\[24px\\]');
    }

    checkCurrentPrice(){
        this.price.should('have.text', '€11.19');
    }

    checkPlanTypeExpected(){
        this.planTypeExpected.should('have.text', ' Data only');
    }

    checkPlanType(){
        this.planType.should('have.text', 'Plan type');
    }

    checkValidExpected(){
        this.validExpected.should('have.text', ' 30 DAYS');
    }

    checkValid(){
        this.valid.should('have.text', 'Valid');
    }

    checkDataExpected(){
        this.dataExpected.should('have.text', ' 5 GB ');
    }

    checkData(){
        this.data.should('have.text', 'Data');
    }

    checkCountriesExpected(){
        this.countriesExpected.should('have.text', 'Thailand')
    }

    checkCountries(){
        this.countries.should('have.text', 'Countries');
    }

    thirdPlan(){
        this.planthree.scrollIntoView();
    }

    secondThailandDisclaimer(){
        this.thailandDisclaimer2.should('have.text', 'Discover the best eSIM for Thailand - cheap and reliable data plans for stress-free travel.')
    }

    mainThailandDisclaimer(){
        this.thailandDisclaimer1.should('have.text', 'eSIM Thailand: Best Data and Roaming Plans for Travel');
    }

    selectCountry(){
        this.searchCountry.scrollIntoView().click();
    }

    goToDestinationPage(){
        this.allDestinationBtn.scrollIntoView().click();
    }

    currencyUpdated(){
        this.currencyContainer.should('have.text', 'EUR €');
    }

    selectNewCurrency(){
        this.newCurrency.click();
    }

    searchACurrency(){
        this.searchCurrency.type('Euro');
    }

    clickActualCurrency(){
        this.currency.click();
    }

    openBurgerMenu(){
        this.burgerMenu.click();
    }

    getFreeSIM(){
        this.freeSimBtn.should('have.text', 'Get free eSIM').should('be.visible');
    }

    bannerTextCompl(){
        this.homepageSecondBannerText.should('have.text', 'Install your FREE eSIM now!');
    }

    bannerText(){
        this.homepageBannerText.should('have.text', ' eSIM - stay connected anytime, anywhere! ');
    }

    iconHomepage(){
        this.betterroamingicon.should('be.visible');
    }

    agreeCookies(){
        this.agreePopUpCookies.click();
    }

    homepage(){
        this.urlbetterroaming;
    }

    printEvidence(){
        this.catchScreenshot;
    }

    clearAllCookiesPage(){
        this.cookiesPage;
    }

}

export default Pages;