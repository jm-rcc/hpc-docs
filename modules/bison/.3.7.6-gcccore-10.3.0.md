# Bison 3.7.6  
(lang)  
  
  
Bison is a general-purpose parser generator that converts an annotated context-free grammar
 into a deterministic LR or generalized LR (GLR) parser employing LALR(1) parser tables.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load bison/.3.7.6-gcccore-10.3.0`** to load the module on Bunya.  
  
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
dependencies = [
    ('M4', '1.4.18'),
    # use same binutils version that was used when building GCCcore toolchain
    ('binutils', '2.36.1', '', SYSTEM),
]  
  
