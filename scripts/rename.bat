REM Recursively rename '.js.ts' files in the 'dist' folder to '.js'.
for /r "dist" %%i in (*.js.js) do ren "%%i" "%%~ni.js"

REM Recursively rename '.mjs.ts' files in the 'dist' folder to '.mjs'.
for /r "dist" %%i in (*.mjs.js) do ren "%%i" "%%~ni.mjs"

REM Recursively rename '.js.d.ts' files in the 'dist' folder to '.d.ts'
for /r "dist" %%i in (*.js.d.ts) do ren "%%i" "%%~ni.d.js"
