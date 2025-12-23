[List of Software](../software_shortlist.md)  
# ScaLAPACK 2.1.0 -fb 
![Static Badge](https://img.shields.io/badge/class-numlib-D7D1CC)  
  
  
The ScaLAPACK (or Scalable LAPACK) library includes a subset of LAPACK routines
 redesigned for distributed memory MIMD parallel computers.  
  
  
## Homepage  
The homepage for ScaLAPACK 2.1.0 -fb  
[https://www.netlib.org/scalapack/](https://www.netlib.org/scalapack/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load scalapack/2.1.0-gompi-2021a-fb`**  
  
### Toolchain  
gompi-2021a  
  
### Toolchain Options  
extra_fflags: -lpthread  
openmp: True  
pic: True  
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
ScaLAPACK depends on the following modules, and they will be loaded automatically with this module.  
  
[FlexiBLAS 3.0.4  (GCC-10.3.0)](flexiblas-3.0.4-gcc-10.3.0.md)  
  
## Loaded by  
The following modules will load ScaLAPACK as dependency.  
  
[foss 2021a  (system-system)](foss-2021a.md)  
  
