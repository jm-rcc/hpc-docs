# gfbf 2022a  
(toolchain)  
  
  
GNU Compiler Collection (GCC) based compiler toolchain, including
 FlexiBLAS (BLAS and LAPACK support) and (serial) FFTW.  
  
  
### Toolchain  
None  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load gfbf/2022a`** to load the module on Bunya.  
  
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
    ('GCC', local_gccver),
    ('FlexiBLAS', '3.2.0', '', ('GCC', local_gccver)),
    ('FFTW', '3.3.10', '', ('GCC', local_gccver)),
]  
  
