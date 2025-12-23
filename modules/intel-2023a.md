# intel 2023a  
![Static Badge](https://img.shields.io/badge/class-toolchain-D7D1CC)  
  
  
Compiler toolchain including Intel compilers, Intel MPI and Intel Math Kernel Library (MKL).  
  
  
## Homepage  
The homepage for intel 2023a 
[https://easybuild.readthedocs.io/en/master/Common-toolchains.html#intel-toolchain](https://easybuild.readthedocs.io/en/master/Common-toolchains.html#intel-toolchain)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load intel/2023a`**  
  
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
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
intel depends on the following modules, and they will be loaded automatically with this module.  
  
[GCCcore 12.3.0  (system-system)](gcccore-.12.3.0.md)  
[binutils 2.40  (GCCcore-12.3.0)](binutils-.2.40-gcccore-12.3.0.md)  
[intel-compilers 2023.1.0  (system-system)](intel-compilers-2023.1.0.md)  
[impi 2021.9.0  (intel-compilers-2023.1.0)](impi-2021.9.0-intel-compilers-2023.1.0.md)  
[imkl 2023.1.0  (system-system)](imkl-2023.1.0.md)  
[imkl-FFTW 2023.1.0  (iimpi-2023a)](imkl-fftw-2023.1.0-iimpi-2023a.md)  
  
## Dependency of modules  
The following modules will load intel as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
