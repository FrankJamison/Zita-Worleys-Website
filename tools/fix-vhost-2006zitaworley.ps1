$ErrorActionPreference = 'Stop'

$vhosts = 'C:\xampp\apache\conf\extra\httpd-vhosts.conf'
$serverName = '2006zitaworley.localhost'
$newDocRoot = 'D:/Websites/2026FCJamison/projects/2006ZitaWorley'

if (-not (Test-Path $vhosts)) {
    throw "Missing vhosts file: $vhosts"
}

$timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$backup = "${vhosts}.bak_${timestamp}"
Copy-Item $vhosts $backup -Force

$raw = Get-Content $vhosts -Raw
$pattern = '(?s)<VirtualHost \*:80>.*?ServerName\s+' + [regex]::Escape($serverName) + '.*?</VirtualHost>'

if (-not ([regex]::IsMatch($raw, $pattern))) {
    throw "Could not find a <VirtualHost *:80> block containing ServerName $serverName"
}

$nl = "`r`n"
$newBlockLines = @(
    '<VirtualHost *:80>',
    "    DocumentRoot `"$newDocRoot`"",
    "    ServerName $serverName",
    "    <Directory `"$newDocRoot`">",
    '        Options Indexes FollowSymLinks',
    '        AllowOverride All',
    '        Require all granted',
    '    </Directory>',
    '</VirtualHost>',
    ''
)
$newBlock = ($newBlockLines -join $nl)

$updated = [regex]::Replace($raw, $pattern, $newBlock, 1)
Set-Content -Path $vhosts -Value $updated -Encoding utf8

Write-Host "Updated vhost for $serverName" -ForegroundColor Green
Write-Host "Backup: $backup" -ForegroundColor DarkGray
