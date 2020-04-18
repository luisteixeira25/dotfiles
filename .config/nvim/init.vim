" Basic settings

set nocompatible
set mouse=a
filetype plugin on " required by nerdcommenter
syntax on
set ignorecase
set smartcase
set encoding=utf-8
set expandtab
set shiftwidth=2
set softtabstop=2
set tabstop=2
set number relativenumber
set termguicolors
set t_Co=256
set wildmode=longest,list,full " Autocompletion
set splitbelow splitright " Fix splitting
set clipboard+=unnamedplus " Use system clipboard
set noswapfile
set modifiable " Allow Nerdtree to create files

call plug#begin('~/.config/nvim/plugged')
Plug 'vim-airline/vim-airline'
" Plug 'terroo/terroo-colors'
Plug 'preservim/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
Plug 'ryanoasis/vim-devicons'
Plug 'vimwiki/vimwiki'
Plug 'nathanaelkane/vim-indent-guides'
Plug 'tpope/vim-surround'
Plug 'preservim/nerdcommenter'
Plug 'rrethy/vim-hexokinase', { 'do': 'make hexokinase' }
PLug 'iamcco/markdown-preview.nvim'
Plug 'mattn/emmet-vim'
Plug 'sheerun/vim-polyglot'
" Plug 'junegunn/seoul257.vim'
Plug 'PotatoesMaster/i3-vim-syntax'
Plug 'dracula/vim', { 'as': 'dracula' }
call plug#end()

colorscheme dracula
" colorscheme terroo-colors

" let g:airline_theme='terrooairline'
let g:airline_powerline_fonts = 1
" let g:airline#extensions#tabline#enabled = 1 

" Vim Emmet
let g:user_emmet_leader_key=','

" Vim Indent Guides
let g:indent_guides_enable_on_vim_startup = 1

" NERDTree
autocmd vimenter * NERDTree "open a NERDTree automatically when vim starts up
map <C-n> :NERDTreeToggle<CR>
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'

" nerdtree-git-plugin

let g:NERDTreeIndicatorMapCustom = {
    \ "Modified"  : "✹",
    \ "Staged"    : "✚",
    \ "Untracked" : "✭",
    \ "Renamed"   : "➜",
    \ "Unmerged"  : "═",
    \ "Deleted"   : "✖",
    \ "Dirty"     : "✗",
    \ "Clean"     : "✔︎",
    \ 'Ignored'   : '☒',
    \ "Unknown"   : "?"
    \ }


" Vim Hexokinase
let g:Hexokinase_optInPatterns = [
\     'full_hex',
\     'triple_hex',
\     'rgb',
\     'rgba',
\     'hsl',
\     'hsla',
\     'colour_names'
\ ]
let g:Hexokinase_highlighters = ['backgroundfull']

" Reenable hexokinase on enter
autocmd VimEnter * HexokinaseTurnOn
