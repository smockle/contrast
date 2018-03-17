REM Clean 'dist' directory
rmdir /s /q "dist"

REM Compile TypeScript using config in 'tsconfig.json'
tsc -d

REM Rename files in 'dist' to support ES modules with '.mjs'
CALL "scripts\rename.bat"
