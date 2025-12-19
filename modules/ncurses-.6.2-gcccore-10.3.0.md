# ncurses 6.2  
(devel)  
  
  
The Ncurses (new curses) library is a free software emulation of curses in
 System V Release 4.0, and more. It uses Terminfo format, supports pads and
 color and multiple highlights and forms characters and function-key mapping,
 and has all the other SYSV-curses enhancements over BSD Curses.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
{'pic': True}  
  
  
### Usage  
Use the command **`module load ncurses/.6.2-gcccore-10.3.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4 mi210  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
dependencies = [('binutils', '2.36.1')]

local_common_configopts = "--with-shared --enable-overwrite --without-ada --enable-symlinks --with-versioned-syms "
configopts = [
    # build ncurses: serial build in default paths with shared libraries
    local_common_configopts,
    # build ncursesw: serial with UTF-8
    local_common_configopts + "--enable-ext-colors --enable-widec --includedir=%(installdir)s/include/ncursesw/",
]  
  
