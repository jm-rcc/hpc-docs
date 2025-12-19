# make 4.3  
(devel)  
  
  
GNU version of make utility  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load make/.4.3-gcccore-10.3.0`** to load the module on Bunya.  
  
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

postinstallcmds = ["cd %(installdir)s/bin && ln -s make gmake"]

sanity_check_paths = {
    'files': ['bin/gmake', 'bin/make'],
    'dirs': []
}

sanity_check_commands = [
    "gmake --help",
    "make --help",
]  
  
