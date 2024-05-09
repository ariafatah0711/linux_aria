# windows
- install in microsoft store
- oh-my-posh font install
    - nerd font
- notepad $PROFILE
    - if error u can
    - New-Item -Path $PROFILE -Type File -Force
- oh-my-posh init pwsh | Invoke-Expression
- Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine


# linux
set $TERM=xterm-256color
sudo curl -s https://ohmyposh.dev/install.sh | bash -s -- -d /usr/local/bin

git clone https://github.com/JanDeDobbeleer/oh-my-posh
nano .bashrc
eval "$(oh-my-posh init bash --config ~/craver.omp.json)"