# windows
- install in microsoft store
- install font
  ```bash
  oh-my-posh font install
  
  # JetBrains, nerd font
  # and change the font in setting to Jetbrains Nerd Font
  ```
- create profile
  ```bash
  notepad $PROFILE
  ### notepad ###
  clear
  oh-my-posh init pwsh | Invoke-Expression
  ### ####### ###

  # if error
  New-Item -Path $PROFILE -Type File -Force
  ```
- permmisions
  ```bash
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
  ```
- if ur want remove ms u can add ```--no-logo``` in setting windows-powershell.exe --no-logo

# linux
- install oh-my-posh with manual
  ```bash
  set $TERM=xterm-256color
  sudo curl -s https://ohmyposh.dev/install.sh | bash -s -- -d /usr/local/bin
  ```
- change the theme
  ```bash
  git clone https://github.com/JanDeDobbeleer/oh-my-posh
  ```

- startup
  ```bash
  nano .bashrc
  eval "$(oh-my-posh init bash --config ~/craver.omp.json)"
  ```

## fav theme
- https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/themes/craver.omp.json
- https://github.com/xg5-simon/oh-my-posh-Themes