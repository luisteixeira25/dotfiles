# alias neofetch='clear && neofetch'
neofetch
source $ZDOTDIR/plugins/powerlevel10k/powerlevel10k.zsh-theme
source $ZDOTDIR/plugins/fast-syntax-highlighting/fast-syntax-highlighting.plugin.zsh
source $ZDOTDIR/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source $ZDOTDIR/plugins/zsh-completions/zsh-completions.plugin.zsh

source $HOME/.asdf/asdf.sh
#fpath=(${ASDF_DIR}/completions $fpath)


# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.config/zsh/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Lines configured by zsh-newuser-install
HISTFILE=~/.config/zsh/histfile
HISTSIZE=10000
SAVEHIST=20000
bindkey -e
# End of lines configured by zsh-newuser-install

# The following lines were added by compinstall
zstyle :compinstall filename '/home/wilson/.config/.zshrc'
autoload -Uz compinit
compinit
# End of lines added by compinstall

alias dotfiles='/usr/bin/git --git-dir=$HOME/git.repos/wmfaustino/dotfiles/ --work-tree=$HOME'
alias vim=nvim
alias l='ls -lAh --color --group-directories-first'
alias grep=ag
alias mkdir='mkdir -p'

# To customize prompt, run `p10k configure` or edit ~/.config/zsh/.p10k.zsh.
[[ ! -f ~/.config/zsh/.p10k.zsh ]] || source ~/.config/zsh/.p10k.zsh

