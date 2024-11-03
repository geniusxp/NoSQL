@echo off

REM Importa dados para o banco de dados "geniusxp"

REM Administradores
mongoimport --db geniusxp --collection administrators --file "documentos_JSON_exportados\administrators.json"

REM Eventos 
mongoimport --db geniusxp --collection events --file "documentos_JSON_exportados\events.json"

REM Usuarios
mongoimport --db geniusxp --collection users --file "documentos_JSON_exportados\users.json"

REM Pagamentos
mongoimport --db geniusxp --collection payments --file "documentos_JSON_exportados\payments.json"

REM Cupons
mongoimport --db geniusxp --collection coupons --file "documentos_JSON_exportados\coupons.json"

REM Notificacoes
mongoimport --db geniusxp --collection notifications --file "documentos_JSON_exportados\notifications.json"

REM Enquetes
mongoimport --db geniusxp --collection polls --file "documentos_JSON_exportados\polls.json"

REM Ingressos
mongoimport --db geniusxp --collection tickets --file "documentos_JSON_exportados\tickets.json"

REM Tipos de Ingressos
mongoimport --db geniusxp --collection ticket_types --file "documentos_JSON_exportados\ticket_types.json"

REM Tipos de Eventos
mongoimport --db geniusxp --collection event_types --file "documentos_JSON_exportados\event_types.json"

REM Palestras
mongoimport --db geniusxp --collection lectures --file "documentos_JSON_exportados\lectures.json"

echo Importacaoo concluida!