# hyprland
- https://wiki.hyprland.org/Getting-Started/Installation/

- installastion
  ```bash
  sudo pacman -S hyprland
  ```
- vm
  ```bash
  # Install libvirt and qemu things.
  sudo pacman -S libvirt virt-viewer qemu-common

  # Add yourself to the libvirt group.
  sudo usermod -a -G libvirt USER # Replace 'USER' with your username.
  
  # Enable and start libvirtd.
  systemctl enable --now libvirtd
  ```

- clone the theme
  ```bash
  git clone https://github.com/end-4/dots-hyprland

  # OR

  bash <(curl -s "https://end-4.github.io/dots-hyprland-wiki/setup.sh")
  ```

