@echo off
setlocal
cd /d "%~dp0"
set "PNPM=C:\Users\Eugen\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd"

if not exist "%PNPM%" (
  echo ERROR: Codex pnpm runtime was not found:
  echo %PNPM%
  pause
  exit /b 1
)

call "%PNPM%" build
endlocal
