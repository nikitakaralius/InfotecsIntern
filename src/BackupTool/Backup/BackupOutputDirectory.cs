namespace BackupTool.Backup;

internal sealed class BackupOutputDirectory
{
    public readonly string OuterDirectory;

    private BackupOutputDirectory(string outerDirectory) => OuterDirectory = outerDirectory;

    public static BackupOutputDirectory Create(string outerDirectory, Func<string, bool>? createIfNotFound = null)
    {
        if (Directory.Exists(outerDirectory) == false)
        {
            if (createIfNotFound is not null && createIfNotFound(outerDirectory))
            {
                Directory.CreateDirectory(outerDirectory);
            }
            else
            {
                throw new DirectoryNotFoundException($"Output directory {outerDirectory} doest not exist");
            }
        }

        return new(outerDirectory);
    }

    public static implicit operator string(BackupOutputDirectory directory) => directory.OuterDirectory;
}
