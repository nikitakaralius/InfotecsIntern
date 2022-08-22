namespace BackupTool.Backup;

internal sealed class BackupService
{
    public enum CompletionStatus
    {
        Success,
        DoneWithErrors,
        Canceled
    }

    private readonly BackupSourceDirectory[] _sourceDirectories;
    private readonly BackupOutputDirectory _outputDirectory;

    public BackupService(BackupSourceDirectory[] sourceDirectories, BackupOutputDirectory outputDirectory)
    {
        _sourceDirectories = sourceDirectories;
        _outputDirectory = outputDirectory;
    }

    public CompletionStatus Execute()
    {
        Log.Debug("Starting backup...");

        var status = CompletionStatus.Success;

        foreach (var sourceDirectory in _sourceDirectories)
        {
            try
            {
                sourceDirectory.CopyTo(_outputDirectory, (file, exception) =>
                {
                    Log.Error("Unable to copy {File}: {Error}", file.FullName, exception.Message);
                    Log.Error("Do you want to skip this file? {Yes} / {No}", "[Y]es", "[N]o");
                    status = CompletionStatus.DoneWithErrors;
                    return Input() == "y";
                });
            }
            catch (Exception)
            {
                Log.Information("Deleting Output Directory...");
                _outputDirectory.Delete();
                return CompletionStatus.Canceled;
            }
        }

        return status;
    }
}
