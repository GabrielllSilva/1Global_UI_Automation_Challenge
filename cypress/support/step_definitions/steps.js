import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import Pages from '../pages/pages';

// 001_Homepage.feature
Given('i go to better roaming homepage', () => {
    const betterroaming = new Pages;

    betterroaming.homepage();
})

When('i close the cookies pop up', () => {
    const betterroaming = new Pages;

    betterroaming.agreeCookies();
})

Then('must be showed the homepage', () => {
    const betterroaming = new Pages;

    betterroaming.iconHomepage();
    betterroaming.bannerText();
    betterroaming.bannerTextCompl();
    betterroaming.getFreeSIM();
    betterroaming.printEvidence();
    
})

// 002_selectEuro.feature

Given('i am on better roaming website', () => {
    const betterroaming = new Pages;

    betterroaming.homepage();
    betterroaming.agreeCookies();
})

When('i switch the actual currency to Euro', () => {
    const betterroaming = new Pages;

    betterroaming.openBurgerMenu();
    betterroaming.clickActualCurrency();
    betterroaming.searchACurrency();
    betterroaming.selectNewCurrency();
})

Then('must be showed EUR € on top header', () => {
    const betterroaming = new Pages;

    betterroaming.openBurgerMenu();
    betterroaming.currencyUpdated();
    betterroaming.printEvidence();
    
})

// 003_clickOnThailand.feature

When('i search and click on Thailand', () => {
    const betterroaming = new Pages;

    betterroaming.openBurgerMenu();
    betterroaming.clickActualCurrency();
    betterroaming.searchACurrency();
    betterroaming.selectNewCurrency();
    betterroaming.goToDestinationPage();
    betterroaming.selectCountry();
})

Then('must be loaded the plans for Thailand', () => {
    const betterroaming = new Pages;

    betterroaming.mainThailandDisclaimer();
    betterroaming.secondThailandDisclaimer();
    betterroaming.printEvidence();
})

// 004_checkThirdPlan.feature

Then('on Plans page, the third plan must be show the expected values to this challenge', () => {
    const betterroaming = new Pages;

    betterroaming.thirdPlan();
    betterroaming.checkCountries();
    betterroaming.checkCountriesExpected();
    betterroaming.checkData();
    betterroaming.checkDataExpected();
    betterroaming.checkValid();
    betterroaming.checkValidExpected();
    betterroaming.checkPlanType();
    betterroaming.checkPlanTypeExpected();
    //betterroaming.printEvidence();
})
