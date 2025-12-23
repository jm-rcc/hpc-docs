# ScaLAPACK 2.2.0 -fb 
![Static Badge](https://img.shields.io/badge/class-numlib-D7D1CC)  
  
  
The ScaLAPACK (or Scalable LAPACK) library includes a subset of LAPACK routines
 redesigned for distributed memory MIMD parallel computers.  
  
  
## Homepage  
The homepage for ScaLAPACK 2.2.0 -fb
[https://www.netlib.org/scalapack/](https://www.netlib.org/scalapack/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load scalapack/2.2.0-gompi-2022a-fb`**  
  
### Toolchain  
gompi-2022a  
  
### Toolchain Options  
extra_fflags: -lpthread  
openmp: True  
pic: True  
usempi: True  
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
ScaLAPACK depends on the following modules, and they will be loaded automatically with this module.  
  
[FlexiBLAS 3.2.0  (GCC-11.3.0)](flexiblas-3.2.0-gcc-11.3.0.md)  
  
## Dependency of modules  
The following modules will load ScaLAPACK as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
