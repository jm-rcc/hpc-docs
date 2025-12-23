# FlexiBLAS 3.4.4  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
FlexiBLAS is a wrapper library that enables the exchange of the BLAS and LAPACK implementation
used by a program without recompiling or relinking it.  
  
  
## Homepage  
The homepage for FlexiBLAS 3.4.4 
[https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release](https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load flexiblas/3.4.4-gcc-13.3.0`**  
  
### Toolchain  
GCC-13.3.0  
  
### Toolchain Options  
pic: True  
extra_cflags: -fstack-protector-strong -fstack-clash-protection  
extra_fflags: -fstack-protector-strong -fstack-clash-protection  
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
FlexiBLAS depends on the following modules, and they will be loaded automatically with this module.  
  
[OpenBLAS 0.3.27  (GCC-13.3.0)](openblas-0.3.27-gcc-13.3.0.md)  
  
## Dependency of modules  
The following modules will load FlexiBLAS as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
