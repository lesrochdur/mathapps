$appsDir = Join-Path $PSScriptRoot "public\apps"
$button  = '<a href="/" style="position:fixed;top:15px;left:15px;z-index:9999;background:#8f67ca;color:white;padding:10px 18px;border-radius:10px;text-decoration:none;font-family:sans-serif;font-weight:bold;box-shadow:0 3px 10px rgba(0,0,0,0.2);font-size:14px;">← Retour Math''APPS</a>'

$files = Get-ChildItem -Path $appsDir -Filter "*.html"

if ($files.Count -eq 0) {
    Write-Host "Aucun fichier .html trouve dans $appsDir"
    exit 0
}

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    if ($content -match "Retour Math'APPS") {
        Write-Host "DÉJÀ INJECTÉ : $($file.Name)"
        continue
    }

    $newContent = $content -replace '(<body[^>]*>)', "`$1`n$button"

    if ($newContent -eq $content) {
        Write-Host "PAS DE <body> TROUVÉ : $($file.Name)"
        continue
    }

    [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "INJECTÉ : $($file.Name)"
}

Write-Host "`nTermine -- $($files.Count) fichier(s) traite(s)."
