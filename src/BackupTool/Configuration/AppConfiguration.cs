using static System.Array;

namespace BackupTool.Configuration;

internal sealed class AppConfiguration
{
    public string[] SourceDirectories { get; init; } = Empty<string>();

    public string OutputDirectory { get; init; } = "";

    public string LogLevel { get; init; } = "";
}
