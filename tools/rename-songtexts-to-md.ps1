Param(
    [string]$Root = "c:\source\songbook\Songtexts"
)

Get-ChildItem -Path $Root -File | ForEach-Object {
    $newName = "{0}.md" -f $_.Name
    if (-not $_.Name.ToLower().EndsWith('.md')) {
        Rename-Item -LiteralPath $_.FullName -NewName $newName
    }
}
