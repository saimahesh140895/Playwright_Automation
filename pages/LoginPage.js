exports.Loginpage=
class LoginPage{

    constructor(page){
        this.page=page;
        this.username = page.locator('//input[@data-qa="login-email"]');
        this.password = page.locator('//input[@data-qa="login-password"]');
        this.loginbutton = page.locator('//button[@data-qa="login-button"]');
    }

    async baseurl(url){
        this.page.goto(url);
    }

    async login(user, pass){
       await this.username.fill(user);
       await this.password.fill(pass);
       await this.loginbutton.click();

    }

}