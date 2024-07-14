#mkdir ~/Library/CloudStorage/Dropbox/hosts/ngi/wp2/wp-content/plugins/dzs-zoomsounds/node_modules
#xattr -w 'com.apple.fileprovider.ignore#P' 1 ~/Library/CloudStorage/Dropbox/hosts/ngi/wp2/wp-content/plugins/dzs-zoomsounds/node_modules

#mkdir ~/Library/CloudStorage/Dropbox/hosts/devsite/zoomsounds/compile-files/node_modules
#xattr -w 'com.apple.fileprovider.ignore#P' 1 ~/Library/CloudStorage/Dropbox/hosts/devsite/zoomsounds/compile-files/node_modules


#mkdir ~/Library/CloudStorage/Dropbox/hosts/devsite/zoomsounds/compile-files/.git
#xattr -w 'com.apple.fileprovider.ignore#P' 1 ~/Library/CloudStorage/Dropbox/hosts/devsite/zoomsounds/compile-files/.git

#cd ~/Library/CloudStorage/Dropbox/hosts/ngi/wp2/wp-content/plugins/dzs-zoomsounds
#git --work-tree=/ --git-dir=~/Library/CloudStorage/Dropbox/hosts/devsite/zoomsounds/compile-files/.git init

#git init --separate-git-dir=~/Library/CloudStorage/Dropbox/hosts/devsite/zoomsounds/compile-files/.git .



mkdir ~/Library/CloudStorage/Dropbox/hosts/devsite/dzs-general-assets/projects/chip-selector/chip-selector/node_modules
mkdir ~/Library/CloudStorage/Dropbox/hosts/devsite/dzs-general-assets/projects/chip-selector/chip-selector/.git
xattr -w 'com.apple.fileprovider.ignore#P' 1 ~/Library/CloudStorage/Dropbox/hosts/devsite/dzs-general-assets/projects/chip-selector/chip-selector/node_modules
xattr -w 'com.apple.fileprovider.ignore#P' 1 ~/Library/CloudStorage/Dropbox/hosts/devsite/dzs-general-assets/projects/chip-selector/chip-selector/.git
#xattr -w com.dropbox.ignored 1 ~/Dropbox/hosts/devsite/zoomsounds/compile-files/node_modules
#xattr -w com.dropbox.ignored 1 ~/Dropbox/hosts/devsite/zoomsounds/compile-files/.git
