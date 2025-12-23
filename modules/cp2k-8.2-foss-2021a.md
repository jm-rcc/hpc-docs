[List of Software](../software_shortlist.md)  
# CP2K 8.2 
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
  
  
CP2K is a freely available (GPL) program, written in Fortran 95, to perform atomistic and molecular
 simulations of solid state, liquid, molecular and biological systems. It provides a general framework for different
 methods such as e.g. density functional theory (DFT) using a mixed Gaussian and plane waves approach (GPW), and
 classical pair and many-body potentials.   
  
  
## Homepage  
The homepage for CP2K 8.2  
[https://www.cp2k.org/](https://www.cp2k.org/)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load cp2k/8.2-foss-2021a`**  
  
### Toolchain  
foss-2021a  
  
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
  
  
## Dependencies  
CP2K depends on the following modules, and they will be loaded automatically with this module.  
  
[Libint 2.6.0 -lmax-6-cp2k (GCC-10.3.0)](libint-2.6.0-gcc-10.3.0-lmax-6-cp2k.md)  
[libxc 5.1.5  (GCC-10.3.0)](libxc-.5.1.5-gcc-10.3.0.md)  
[libxsmm 1.16.2  (GCC-10.3.0)](libxsmm-1.16.2-gcc-10.3.0.md)  
[FFTW 3.3.9  (gompi-2021a)](fftw-3.3.9-gompi-2021a.md)  
[PLUMED 2.7.2  (foss-2021a)](plumed-2.7.2-foss-2021a.md)  
  
  
## Other available modules  
These other versions of CP2K are available on Bunya.  
[cp2k/9.1-foss-2022a](../modules/cp2k-9.1-foss-2022a.md)  
  
