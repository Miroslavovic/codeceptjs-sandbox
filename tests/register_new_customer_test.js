Feature('login');

Scenario('test dummy happy path', (I) => {
    I.amOnPage('/index.php?controller=authentication&back=my-account')
    I.fillField('email_create', 'dummy_test_mirosavovic123456@testNull.cz') //must be unique in dummy version 
    I.click('SubmitCreate')
    I.checkOption('//*[@id="id_gender1"]')
    I.fillField('customer_firstname', 'Pan')
    I.fillField('customer_lastname', 'Jan')
    I.fillField('passwd', '12345')
    I.selectOption('days', '2')
    I.selectOption('months', '3')
    I.selectOption('years', '1990')
    I.checkOption('//*[@id="newsletter"]')
    I.checkOption('//*[@id="optin"]')
    I.fillField('firstname', 'Pan')
    I.fillField('lastname', 'Jan')
    I.fillField('company', 'Firma')
    I.fillField('address1', 'Happy Place')
    I.fillField('address2', '666')
    I.fillField('city', 'Beaver Dam')
    I.selectOption('//*[@id="id_state"]', 'Kentucky')
    I.fillField('postcode', '41008')
    I.fillField('other', 'Blabla')
    I.fillField('phone', '123456789')
    I.fillField('phone_mobile', '1234567890')
    I.fillField('alias', 'My address')
    I.click('submitAccount')
    I.seeCurrentUrlEquals('/index.php?controller=my-account')

    I.wait(5)
});
