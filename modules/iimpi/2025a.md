# iimpi 2025a  
(toolchain)  
  
  
Intel C/C++ and Fortran compilers, alongside Intel MPI.  
  
  
### Toolchain  
None  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load iimpi/2025a`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
dependencies = [
    ('intel-compilers', local_comp_ver),
    ('impi', '2021.15.0', '', ('intel-compilers', local_comp_ver)),
]  
  
