Log.Logger = new LoggerConfiguration()
             .WriteTo.Console()
             .CreateLogger();

string configurationPath = EnsureCorrectPath(firstLookAt: "./configuration.json");

IConfiguration configuration = new JsonConfiguration(configurationPath);

AppConfiguration appConfiguration;

try
{
    appConfiguration = await configuration.LoadAsync<AppConfiguration>();
}
catch (Exception e)
{
    Log.Error("Unable to load configuration: {Error}", e.Message);
    return;
}

