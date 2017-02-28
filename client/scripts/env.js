/** 
 * Currently manages all the top level app congiguration. This will be refactores refactored
 * multiple paths later on.
 */
(function (window) {
    
    window.__env = window.__env || {};
    window.__env.apiUrl = 'https://api.github.com/users/';
    window.__env.baseUrl = 'https://api.github.com/users';
    window.__env.defaultUser = 'madhankumar028';
    window.__env.repoCount = 10;
    window.__env.clientId = 'b7641fc061fbc7eba0ae';
    window.__env.clientSecret = '582f452b977885775b36fd81d8bfe51a5d48e59d';
    window.__env.oAuth = 'https://github.com/login/oauth/authorize';
    window.__env.redirectUri = 'http://www.example.com/oauth_redirect';

}(this));
