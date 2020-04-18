const faker = require('faker'); 

Feature('login');

Scenario('test happy path', (I) => {
    I.amOnPage('/index.php?controller=authentication&back=my-account')
    I.fillField('email_create', faker.internet.exampleEmail())
    I.click('SubmitCreate')
    I.checkOption('//*[@id="id_gender1"]')
    I.fillField('customer_firstname', faker.name.firstName())
    I.fillField('customer_lastname', faker.name.lastName())
    I.fillField('passwd', faker.internet.password())
    I.selectOption('days', '2')
    I.selectOption('months', '3')
    I.selectOption('years', '1990')
    I.checkOption('//*[@id="newsletter"]')
    I.checkOption('//*[@id="optin"]')
    //I.fillField('firstname', 'Pan')
    //I.fillField('lastname', 'Jan')
    I.fillField('company', 'Firma')
    I.fillField('address1', 'Happy Place')
    I.fillField('address2', '666')
    I.fillField('city', 'Beaver Dam')
    I.selectOption('//*[@id="id_state"]', 'Kentucky')
    I.fillField('postcode', '41008')
    I.fillField('other', 'Blabla')
    I.fillField('phone', faker.phone.phoneNumberFormat())
    I.fillField('phone_mobile', faker.phone.phoneNumberFormat())
    I.fillField('alias', 'My address')
    I.click('submitAccount')
    I.seeCurrentUrlEquals('/index.php?controller=my-account')
    I.see('Welcome to your account', '.container');

    I.wait(5)
});




