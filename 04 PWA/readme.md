# Progressive Web Apps

## Angular Progressive Web Apps

#### Create Project with Service Worker

```
ng new pwaBoilerplate
cd pwaBoilerplate
ng add @angular/pwa --project pwaBoilerplate
```

Important: Make sure your Server supports http/2

#### Device Testing

For Device Testing it might be helpful to set env to local machine Important

```
export const environment = {
  production: false,
  googleApiKey: "********",
  appName: "smart Sammler",  
  apiURL: "http://172.30.30.110:5000/api/"
};
```

#### Chrome Trusted \*.pem Certificate

- Run .NET Core as stated above
- Trust the Certificate
- Go to Chrome Settings -> Advanced -> Manage Certificates
- Export the "localhost" cert to \*.pfx including private key
- Install OpenSSL from '00 Bin'
- Go to OpsenSSL InstallFolder\bin\openssl.exe
- Execute `pkcs12 -in c:\cert.pfx -out c:\certificate.pem -nodes`
- Copy Certificate to dist

#### Using Http-Server

```
npm install http-server -g
ng build --prod
cd .\dist\pwaBoilerplate\
http-server |
```

and run: `ng serve --host 0.0.0.0`

## Tools

[Chrome Beta Channel](https://www.google.com/chrome/browser/beta.html)

[Chrome Updates for Emulators](https://www.apkmirror.com/apk/google-inc/chrome/#variants)

[PWAs on Windows Dev Center](https://developer.microsoft.com/en-us/windows/pwa)

[Getting Started with Lighthouse](https://developers.google.com/web/tools/lighthouse/)

[Web-Push-Libs](https://github.com/web-push-libs/web-push)

[Open Port Detection Tool](https://www.yougetsignal.com/tools/open-ports/)

## Links & Readings

[manifest.json Reference](https://developers.google.com/web/fundamentals/web-app-manifest/)

[Fine Tuning PWAs](https://medium.com/progressive-web-apps/2018-state-of-progressive-web-apps-f7517d43ba70)

[Turn exisitung Angular App into PWA](https://blog.angular-university.io/angular-service-worker/)

[Create \*.pem-Certificate](https://www.cloudinsidr.com/content/how-to-install-the-most-recent-version-of-openssl-on-windows-10-in-64-bit/)

[Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers/)

# Weiterführende & Verwante ETC Kurse

[smart Angular Single Page Application Development ](https://www.etc.at/seminare/sAJS2NET/)
