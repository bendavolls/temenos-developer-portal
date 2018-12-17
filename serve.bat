SET PATH=%CD%\tools\docfx;%PATH%
REM docfx "docfx_project\docfx.json" -t "docfx_project\template\temenos" --serve --port 9090
SET PATH=%CD%\tools\docfx;D:\Tools\wkhtmltopdf\bin;%PATH%
docfx "%CD%\docfx_project\docfx.json" -t "%CD%\docfx_project\template\temenos","%CD%\docfx_project\template\wide\src","%CD%\docfx_project\template\plugins\rest.tagpage.2.22.1\content","%CD%\docfx_project\template\plugins\rest.operationpage.2.22.1\content"  --serve --port 9090
REM docfx "docfx_project\docfx.json" --serve --port 9090