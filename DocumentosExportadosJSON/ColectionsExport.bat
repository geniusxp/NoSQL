@echo off

set DB_NAME=geniusxp
set OUTPUT_DIR=C:\CollectionsExportedFromGeniusxp

rem Crie o diretório de saída se não existir
if not exist "%OUTPUT_DIR%" (
    mkdir "%OUTPUT_DIR%"
)

rem Liste as coleções que você deseja exportar
set collections=users payments administrators coupons notifications polls ticket_types tickets lectures events

for %%c in (%collections%) do (
    mongoexport --db %DB_NAME% --collection %%c --out "%OUTPUT_DIR%\%%c.json" --jsonArray
)

echo Exportacao concluida!
echo Verifique o diretorio: "%OUTPUT_DIR%"
pause