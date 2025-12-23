[List of Software](../software_shortlist.md)  
# foss 2021a  
![Static Badge](https://img.shields.io/badge/class-toolchain-D7D1CC)  
  
  
GNU Compiler Collection (GCC) based compiler toolchain, including
 OpenMPI for MPI support, OpenBLAS (BLAS and LAPACK support), FFTW and ScaLAPACK.  
  
  
## Homepage  
The homepage for foss 2021a   
[https://easybuild.readthedocs.io/en/master/Common-toolchains.html#foss-toolchain](https://easybuild.readthedocs.io/en/master/Common-toolchains.html#foss-toolchain)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load foss/2021a`**  
  
### Toolchain  
system-system  
  
### Toolchain Options  
(none)  
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
  
  
## Dependencies  
foss depends on the following modules, and they will be loaded automatically with this module.  
  
[GCC 10.3.0  (system-system)](gcc-10.3.0.md)  
[OpenMPI 4.1.1  (GCC-10.3.0)](openmpi-4.1.1-gcc-10.3.0.md)  
[FlexiBLAS 3.0.4  (GCC-10.3.0)](flexiblas-3.0.4-gcc-10.3.0.md)  
[FFTW 3.3.9  (gompi-2021a)](fftw-3.3.9-gompi-2021a.md)  
[ScaLAPACK 2.1.0 -fb (gompi-2021a)](scalapack-2.1.0-gompi-2021a-fb.md)  
  
## Loaded by  
The following modules will load foss as dependency.  
  
  
