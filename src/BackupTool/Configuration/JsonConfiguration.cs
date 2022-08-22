using System.Text.Json;

namespace BackupTool.Configuration;

internal sealed class JsonConfiguration : IConfiguration
{
    private readonly string _filePath;

    public JsonConfiguration(string filePath) => _filePath = filePath;

    public async Task<TConfiguration> LoadAsync<TConfiguration>()
    {
        if (File.Exists(_filePath) == false)
        {
            throw new FileNotFoundException($"File {_filePath} does not exist");
        }

        TConfiguration? configuration;

        await using (var stream = new FileStream(_filePath, FileMode.Open))
        {
            configuration = await JsonSerializer.DeserializeAsync<TConfiguration>(stream);
        }

        if (configuration is null)
        {
            throw new ArgumentException(
                $"File {_filePath} is not recognized as {typeof(TConfiguration).Name} json");
        }

        return configuration;
    }
}
