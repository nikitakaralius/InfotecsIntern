namespace BackupTool.Backup;

internal sealed class BackupSourceDirectory
{
    private const string TempMark = "~temp;";

    public readonly string DirectoryPath;

    private BackupSourceDirectory(string directoryPath) => DirectoryPath = directoryPath;

    public static BackupSourceDirectory FromString(string path)
    {
        if (Directory.Exists(path) == false)
        {
            throw new DirectoryNotFoundException($"Source directory {path} does not exist");
        }

        return new BackupSourceDirectory(path);
    }

    public void CopyTo(BackupOutputDirectory outputDirectory, Func<FileInfo, Exception, bool> continueOnError)
    {
        void CopyDirectory(string source, string destination)
        {
            Directory.CreateDirectory(destination);

            var directory = new DirectoryInfo(source);

            foreach (var file in directory.GetFiles())
            {
                try
                {
                    string copyFilePath = Path.Combine(destination, file.Name);
                    Log.Debug("Copying file: {File}", file.FullName);
                    file.CopyTo(copyFilePath);
                }
                catch (Exception e)
                {
                    if (continueOnError(file, e))
                    {
                        continue;
                    }

                    throw;
                }
            }

            foreach (var subdirectory in directory.GetDirectories())
            {
                string copyDirectoryPath = Path.Combine(destination, subdirectory.Name);
                CopyDirectory(subdirectory.FullName, copyDirectoryPath);
            }
        }

        string destination = Path.Combine(outputDirectory.OuterDirectory, TempMark + new DirectoryInfo(this).Name);
        CopyDirectory(this, destination);
    }

    public static implicit operator string(BackupSourceDirectory directory) => directory.DirectoryPath;
}
