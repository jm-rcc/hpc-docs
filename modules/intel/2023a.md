# intel 2023a  
(toolchain)  
  
  
Compiler toolchain including Intel compilers, Intel MPI and Intel Math Kernel Library (MKL).  
  
  
### Toolchain  
None  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load intel/2023a`** to load the module on Bunya.  
  
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
    ('GCCcore', local_gccver),
    ('binutils', '2.40', '', ('GCCcore', local_gccver)),
    ('intel-compilers', local_comp_ver),
    ('impi', '2021.9.0', '', ('intel-compilers', local_comp_ver)),
    ('imkl', local_comp_ver, '', SYSTEM),
    ('imkl-FFTW', local_comp_ver, '', ('iimpi', version)),
]  
  
