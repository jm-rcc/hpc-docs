[List of Software](../software_shortlist.md)  
# FlexiBLAS 3.4.5 
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
FlexiBLAS is a wrapper library that enables the exchange of the BLAS and LAPACK implementation
used by a program without recompiling or relinking it.  
  
  
## Homepage  
The homepage for FlexiBLAS 3.4.5  
[https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release](https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load flexiblas/3.4.5-gcc-14.2.0`**  
  
### Toolchain  
GCC-14.2.0  
  
### Toolchain Options  
pic: True  
extra_cflags: -fstack-protector-strong -fstack-clash-protection  
extra_fflags: -fstack-protector-strong -fstack-clash-protection  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
FlexiBLAS depends on the following modules, and they will be loaded automatically with this module.  
  
[OpenBLAS 0.3.29  (GCC-14.2.0)](openblas-0.3.29-gcc-14.2.0.md)  
  
## Loaded by  
The following modules will load FlexiBLAS as dependency.  
  
[ScaLAPACK 2.2.2 -fb (gompi-2025a)](scalapack-2.2.2-gompi-2025a-fb.md)  
[foss 2025a  (system-system)](foss-2025a.md)  
  
## Other available modules  
These other versions of FlexiBLAS are available on Bunya.  
[flexiblas/3.4.4-gcc-13.3.0](../modules/flexiblas-3.4.4-gcc-13.3.0.md)  
  
[flexiblas/3.3.1-gcc-12.3.0](../modules/flexiblas-3.3.1-gcc-12.3.0.md)  
  
[flexiblas/3.2.0-gcc-11.3.0](../modules/flexiblas-3.2.0-gcc-11.3.0.md)  
  
[flexiblas/3.0.4-gcc-10.3.0](../modules/flexiblas-3.0.4-gcc-10.3.0.md)  
  
