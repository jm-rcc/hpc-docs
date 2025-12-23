[List of Software](../software_shortlist.md)  
# CP2K 9.1  
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
  
  
CP2K is a freely available (GPL) program, written in Fortran 95, to perform atomistic and molecular
 simulations of solid state, liquid, molecular and biological systems. It provides a general framework for different
 methods such as e.g. density functional theory (DFT) using a mixed Gaussian and plane waves approach (GPW), and
 classical pair and many-body potentials.   
  
  
## Homepage  
The homepage for CP2K 9.1   
[https://www.cp2k.org/](https://www.cp2k.org/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load cp2k/9.1-foss-2022a`**  
  
### Toolchain  
foss-2022a  
  
### Toolchain Options  
pic: True  
openmp: True  
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
CP2K depends on the following modules, and they will be loaded automatically with this module.  
  
[Libint 2.7.2 -lmax-6-cp2k (GCC-11.3.0)](libint-2.7.2-gcc-11.3.0-lmax-6-cp2k.md)  
[libxc 5.2.3  (GCC-11.3.0)](libxc-.5.2.3-gcc-11.3.0.md)  
[libxsmm 1.17  (GCC-11.3.0)](libxsmm-1.17-gcc-11.3.0.md)  
[libvori 220621  (GCCcore-11.3.0)](libvori-220621-gcccore-11.3.0.md)  
[FFTW 3.3.10  (GCC-11.3.0)](fftw-3.3.10-gcc-11.3.0.md)  
[PLUMED 2.8.1  (foss-2022a)](plumed-2.8.1-foss-2022a.md)  
  
## Loaded by  
The following modules will load CP2K as dependency.  
  
  
