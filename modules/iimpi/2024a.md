# iimpi 2024a  
(toolchain)  
  
  
Intel C/C++ and Fortran compilers, alongside Intel MPI.  
  
  
### Toolchain  
None  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load iimpi/2024a`** to load the module on Bunya.  
  
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
    ('intel-compilers', local_comp_ver),
    ('impi', '2021.13.0', '', ('intel-compilers', local_comp_ver)),
]  
  
