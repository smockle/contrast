REM Clean 'dist' directory
rmdir /s /q "dist"

REM Compile TypeScript using config in 'tsconfig.json'
call tsc -d

REM Rename files in 'dist' to support ES modules with '.mjs'
call "scripts\rename.bat"
