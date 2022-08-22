namespace BackupTool.Configuration;

internal interface IConfiguration
{
    Task<TConfiguration> LoadAsync<TConfiguration>();
}
