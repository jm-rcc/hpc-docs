# KronaTools 2.8.1  
(bio)  
  
  
Krona Tools is a set of scripts to create Krona charts from
several Bioinformatics tools as well as from text and XML files.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '11.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load kronatools/2.8.1-gcccore-11.3.0`** to load the module on Bunya.  
  
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
dependencies = [('Perl', '5.34.1')]

postinstallcmds = [
    "cd %(installdir)s && ./install.pl --prefix=%(installdir)s;",
    "cd %(installdir)s/bin && ln -s ../updateAccessions.sh . && ln -s ../updateTaxonomy.sh .",
]  
  
