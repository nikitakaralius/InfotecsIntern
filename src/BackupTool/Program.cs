Log.Logger = new LoggerConfiguration()
             .WriteTo.Console()
             .CreateLogger();

string configurationPath = EnsureCorrectPath(firstLookAt: "./configuration.json");

IConfiguration configuration = new JsonConfiguration(configurationPath);

try
{
    var appConfiguration = await configuration.LoadAsync<AppConfiguration>();
    var sourceDirectories = MapSourceDirectories(from: appConfiguration);
    var outputDirectory = BackupOutputDirectory.Create(
        appConfiguration.OutputDirectory, directory =>
        {
            Log.Error("Directory {Directory} can not be found. Do you want to create a new one?\n" +
                      "{Yes} / {No}", directory, "[Y]es", "[N]o");
            string input = Console.ReadLine()!.ToLower();
            return input == "y";
        });
}
catch (Exception e)
{
    Log.Error("{Error}", e.Message);
}
