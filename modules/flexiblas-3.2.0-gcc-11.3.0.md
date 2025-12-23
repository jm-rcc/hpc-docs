# FlexiBLAS 3.2.0  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
FlexiBLAS is a wrapper library that enables the exchange of the BLAS and LAPACK implementation
used by a program without recompiling or relinking it.  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load flexiblas/3.2.0-gcc-11.3.0`**.  
  
### Toolchain  
GCC-11.3.0  
  
### Toolchain Options  
{'pic': True, 'extra_cflags': '-fstack-protector-strong -fstack-clash-protection', 'extra_fflags': '-fstack-protector-strong -fstack-clash-protection'}  
  
  
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
[OpenBLAS 0.3.20  (GCC-11.3.0)](openblas-0.3.20-gcc-11.3.0.md)  
  
## Homepage  
The homepage for FlexiBLAS 3.2.0 .  
[https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release](https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release)  
