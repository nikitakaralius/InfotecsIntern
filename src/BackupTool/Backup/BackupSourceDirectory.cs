namespace BackupTool.Backup;

internal sealed class BackupSourceDirectory
{
    public readonly string Path;

    private BackupSourceDirectory(string path) => Path = path;

    public static BackupSourceDirectory FromString(string path)
    {
        if (Directory.Exists(path) == false)
        {
            throw new DirectoryNotFoundException($"Source directory {path} doest not exist");
        }

        return new BackupSourceDirectory(path);
    }

    public static implicit operator string(BackupSourceDirectory directory) => directory.Path;
}
