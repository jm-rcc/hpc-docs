# FlexiBLAS 3.4.5  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
FlexiBLAS is a wrapper library that enables the exchange of the BLAS and LAPACK implementation
used by a program without recompiling or relinking it.  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load flexiblas/3.4.5-gcc-14.2.0`**.  
  
### Toolchain  
GCC-14.2.0  
  
### Toolchain Options  
{'pic': True, 'extra_cflags': '-fstack-protector-strong -fstack-clash-protection', 'extra_fflags': '-fstack-protector-strong -fstack-clash-protection'}  
  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
[OpenBLAS 0.3.29  (GCC-14.2.0)](openblas-0.3.29-gcc-14.2.0.md)  
  
## Homepage  
The homepage for FlexiBLAS 3.4.5 .  
[https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release](https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release)  
