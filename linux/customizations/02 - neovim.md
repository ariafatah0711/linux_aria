# neovim
- install
  ```bash
  # add the repo
  $ sudo add-apt-repository ppa:neovim-ppa/unstable

  # update & install
  $ sudo apt-get update
  $ sudo apt-get install neovim

  $ sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  ```

- ur plugin
  ```bash
  mkdir -p $/config/nvim && cd $/config/nvim
  nvim init.vim
  ***
  masukan configurasi dan plugin yang ingin di install

  https://github.com/NeuralNine/config-files/blob/master/init.vim
  ***

  nvim .
  ESC
  :PlugInstall
  ```

## lazy vim
```bash
git clone https://github.com/LazyVim/starter ~/.config/nvim

cd ~/.config/nvim
nvim .

MasonInstall lua-language-server
```

- plugin twilight
  ```bash
  /nvim/lua/config/option.lua

  /nvim/lua/plugin/twilight.lua
  Lazy sync
  ```

## error
- No C compiler found! "cc", "gcc", "clang", "cl", "zig" are not executable.
  - ```sudo apt update && sudo apt install build-essential```