import {test, expect} from '@playwright/test';
import {Loginpage} from '../pages/LoginPage';
const testData=JSON.parse(JSON.stringify(require("../data/TestData.json")));
const envUrl=JSON.parse(JSON.stringify(require("../config/EnvUrls.json")));


test('login', async({page})=>{
    const loginpage = new Loginpage(page);
    await loginpage.baseurl(envUrl.baseUrl);
    await loginpage.login(testData.username, testData.password);
    await page.waitForTimeout(3000);

})