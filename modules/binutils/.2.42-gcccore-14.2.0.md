# binutils 2.42  
(tools)  
  
  
binutils: GNU binary utilities  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '14.2.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load binutils/.2.42-gcccore-14.2.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
dependencies = [
    ('flex', '2.6.4'),
    ('Bison', '3.8.2'),
    # use same binutils version that was used when building GCC toolchain, to 'bootstrap' this binutils
    ('binutils', version, '', SYSTEM)
]  
  
