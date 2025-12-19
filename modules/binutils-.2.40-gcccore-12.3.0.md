# binutils 2.40  
(tools)  
  
  
binutils: GNU binary utilities  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '12.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load binutils/.2.40-gcccore-12.3.0`** to load the module on Bunya.  
  
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
    ('flex', '2.6.4'),
    ('Bison', '3.8.2'),
    # use same binutils version that was used when building GCC toolchain, to 'bootstrap' this binutils
    ('binutils', version, '', SYSTEM)
]  
  
