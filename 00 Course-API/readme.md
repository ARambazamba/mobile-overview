# smartSammler REST Api

Requires [.NET Core SDK v2.1.4](https://www.microsoft.com/net/download/thank-you/dotnet-sdk-2.1.4-windows-x64-installer) and SQL Standard or Enterprise to be installed locally. If you want to use another version change connection string in appsettings.json.

Don't forget to create SQL Login "angular" with pwd "angular" as Sysadmin.

## Start smartSammler REST Api

Go to folder where \*.csproj is located, open console and run:

`dotnet restore` and then  
`dotnet run`

For device testing it might be helpful to enable remote access - by default the .Net Core API is only available using `http://localhost:PORT/`

`dotnet run --urls http://0.0.0.0:5000`
