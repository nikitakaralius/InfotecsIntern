namespace BackupTool;

internal static class Functions
{
    public static string EnsureCorrectPath(params string[] firstLookAt)
    {
        if (firstLookAt.Length == 0)
        {
            throw new ArgumentException("Default look path must be specified", nameof(firstLookAt));
        }

        foreach (string expected in firstLookAt)
        {
            if (File.Exists(expected))
                return expected;
        }

        string path = firstLookAt.First();

        while (File.Exists(path) == false)
        {
            Log.Error("Unable to find {File} file, please provide a new path: ", path);
            path = Console.ReadLine()!;
        }

        return path;
    }

    public static BackupSourceDirectory[] MapSourceDirectories(AppConfiguration from) =>
        from.SourceDirectories
                     .Select(x => BackupSourceDirectory.FromString(x))
                     .ToArray();
}
